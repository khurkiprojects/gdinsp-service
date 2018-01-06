var util = require('./../common/util');

function getInspection(req, res, next) {
  var data=[{name:"Inspection 1"}, {name:"Inspection 2"}];

  res.json(data);
  
}

function getInspections(req, res, next) {
  var data=[{name:"Inspection 1"}, {name:"Inspection 2"}];

  res.json(data);
  
}

function createInspection(req, res, next) {
  var data=[{name:"Inspection 1"}, {name:"Inspection 2"}];

  res.json(util.getSuccessResponse({}));
}

function updateInspection(req, res, next) {
  var data=[{name:"Inspection 1"}, {name:"Inspection 2"}];

  res.json(util.getSuccessResponse({}));
}

function deleteInspection(req, res, next) {
  var data=[{name:"Inspection 1"}, {name:"Inspection 2"}];

  res.json(util.getSuccessResponse({}));
}

function getInspInstitutions(req, res, next) {
  var data=[{name:"Inspection Institution 1"}, {name:"Inspection Institution 2"}];

  res.json(data);
  
}

function createInspInstitutions(req, res, next) {
  res.json(util.getSuccessResponse({}));
}

function deleteInspInstitution(req, res, next) {
  res.json(util.getSuccessResponse({}));
}

function getInspCheckpoints(req, res, next) {
  var data=[{name:"Inspection Checkpoint 1"}, {name:"Inspection Checkpoint 2"}];

  res.json(data);
  
}

function createInspCheckpoints(req, res, next) {
  res.json(util.getSuccessResponse({}));
}

function deleteInspCheckpoints(req, res, next) {
  res.json(util.getSuccessResponse({}));
}



module.exports = {
    getInspection:getInspection,
    getInspections:getInspections,
    createInspection:createInspection,
    updateInspection:updateInspection,
    deleteInspection:deleteInspection,
    getInspInstitutions:getInspInstitutions,
    createInspInstitutions:createInspInstitutions,
    deleteInspInstitution:deleteInspInstitution,
    getInspCheckpoints:getInspCheckpoints,
    createInspCheckpoints:createInspCheckpoints,
    deleteInspCheckpoints:deleteInspCheckpoints
};
