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
  console.log('event: ', event);
  console.log('records: ', event.Records);
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
      var paramsEvent = {
        TableName: "Event-jqycbvfijneindkzo5hlnxjn4a-prod",
        Key: {
          id: { S: rec.eventId },
        },
      };

      var respUser = await ddb.getItem(paramsUser).promise();
      var respEvent = await ddb.getItem(paramsEvent).promise();

      var user = parse({ M: respUser.Item });
      var eventS = parse({ M: respEvent.Item });

      // console.log('user: ', user);
      // console.log('eventS: ', eventS);
      var profileUrl = `https://d2lsjvajmfum6m.cloudfront.net/b3a6a233cfc34657b836907408eee098/_p/${eventS.id}.jpg?version=${eventS.version}`;
      var coverUrl = `https://d2lsjvajmfum6m.cloudfront.net/b3a6a233cfc34657b836907408eee098/_c/${eventS.id}.jpg?version=${eventS.version}`;
      var inviteUrl = `https://dev.wishfully.co.uk/event/${rec.id}`;
      

      var res = await axios.post("https://aohi336p0e.execute-api.eu-west-2.amazonaws.com/Stage/send", {
        toEmails: [rec.email],
        subject: "You're invited: Wishfully",
        message: "",
        template: "event_invite_template.html",
        data: [
          { key: "Name", value: user.firstName },
          { key: "eventName", value: eventS.name },
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
