var constants = require('./../common/constants');

function getSuccessResponse(data){
    var res={status:constants.RESULTS.SUCCESS,result:data};
    
    return res;
}

function getFailureResponse(failureCode, data){
    var res={status:constants.RESULTS.FAILURE,code:failureCode, result:data};

    return res;
}


module.exports={
    getSuccessResponse:getSuccessResponse,
    getFailureResponse:getFailureResponse
};