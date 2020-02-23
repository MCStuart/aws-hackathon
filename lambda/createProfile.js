console.log('Loading function');

var AWS = require('aws-sdk');

AWS.config.update({ region: 'us-west-2' });

var dynamodb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

exports.handler = (event, context, callback) => {
    var params = {
        Item: {
            "email": { S: event.email }
        },
        "TableName": "profiles"
    };

    console.log(params);

    dynamodb.putItem(params, function (err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else console.log(data);           // successful response
    });


    console.log('Received event:', JSON.stringify(event, null, 2));

    context.succeed({ "status": "successfully created" + event.email });

};
