var constants = require('./../common/constants');
//var SHA256 = require("crypto-js/sha256");
var SHA256 = require("sha256");

function getSuccessResponse(data){
    var res={status:constants.RESULTS.SUCCESS,result:data};
    
    return res;
}

function getFailureResponse(failureCode, data){
    var res={status:constants.RESULTS.FAILURE,result:failureCode};

    if(failureCode!==undefined && data!==undefined){
        res={status:constants.RESULTS.FAILURE,code:failureCode, result:data};

        if(data.result!==undefined){
            res.result= data.result;
        }
        if(data.code!==undefined){
            res.code= data.code;
        }
    }
    else if(failureCode!==undefined && data===undefined) {
        if(failureCode.result!==undefined){
            res.result= failureCode.result;
        }
        if(failureCode.code!==undefined){
            res.code= failureCode.code;
        }
    }

    

    return res;
}

function getHash(data){
    if(data===undefined || data==='')
        return '';
    var hash=SHA256(data);
    console.log("Hash output",hash);
    return hash;
}

function compareHash(data, hashData){
    if(data===undefined || data==='' || hashData===undefined || hashData==='')
        return false;

    var hash=SHA256(data);
    var result=(hashData===hash);
    console.log("Hash output",result);
    return result;
}


module.exports={
    getSuccessResponse:getSuccessResponse,
    getFailureResponse:getFailureResponse,
    getHash:getHash,
    compareHash:compareHash
};