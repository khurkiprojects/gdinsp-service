var util = require('./../common/util');

function getInspection(req, res, next) {
  if(!serviceHelper.areRequiredParamsPresent(req.params, ['id'])){
    return;
  }

  serviceHelper.handleRequest(res, constants.DB_QUERIES.INSPECTION.GETINSPECTIONBYID, [req.params.id],constants.DB_QUERY_TYPES.LIST);
}

function getInspections(req, res, next) {
  serviceHelper.handleRequest(res, constants.DB_QUERIES.INSPECTION.GETALLINSPECTIONS, [],constants.DB_QUERY_TYPES.LIST);
}

function getInspectionsByVillageGroup(req, res, next) {
  if(!serviceHelper.areRequiredParamsPresent(req.params, ['id'])){
    return;
  }

  serviceHelper.handleRequest(res, constants.DB_QUERIES.INSPECTION.GETALLINSPECTIONSBYVG, [req.params.id],constants.DB_QUERY_TYPES.LIST);
}

function createInspection(req, res, next) {
   var paramNames=["name", "villageGroupId", "startDate", "endDate", "status", "updatedBy", "state"];

  if(!serviceHelper.areRequiredParamsPresent(req.body, paramNames, res)){
    return;
  }

  var paramData=[req.body.name, req.body.villageGroupId, req.body.startDate, req.body.endDate, 
  req.body.status, req.body.updatedBy, req.body.state];

  serviceHelper.handleRequest(res, constants.DB_QUERIES.INSPECTION.INSERTINSPECTION, paramData,constants.DB_QUERY_TYPES.INSERT);
}

function updateInspection(req, res, next) {
  var paramNames=["name", "villageGroupId", "startDate", "endDate", "status", "updatedBy", "state"];

  if(!serviceHelper.areRequiredParamsPresent(req.body, paramNames, res)){
    return;
  }

  var id=req.params.id;
  var paramData=[req.body.name, req.body.villageGroupId, req.body.startDate, req.body.endDate, 
  req.body.status, req.body.updatedBy, req.body.state, id];

  serviceHelper.handleRequest(res, constants.DB_QUERIES.INSPECTION.UPDATEINSPECTIONBYID, paramData,constants.DB_QUERY_TYPES.UPDATE);
}

function deleteInspection(req, res, next) {
   if(!serviceHelper.areRequiredParamsPresent(req.params, ['id'], res)){
    return;
  }

  serviceHelper.handleRequest(res, constants.DB_QUERIES.INSPECTION.DELINSPECTIONBYID, [req.params.id], constants.DB_QUERY_TYPES.DELETE);
}

function getInspInstitutions(req, res, next) {
  if(!serviceHelper.areRequiredParamsPresent(req.params, ['id'])){
    return;
  }

  serviceHelper.handleRequest(res, constants.DB_QUERIES.INSPECTION_INSTITUTIONS.GETINSPINSTITUTIONSBYID, [req.params.id],constants.DB_QUERY_TYPES.LIST);
}

function createInspInstitutions(req, res, next) {
  var paramNames=["inspectionId", "institutionId", "villageId", "officerId", "checklistId", "status", "updatedBy"];

  if(!serviceHelper.areRequiredParamsPresent(req.body, paramNames, res)){
    return;
  }

  var paramData=[req.body.inspectionId, req.body.institutionId, req.body.villageId, req.body.officerId, 
  req.body.checklistId, req.body.status, req.body.updatedBy, req.body.state];

  serviceHelper.handleRequest(res, constants.DB_QUERIES.INSPECTION_INSTITUTIONS.INSERTINSPINSTITUTIONS, paramData,constants.DB_QUERY_TYPES.INSERT);
}

function deleteInspInstitution(req, res, next) {
  if(!serviceHelper.areRequiredParamsPresent(req.params, ['id'], res)){
    return;
  }

  serviceHelper.handleRequest(res, constants.DB_QUERIES.INSPECTION_INSTITUTIONS.DELINSPINSTITUTIONBYID, [req.params.id], constants.DB_QUERY_TYPES.DELETE);
}

function deleteInspInstitutionsByInspection(req, res, next) {
  if(!serviceHelper.areRequiredParamsPresent(req.params, ['id'], res)){
    return;
  }

  serviceHelper.handleRequest(res, constants.DB_QUERIES.INSPECTION_INSTITUTIONS.DELINSPINSTITUTIONSBYINSPID, [req.params.id], constants.DB_QUERY_TYPES.DELETE);
}


function getInspCheckpoints(req, res, next) {
  if(!serviceHelper.areRequiredParamsPresent(req.params, ['id'])){
    return;
  }

  serviceHelper.handleRequest(res, constants.DB_QUERIES.INSPECTION_CHECKPOINTS.GETINSPCHECKPOINTSBYID, [req.params.id],constants.DB_QUERY_TYPES.LIST);
}

function createInspCheckpoints(req, res, next) {
   var paramNames=["inspectionId", "institutionId", "checkpointId", "dataType", "isAdhered", "counter","remarks", "updatedBy"];

  if(!serviceHelper.areRequiredParamsPresent(req.body, paramNames, res)){
    return;
  }

  var paramData=[req.body.inspectionId, req.body.institutionId, req.body.checkpointId, req.body.dataType, 
  req.body.isAdhered, req.body.counter, req.body.remarks, req.body.updatedBy, req.body.state];

  serviceHelper.handleRequest(res, constants.DB_QUERIES.INSPECTION_CHECKPOINTS.INSERTINSPCHECKPOINTS, paramData,constants.DB_QUERY_TYPES.INSERT);
}

function deleteInspCheckpoint(req, res, next) {
  if(!serviceHelper.areRequiredParamsPresent(req.params, ['id'], res)){
    return;
  }

  serviceHelper.handleRequest(res, constants.DB_QUERIES.INSPECTION_CHECKPOINTS.DELINSPCHECKPOINTBYID, [req.params.id], constants.DB_QUERY_TYPES.DELETE);
}

function deleteInspCheckpointsByInspection(req, res, next) {
  if(!serviceHelper.areRequiredParamsPresent(req.params, ['id'], res)){
    return;
  }

  serviceHelper.handleRequest(res, constants.DB_QUERIES.INSPECTION_CHECKPOINTS.DELINSPCHECKPOINTSBYINSPID, [req.params.id], constants.DB_QUERY_TYPES.DELETE);
}



module.exports = {
    getInspection:getInspection,
    getInspections:getInspections,
    getInspectionsByVillageGroup:getInspectionsByVillageGroup,
    createInspection:createInspection,
    updateInspection:updateInspection,
    deleteInspection:deleteInspection,

    getInspInstitutions:getInspInstitutions,
    createInspInstitutions:createInspInstitutions,
    deleteInspInstitution:deleteInspInstitution,
    deleteInspInstitutionsByInspection:deleteInspInstitutionsByInspection,
    
    getInspCheckpoints:getInspCheckpoints,
    createInspCheckpoints:createInspCheckpoints,
    deleteInspCheckpoint:deleteInspCheckpoint,
    deleteInspCheckpointsByInspection:deleteInspCheckpointsByInspection
};
