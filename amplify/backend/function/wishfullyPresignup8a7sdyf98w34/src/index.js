var AWS = require("aws-sdk");
//import { CognitoIdentityServiceProvider } from 'aws-sdk';

const providerName = {
  google: 'Google',
  facebook: 'Facebook'
};

const tryMergeUserAccounts = async (event) => {
  const { userPoolId, userName } = event;
  const { email } = event.request.userAttributes;
  const [provider, providerValue] = userName.split('_');

  // merge social provider with existing cognito user by email
  if (['facebook', 'google'].includes(provider) && providerValue) {
    const cognito = new AWS.CognitoIdentityServiceProvider();
    const { Users } = await cognito
      .listUsers({
        UserPoolId: userPoolId,
        AttributesToGet: ['email'],
        Filter: `email = "${email}"`
      })
      .promise();

    for (const user of Users) {
      await cognito
        .adminLinkProviderForUser({
          UserPoolId: userPoolId,
          DestinationUser: {
            ProviderName: 'Cognito',
            ProviderAttributeValue: user.Username
          },
          SourceUser: {
            ProviderName: providerName[provider],
            ProviderAttributeName: 'Cognito_Subject',
            ProviderAttributeValue: providerValue
          }
        })
        .promise();
    }

    // return true to indicate users were merged
    return Users.length > 0;
  }

  return false;
};

exports.handler = async (event, _, callback) => {
  // continue the flow only if did not link providers
  const wereUsersMerged = await tryMergeUserAccounts(event);
  return wereUsersMerged ? undefined : callback(null, event);
};