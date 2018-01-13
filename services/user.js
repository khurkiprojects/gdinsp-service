
var util = require('./../common/util');
var dbUtil = require('./../common/dbUtil');
var constants = require('./../common/constants');
var serviceHelper = require('./serviceHelper');

function getUser(req, res, next) {
  if(!serviceHelper.areRequiredParamsPresent(req.params, ['id'])){
    return;
  }

  serviceHelper.handleRequest(res, constants.DB_QUERIES.USER.GETUSERBYID, [req.params.id], constants.DB_QUERY_TYPES.LIST);

}

function authenticateUser(req, res, next){
  
  if(!serviceHelper.areRequiredParamsPresent(req.body, ['loginId','pwd'], res)){
    return;
  }

  var loginId=req.body.loginId;
  var userPwd=req.body.pwd;

  try{
      var p = dbUtil.searchRecords(constants.DB_QUERIES.USER.GETUSERBYLOGINID, [loginId]);
      
      p.then(function(value) {
        if(util.compareHash(userPwd, value.result[0].PASSWORD)){
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
  serviceHelper.handleRequest(res, constants.DB_QUERIES.USER.GETALLUSERS, [],constants.DB_QUERY_TYPES.LIST);
}

function createUser(req, res, next) {

  var paramNames=["name", "title", "designation", "role", "loginId", "pwd", "updatedBy", "state"];

  if(!serviceHelper.areRequiredParamsPresent(req.body, paramNames, res)){
    return;
  }

  var currDateTime = new Date();

  var paramData=[req.body.name, req.body.title, req.body.designation, req.body.role, 
  req.body.loginId, util.getHash(req.body.pwd), req.body.updatedBy, req.body.state];

  serviceHelper.handleRequest(res, constants.DB_QUERIES.USER.INSERTUSER, paramData,constants.DB_QUERY_TYPES.INSERT);
}

function updateUser(req, res, next) {
    
  var paramNames=["name", "title", "designation", "role", "loginId", "updatedBy", "state"];

  if(!serviceHelper.areRequiredParamsPresent(req.body, paramNames, res)){
    return;
  }

  var id=req.params.id;
  var paramData=[req.body.name, req.body.title, req.body.designation, req.body.role, 
  req.body.loginId, req.body.updatedBy, req.body.state, id];

  serviceHelper.handleRequest(res, constants.DB_QUERIES.USER.UPDATEUSERBYID, paramData,constants.DB_QUERY_TYPES.UPDATE);
}

function changePassword(req, res, next) {
    
  var paramNames=["pwd", "updatedBy"];

  if(!serviceHelper.areRequiredParamsPresent(req.body, paramNames, res)){
    return;
  }

  var id=req.params.id;
  var paramData=[util.getHash(req.body.pwd), req.body.updatedBy, id];

  serviceHelper.handleRequest(res, constants.DB_QUERIES.USER.CHANGEPWDBYID, paramData,constants.DB_QUERY_TYPES.UPDATE);
}


function deleteUser(req, res, next) {
 
  if(!serviceHelper.areRequiredParamsPresent(req.params, ['id'], res)){
    return;
  }

  serviceHelper.handleRequest(res, constants.DB_QUERIES.USER.DELUSERBYID, [req.params.id], constants.DB_QUERY_TYPES.UPDATE);
}

module.exports = {
    getUser:getUser,
    getUsers:getUsers,
    createUser:createUser,
    updateUser:updateUser,
    changePassword:changePassword,
    deleteUser:deleteUser,
    authenticateUser:authenticateUser
};
