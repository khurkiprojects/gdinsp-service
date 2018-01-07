
var util = require('./../common/util');
var dbUtil = require('./../common/dbUtil');
var constants = require('./../common/constants');

function getUser(req, res, next) {
  
  var userId=req.params.id;

 try{
      var p = dbUtil.searchRecords(constants.DB_QUERIES.USER.GETUSERBYID, [userId]);
      
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
      var p = dbUtil.searchRecords(constants.DB_QUERIES.USER.GETUSERBYLOGINID, [userId]);
      
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
      var p = dbUtil.searchRecords(constants.DB_QUERIES.USER.GETALLUSERS, []);
      
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
  console.log("Req Post Params: ", JSON.stringify(req.body));  

  var userData=[req.body.name, req.body.title, req.body.designation, req.body.role, 
  req.body.loginId, req.body.pwd, req.body.updatedBy, req.body.updatedTS, req.body.state];

  try{
      var p = dbUtil.insertRecord(constants.DB_QUERIES.USER.INSERTUSER, userData);
      
      p.then(function(value) {
        console.log("Success!", JSON.stringify(value));
        res.json(util.getSuccessResponse({}));
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

function updateUser(req, res, next) {
  console.log("Req Post Params: ", JSON.stringify(req.body));  

  var userId=req.params.id;
  var userData=[req.body.name, req.body.title, req.body.designation, req.body.role, 
  req.body.loginId, req.body.pwd, req.body.updatedBy, req.body.updatedTS, req.body.state, userId];

  try{
      var p = dbUtil.updateRecord(constants.DB_QUERIES.USER.UPDATEUSERBYID, userData);
      
      p.then(function(value) {
        console.log("Success!", JSON.stringify(value));
        res.json(value);
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


function deleteUser(req, res, next) {
  console.log("Req Params: ", req.params.id);

  var userId=req.params.id;
  
  try{
      var p = dbUtil.updateRecord(constants.DB_QUERIES.USER.DELUSERBYID, userId);
      
      p.then(function(value) {
        console.log("Success!", JSON.stringify(value));
        res.json(value);
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

module.exports = {
    getUser:getUser,
    getUsers:getUsers,
    createUser:createUser,
    updateUser:updateUser,
    deleteUser:deleteUser,
    authenticateUser:authenticateUser
};
