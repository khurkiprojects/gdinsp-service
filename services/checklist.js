var util = require('./../common/util');

function getChecklist(req, res, next) {
  if(!serviceHelper.areRequiredParamsPresent(req.params, ['id'])){
    return;
  }

  serviceHelper.handleRequest(res, constants.DB_QUERIES.CHECKLIST.GETCHECKLISTBYID, [req.params.id], res,constants.DB_QUERY_TYPES.LIST);
}

function getChecklists(req, res, next) {
  serviceHelper.handleRequest(res, constants.DB_QUERIES.CHECKLIST.GETALLCHECKLISTS, [], res,constants.DB_QUERY_TYPES.LIST);
}

function createChecklist(req, res, next) {
  var paramNames=["name", "desc", "instType", "updatedBy", "state"];

  if(!serviceHelper.areRequiredParamsPresent(req.body, paramNames, res)){
    return;
  }

  var paramData=[req.body.name, req.body.desc, req.body.instType, req.body.updatedBy, req.body.updatedTS, req.body.state];

  serviceHelper.handleRequest(res, constants.DB_QUERIES.CHECKLIST.INSERTCHECKLIST, paramData,constants.DB_QUERY_TYPES.INSERT);
}

function updateChecklist(req, res, next) {
  var paramNames=["name", "desc", "instType", "updatedBy", "state"];

  if(!serviceHelper.areRequiredParamsPresent(req.body, paramNames, res)){
    return;
  }

  var id=req.params.id;
  var paramData=[req.body.name, req.body.desc, req.body.instType, req.body.updatedBy, req.body.updatedTS, req.body.state, id];

  serviceHelper.handleRequest(res, constants.DB_QUERIES.CHECKLIST.UPDATECHECKLISTBYID, paramData,constants.DB_QUERY_TYPES.UPDATE);
}


function deleteChecklist(req, res, next) {
  if(!serviceHelper.areRequiredParamsPresent(req.params, ['id'], res)){
    return;
  }

  serviceHelper.handleRequest(res, constants.DB_QUERIES.CHECKLIST.DELCHECKLISTBYID, [req.params.id], constants.DB_QUERY_TYPES.UPDATE);
}


function getCheckpoints(req, res, next) {
  if(!serviceHelper.areRequiredParamsPresent(req.params, ['id'])){
    return;
  }

  serviceHelper.handleRequest(res, constants.DB_QUERIES.CHECKPOINT.GETCHECKPOINTBYID, [req.params.id], res,constants.DB_QUERY_TYPES.LIST);
}

function createCheckpoint(req, res, next) {
  var paramNames=["name", "desc", "checklistId", "dataType", "updatedBy", "state"];

  if(!serviceHelper.areRequiredParamsPresent(req.body, paramNames, res)){
    return;
  }

  var paramData=[req.body.name, req.body.desc, req.body.checklistId, req.body.dataType, 
  req.body.updatedBy, req.body.updatedTS, req.body.state];

  serviceHelper.handleRequest(res, constants.DB_QUERIES.CHECKPOINT.INSERTCHECKPOINT, paramData,constants.DB_QUERY_TYPES.INSERT);
}

function updateCheckpoint(req, res, next) {
  var paramNames=["name", "desc", "checklistId", "dataType", "updatedBy", "state"];

  if(!serviceHelper.areRequiredParamsPresent(req.body, paramNames, res)){
    return;
  }

  var id=req.params.id;
  var paramData=[req.body.name, req.body.desc, req.body.checklistId, req.body.dataType, 
  req.body.updatedBy, req.body.updatedTS, req.body.state, id];

  serviceHelper.handleRequest(res, constants.DB_QUERIES.CHECKPOINT.UPDATECHECKPOINTBYID, paramData,constants.DB_QUERY_TYPES.UPDATE);
}

function deleteCheckpoint(req, res, next) {
  if(!serviceHelper.areRequiredParamsPresent(req.params, ['id'], res)){
    return;
  }

  serviceHelper.handleRequest(res, constants.DB_QUERIES.CHECKPOINT.DELCHECKPOINTID, [req.params.id], constants.DB_QUERY_TYPES.DELETE);
}

function deleteCheckpoints(req, res, next) {
  if(!serviceHelper.areRequiredParamsPresent(req.params, ['id'], res)){
    return;
  }

  serviceHelper.handleRequest(res, constants.DB_QUERIES.CHECKPOINT.DELCHECKPOINTSBYCHECKLISTID, [req.params.id], constants.DB_QUERY_TYPES.DELETE);
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
    deleteCheckpoint:deleteCheckpoint,
    deleteCheckpoints:deleteCheckpoints
};
