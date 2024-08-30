var AWS = require("aws-sdk");
const { default: axios } = require("axios");
AWS.config.update({ region: "eu-west-2" });
var parse = AWS.DynamoDB.Converter.output;

// Create the DynamoDB service object
var ddb = new AWS.DynamoDB({ apiVersion: "2012-08-10" });

exports.handler = async(event, context) => {
  if (!event.Records) {
    return;
  }

  for (const record of event.Records) {
    if (record.eventName === "INSERT") {
      var rec = parse({ M: record.dynamodb.NewImage });
      // console.log("eventID: ", record.eventID);
      // console.log("eventName: ", record.eventName);
      // console.log("DynamoDB Record: %j", rec);
      var paramsUser = {
        TableName: "User-jqycbvfijneindkzo5hlnxjn4a-prod",
        Key: {
          id: { S: rec.owner },
        },
      };
      var paramsGroup = {
        TableName: "Group-jqycbvfijneindkzo5hlnxjn4a-prod",
        Key: {
          id: { S: rec.groupId },
        },
      };

      var paramsGroupUsers = {
        TableName: "Group-jqycbvfijneindkzo5hlnxjn4a-prod",
        Key: {
          id: { S: rec.groupId },
        },
      };

      var respUser = await ddb.getItem(paramsUser).promise();
      var respGroup = await ddb.getItem(paramsGroup).promise();
      var respGroupUsers = await ddb.query(paramsGroupUsers).promise();
      
      var groupUsers = parse({M: respGroupUsers.Items});
      

      var user = parse({ M: respUser.Item });
      var group = parse({ M: respGroup.Item });

      // console.log('senderUser: ', user);
      // console.log('group: ', group);
      var profileUrl = `https://d2lsjvajmfum6m.cloudfront.net/086156a78acd465bb3f8177a6c201ca9/_p/${group.id}.jpg?version=${group.version}`;
      var coverUrl = `https://d2lsjvajmfum6m.cloudfront.net/086156a78acd465bb3f8177a6c201ca9/_c/${group.id}.jpg?version=${group.version}`;
      var inviteUrl = `https://dev.wishfully.co.uk/group/${rec.id}`;

      var res = await axios.post("https://aohi336p0e.execute-api.eu-west-2.amazonaws.com/Stage/send", {
        toEmails: [rec.email],
        subject: `${user.firstName} invited you to join group: ${group.name}`,
        message: "",
        template: "group_invite_template.html",
        data: [
          { key: "Name", value: user.firstName },
          { key: "groupName", value: group.name },
          { key: "profileUrl", value: profileUrl},
          { key: "coverUrl", value: coverUrl},
          { key: "inviteUrl", value: inviteUrl},
        ],
      });
      
      let data = res.data;
      console.log(data);
    }
  }
  return `Successfully processed ${event.Records.length} records.`;
};
