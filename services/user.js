
var util = require('./../common/util');
var dbUtil = require('./../common/dbUtil');
var constants = require('./../common/constants');

function getUser(req, res, next) {
  
  var userId=req.params.id;

 try{
      var p = dbUtil.executeQuery(constants.DB_QUERIES.GETUSERBYID, [userId]);
      
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

function authenticateUser(req, res, next){
  var userId=req.params.id;
  var userPwd=req.params.pwd;

  try{
      var p = dbUtil.executeQuery(constants.DB_QUERIES.GETUSERBYLOGINID, [userId]);
      
      p.then(function(value) {
        
        console.log("Success!", JSON.stringify(value));
        
        if(value.result[0].PASSWORD===userPwd){

          res.json(util.getSuccessResponse({}));
        }
        else{
          res.json(util.getFailureResponse({}));
        }
      });

      p.catch(function(e) {
        console.log("Error Found! ", e);
        res.json(e);
      });
      
  }catch(err){
    console.log("Error Occurred: ", err);  
    res.json(util.getFailureResponse({}));
    return;
  }
}

function getUsers(req, res, next) {
 try{
      var p = dbUtil.executeQuery(constants.DB_QUERIES.GETALLUSERS, []);
      
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

function createUser(req, res, next) {
  res.json(util.getSuccessResponse({}));
}

function updateUser(req, res, next) {
  var data=[{name:"User 1"}, {name:"User 2"}];

  res.json(util.getSuccessResponse({}));
}


function deleteUser(req, res, next) {
  var data=[{name:"User 1"}, {name:"User 2"}];

  res.json(util.getSuccessResponse({}));
}

module.exports = {
    getUser:getUser,
    getUsers:getUsers,
    createUser:createUser,
    updateUser:updateUser,
    deleteUser:deleteUser,
    authenticateUser:authenticateUser
};
