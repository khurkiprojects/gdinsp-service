
var util = require('./../common/util');

function getUser(req, res, next) {
  var data=[{name:"User 1"}, {name:"User 2"}];

  res.json(data);
  
}

function getUsers(req, res, next) {
  var data=[{name:"User 1"}, {name:"User 2"}];

  res.json(data);
  
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
    deleteUser:deleteUser
};
