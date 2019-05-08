/*  20180508 Samrat
    HOW TO USE:
    It will receive parameter value from Connect as timeInQueue
    This is a Connect Function which returns 2 parameter Mins and Seconds
    Pleas
*/ 

exports.handler = (event, context, callback) => {
    
            let input = event.Details.Parameters.timeInQueue;
            console.log("Samrat TimeinQueue ::" + input);
            (input > 60) ? callback(null, 
            { 
                "minutes":Math.floor(parseInt(input) / 60),
                "seconds": (input%60)
            }
            ) : callback(null, 
            { 
                "minutes": "0",
                "seconds": input
            });

    
};