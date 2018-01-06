
var mysql      = require('mysql');

var constants = require('./../common/constants');
var util = require('./../common/util');

function createDBConn(){
    var connection = mysql.createConnection(constants.DB);
    
    return connection;
}

function closeDBConn(connection){
    try{
        connection.end();
        console.log("Connection closed");
    }catch(err){
        console.log("Error: ", err);
    }
}

function executeQuery(query, params){
     return new Promise(function(resolve, reject) {
    
    var conn=createDBConn();
  
    conn.connect(function(err) {
    console.log(query, params);
      conn.query(query, params, function(err, rows, fields) {
        if (!err){
          console.log('User Count: ', rows.length);
          if(rows.length>0){
            console.log('Matched');
            resolve(util.getSuccessResponse(rows));
          }
          else{
            console.log('Error while performing Query.');
            reject(util.getFailureResponse({"message":"No Data Found!"}));
          }
        }
        else{
            console.log('Error while performing Query.');
            reject(util.getFailureResponse(err))
        }
        closeDBConn(conn);
       });
    });
  });
}

module.exports={
    createDBConn:createDBConn,
    closeDBConn:closeDBConn,
    executeQuery
};