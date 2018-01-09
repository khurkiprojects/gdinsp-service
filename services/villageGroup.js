var util = require('./../common/util');

function getVillageGroup(req, res, next) {
  if(!serviceHelper.areRequiredParamsPresent(req.params, ['id'])){
    return;
  }

  serviceHelper.handleRequest(res, constants.DB_QUERIES.VILLAGE_GROUP.GETVILLAGEGROUPID, [req.params.id], res,constants.DB_QUERY_TYPES.LIST);
  
}

function getVillageGroups(req, res, next) {
  serviceHelper.handleRequest(res, constants.DB_QUERIES.VILLAGE_GROUP.GETALLVILLAGES, [], res,constants.DB_QUERY_TYPES.LIST);
}

function createVillageGroup(req, res, next) {
  var paramNames=["name", "officerId", "updatedBy", "state"];

  if(!serviceHelper.areRequiredParamsPresent(req.body, paramNames, res)){
    return;
  }

  var paramData=[req.body.name, req.body.officerId, req.body.updatedBy, req.body.updatedTS, req.body.state];

  serviceHelper.handleRequest(res, constants.DB_QUERIES.VILLAGE_GROUP.INSERTVILLAGEGROUP, paramData,constants.DB_QUERY_TYPES.INSERT);
}

function updateVillageGroup(req, res, next) {
  var paramNames=["name", "officerId", "updatedBy", "state"];

  if(!serviceHelper.areRequiredParamsPresent(req.body, paramNames, res)){
    return;
  }

  var id=req.params.id;
  var paramData=[req.body.name, req.body.officerId, req.body.updatedBy, req.body.updatedTS, req.body.state, id];

  serviceHelper.handleRequest(res, constants.DB_QUERIES.VILLAGE_GROUP.UPDATEVILLAGEGROUPBYID, paramData,constants.DB_QUERY_TYPES.UPDATE);
}

function deleteVillageGroup(req, res, next) {
  if(!serviceHelper.areRequiredParamsPresent(req.params, ['id'], res)){
    return;
  }

  serviceHelper.handleRequest(res, constants.DB_QUERIES.VILLAGE_GROUP.DELVILLAGEGROUPBYID, [req.params.id], constants.DB_QUERY_TYPES.UPDATE);
}


function getVillageGroupVillages(req, res, next) {
  if(!serviceHelper.areRequiredParamsPresent(req.params, ['id'])){
    return;
  }

  serviceHelper.handleRequest(res, constants.DB_QUERIES.VILLAGE_GROUP.GETVGVILLAGESBYID, [req.params.id], res,constants.DB_QUERY_TYPES.LIST);
}

function addVillageGroupVillage(req, res, next) {
  var paramNames=["villageGroupId", "villageId","updatedBy"];

  if(!serviceHelper.areRequiredParamsPresent(req.body, paramNames, res)){
    return;
  }

  var paramData=[req.body.villageGroupId, req.body.villageId, req.body.updatedBy, req.body.updatedTS, req.body.state];

  serviceHelper.handleRequest(res, constants.DB_QUERIES.VILLAGE_GROUP.INSERTVGVILLAGE, paramData,constants.DB_QUERY_TYPES.INSERT);
}

function deleteVillageGroupVillage(req, res, next) {
  if(!serviceHelper.areRequiredParamsPresent(req.params, ['id'], res)){
    return;
  }

  serviceHelper.handleRequest(res, constants.DB_QUERIES.VILLAGE_GROUP.DELVGVILLAGEBYID, [req.params.id], constants.DB_QUERY_TYPES.DELETE);
}

function deleteVillageGroupVillages(req, res, next) {
  if(!serviceHelper.areRequiredParamsPresent(req.params, ['id'], res)){
    return;
  }

  serviceHelper.handleRequest(res, constants.DB_QUERIES.VILLAGE_GROUP.DELVGVILLAGESBYVGID, [req.params.id], constants.DB_QUERY_TYPES.DELETE);
}

module.exports = {
    getVillageGroup:getVillageGroup,
    getVillageGroups:getVillageGroups,
    createVillageGroup:createVillageGroup,
    updateVillageGroup:updateVillageGroup,
    deleteVillageGroup:deleteVillageGroup,
    getVillageGroupVillages:getVillageGroupVillages,
    addVillageGroupVillage:addVillageGroupVillage,
    deleteVillageGroupVillage:deleteVillageGroupVillage,
    deleteVillageGroupVillages:deleteVillageGroupVillages
};
