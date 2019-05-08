var AWS= require("aws-sdk")

exports.handler = function (event, context, callback) {

    callback(null, { "message": "Successfully executed" });
    let jsonObj = {};
    let jsonStr = JSON.stringify(jsonObj);
}