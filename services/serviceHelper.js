
var dbUtil = require('./../common/dbUtil');
var util = require('./../common/util');
var constants = require('./../common/constants');

function handleRequest(res, query, params, queryType){
    try{
        console.log("Query Type!", queryType);

        var p;
        if(queryType===constants.DB_QUERY_TYPES.INSERT)
            p = dbUtil.insertRecord(query, params);
        else if(queryType===constants.DB_QUERY_TYPES.UPDATE)
            p = dbUtil.updateRecord(query, params);
        else if(queryType===constants.DB_QUERY_TYPES.LIST)
            p = dbUtil.searchRecords(query, params);
        else if(queryType===constants.DB_QUERY_TYPES.DELETE)
            p = dbUtil.deleteRecord(query, params);

        if(p===undefined){
            console.log("Error Occurred: Query type didn't match");  
            res.json(util.getFailureResponse("Query type didn't match"));
            return;    
        }
        
        p.then(function(value) {
            console.log("Success!", JSON.stringify(value));
            res.json(value);
        });

        p.catch(function(e) {
            console.log("Error Found! ", e);
            res.json(util.getFailureResponse(e));
        });
        
    }catch(err){
        console.log("Error Occurred: ", err);  
        res.json(util.getFailureResponse(err));
        return;
    }
}

function areRequiredParamsPresent(source, paramNames, res){
    for(var i=0;i<paramNames.length;i++){
        if(source[paramNames[i]]===undefined || source[paramNames]===null || source[paramNames]===''){
            console.log('Missing Param: ', paramNames[i]);
            res.json(util.getFailureResponse(constants.ERRORS.REQ_PARAM_MISSING, 
            {"message":"Required Param Missing: "+paramNames[i]})); 
            return false;
        }
    }

    console.log('All params present');
    
    return true;
}


module.exports={
    handleRequest:handleRequest,
    areRequiredParamsPresent:areRequiredParamsPresent
}