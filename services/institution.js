var util = require('./../common/util');

function getInstitution(req, res, next) {
  if(!serviceHelper.areRequiredParamsPresent(req.params, ['id'])){
    return;
  }

  serviceHelper.handleRequest(res, constants.DB_QUERIES.INSTITUTION.GETINSTITUTIONBYID, [req.params.id],constants.DB_QUERY_TYPES.LIST);
  
}

function getInstitutions(req, res, next) {
  serviceHelper.handleRequest(res, constants.DB_QUERIES.INSTITUTION.GETALLINSTITUTIONS, [],constants.DB_QUERY_TYPES.LIST);
}

function createInstitution(req, res, next) {
  var paramNames=["name", "villageId", "type", "headName", "address", "updatedBy", "state"];

  if(!serviceHelper.areRequiredParamsPresent(req.body, paramNames, res)){
    return;
  }

  var paramData=[req.body.name, req.body.villageId, req.body.type, req.body.headName, 
  req.body.address, req.body.updatedBy, req.body.state];

  serviceHelper.handleRequest(res, constants.DB_QUERIES.INSTITUTION.INSERTINSTITUTION, paramData,constants.DB_QUERY_TYPES.INSERT);
}

function updateInstitution(req, res, next) {
  var paramNames=["name", "villageId", "type", "headName", "address", "updatedBy", "state"];

  if(!serviceHelper.areRequiredParamsPresent(req.body, paramNames, res)){
    return;
  }

  var id=req.params.id;
  var paramData=[req.body.name, req.body.villageId, req.body.type, req.body.headName, 
  req.body.address, req.body.updatedBy, req.body.state, id];

  serviceHelper.handleRequest(res, constants.DB_QUERIES.INSTITUTION.UPDATEINSTITUTIONBYID, paramData,constants.DB_QUERY_TYPES.UPDATE);
}


function deleteInstitution(req, res, next) {
  if(!serviceHelper.areRequiredParamsPresent(req.params, ['id'], res)){
    return;
  }

  serviceHelper.handleRequest(res, constants.DB_QUERIES.INSTITUTION.DELINSTITUTIONBYID, [req.params.id], constants.DB_QUERY_TYPES.UPDATE);
}

module.exports = {
    getInstitution:getInstitution,
    getInstitutions:getInstitutions,
    createInstitution:createInstitution,
    updateInstitution:updateInstitution,
    deleteInstitution:deleteInstitution
};
