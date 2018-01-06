var util = require('./../common/util');

function getInstitution(req, res, next) {
  var data=[{name:"Institution 1"}, {name:"Institution 2"}];

  res.json(data);
  
}

function getInstitutions(req, res, next) {
  var data=[{name:"Institution 1"}, {name:"Institution 2"}];

  res.json(data);
  
}

function createInstitution(req, res, next) {
  res.json(util.getSuccessResponse({}));
}

function updateInstitution(req, res, next) {
  res.json(util.getSuccessResponse({}));
}


function deleteInstitution(req, res, next) {
  res.json(util.getSuccessResponse({}));
}

module.exports = {
    getInstitution:getInstitution,
    getInstitutions:getInstitutions,
    createInstitution:createInstitution,
    updateInstitution:updateInstitution,
    deleteInstitution:deleteInstitution
};
