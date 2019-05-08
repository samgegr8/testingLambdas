var AWS= require("aws-sdk")

exports.handler = function (event, context, callback) {

   console.log("Getting The values" + event.stringify);
    callback(null, { "message": "Successfully executed" });
   
}