var util = require('./../common/util');
var constants = require('./../common/constants');
var dbUtil = require('./../common/dbUtil');

function isClientSubscriptionValid(req, res, next) {
    var clientKey=req.headers.clientkey;

    console.log('Client Subscription Key: ',clientKey);
    
    if(clientKey!==undefined && clientKey!==''){

        var p = dbUtil.searchRecords(constants.DB_QUERIES.CONFIG.GETCONFIGBYKEYVAL, ['CLIENTKEY',clientKey]);
        p.then(function(value) {
            console.log('Client Subscription Found',JSON.stringify(value));
            next();
        });

        p.catch(function(e) {
            console.log("Error Found! ", e);
            res.json(util.getFailureResponse({message:'Client Subscription Key is Invalid!'}));
        });
        
    }
    else{
        console.log('Missing Client Subscription');
        res.json(util.getFailureResponse({message:'Missing Client Subscription Key!'}));
    }
};

module.exports={
    isClientSubscriptionValid:isClientSubscriptionValid
}