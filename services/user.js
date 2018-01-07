
var util = require('./../common/util');
var dbUtil = require('./../common/dbUtil');
var constants = require('./../common/constants');
var serviceHelper = require('./serviceHelper');

function getUser(req, res, next) {
  if(!serviceHelper.areRequiredParamsPresent(req.params, ['id'])){
    return;
  }

  var userId=req.params.id;

  serviceHelper.handleRequest(res, constants.DB_QUERIES.USER.GETUSERBYID, [userId], res,constants.DB_QUERY_TYPES.LIST);

}

function authenticateUser(req, res, next){
  
  if(!serviceHelper.areRequiredParamsPresent(req.body, ['loginId','pwd'], res)){
    return;
  }

  var userId=req.body.loginId;
  var userPwd=req.body.pwd;

  try{
      var p = dbUtil.searchRecords(constants.DB_QUERIES.USER.GETUSERBYLOGINID, [userId]);
      
      p.then(function(value) {
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
  serviceHelper.handleRequest(res, constants.DB_QUERIES.USER.GETALLUSERS, [], res,constants.DB_QUERY_TYPES.LIST);
}

function createUser(req, res, next) {

  var paramNames=["name", "title", "designation", "role", "loginId", "pwd", "updatedBy", "state"];

  if(!serviceHelper.areRequiredParamsPresent(req.body, paramNames, res)){
    return;
  }

  var userData=[req.body.name, req.body.title, req.body.designation, req.body.role, 
  req.body.loginId, req.body.pwd, req.body.updatedBy, req.body.updatedTS, req.body.state];

  serviceHelper.handleRequest(res, constants.DB_QUERIES.USER.INSERTUSER, userData,constants.DB_QUERY_TYPES.INSERT);
}

function updateUser(req, res, next) {
    
  var paramNames=["name", "title", "designation", "role", "loginId", "pwd", "updatedBy", "state"];

  if(!serviceHelper.areRequiredParamsPresent(req.body, paramNames, res)){
    return;
  }

  var userId=req.params.id;
  var userData=[req.body.name, req.body.title, req.body.designation, req.body.role, 
  req.body.loginId, req.body.pwd, req.body.updatedBy, req.body.updatedTS, req.body.state, userId];

  serviceHelper.handleRequest(res, constants.DB_QUERIES.USER.UPDATEUSERBYID, userData,constants.DB_QUERY_TYPES.UPDATE);

}


function deleteUser(req, res, next) {
 
  if(!serviceHelper.areRequiredParamsPresent(req.params, ['id'], res)){
    return;
  }

  var userId=req.params.id;

  serviceHelper.handleRequest(res, constants.DB_QUERIES.USER.DELUSERBYID, userId, constants.DB_QUERY_TYPES.UPDATE);
}

module.exports = {
    getUser:getUser,
    getUsers:getUsers,
    createUser:createUser,
    updateUser:updateUser,
    deleteUser:deleteUser,
    authenticateUser:authenticateUser
};
