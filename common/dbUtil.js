
var mysql = require('mysql');

var constants = require('./../common/constants');
var util = require('./../common/util');

function createDBConn(){
    var connection = mysql.createPool(constants.DB);
    
    return connection;
}

function closeDBConn(connection){
    try{
        connection.release();
        console.log("Connection closed");
    }catch(err){
        console.log("Error: ", err);
    }
}

function executeQuery(query, params, queryType){
    return new Promise(function(resolve, reject) {

      var conn=createDBConn();
    
      conn.getConnection(function(err, connection) {
        console.log(query, params);

        connection.query(query, params, function(err, result) {
          closeDBConn(connection);

          if (!err){
            if(queryType===constants.DB_QUERY_TYPES.LIST && result.length>0){
              console.log('Data Found',result.length);
              resolve(util.getSuccessResponse(result));
            }
            else if(queryType===constants.DB_QUERY_TYPES.INSERT){
              console.log('Record Created');
              resolve(util.getSuccessResponse({affectedRows:result.affectedRows}));
            }
            else if(queryType===constants.DB_QUERY_TYPES.UPDATE){
              console.log('Records Updated');
              resolve(util.getSuccessResponse({affectedRows:result.affectedRows}));
            }
            else if(queryType===constants.DB_QUERY_TYPES.DELETE){
              console.log('Records Deleted');
              resolve(util.getSuccessResponse({affectedRows:result.affectedRows}));
            }
            else{
              console.log('Error in query type.', queryType);
              reject(util.getFailureResponse({"message":"Invalid Query!"}));
            }
          }
          else{
              console.log('Error while performing Query.', err);
              reject(util.getFailureResponse(constants.ERRORS.SQL_QUERY_ERROR, err));
          }
        });
      });
  });
}

function insertRecord(query, params){
    return executeQuery(query, params, constants.DB_QUERY_TYPES.INSERT);
}

function updateRecord(query, params){
   return executeQuery(query, params, constants.DB_QUERY_TYPES.UPDATE);
}

function deleteRecord(query, params){
   return executeQuery(query, params, constants.DB_QUERY_TYPES.DELETE);
}

function searchRecords(query, params){
   return executeQuery(query, params, constants.DB_QUERY_TYPES.LIST);
}

module.exports={
    createDBConn:createDBConn,
    closeDBConn:closeDBConn,
    insertRecord:insertRecord,
    updateRecord:updateRecord,
    deleteRecord:deleteRecord,
    searchRecords:searchRecords
};