var util = require('./../common/util');

function getChecklist(req, res, next) {
  var data=[{name:"Checklist 1"}, {name:"Checklist 2"}];

  res.json(data);
  
}

function getChecklists(req, res, next) {
  var data=[{name:"Checklist 1"}, {name:"Checklist 2"}];

  res.json(data);
  
}

function createChecklist(req, res, next) {
  var data=[{name:"Checklist 1"}, {name:"Checklist 2"}];

  res.json(util.getSuccessResponse({}));
}

function updateChecklist(req, res, next) {
  var data=[{name:"Checklist 1"}, {name:"Checklist 2"}];

  res.json(util.getSuccessResponse({}));
}


function deleteChecklist(req, res, next) {
  var data=[{name:"Checklist 1"}, {name:"Checklist 2"}];

  res.json(util.getSuccessResponse({}));
}


function getCheckpoints(req, res, next) {
  var data=[{name:"Checkpoint 1"}, {name:"Checkpoint 2"}];

  res.json(data);
  
}

function createCheckpoint(req, res, next) {
  res.json(util.getSuccessResponse({}));
}

function updateCheckpoint(req, res, next) {
  res.json(util.getSuccessResponse({}));
}

function deletePoint(req, res, next) {
  res.json(util.getSuccessResponse({}));
}

module.exports = {
    getChecklist:getChecklist,
    getChecklists:getChecklists,
    createChecklist:createChecklist,
    updateChecklist:updateChecklist,
    deleteChecklist:deleteChecklist,
    getCheckpoints:getCheckpoints,
    createCheckpoint:createCheckpoint,
    updateCheckpoint:updateCheckpoint,
    deletePoint:deletePoint
};
