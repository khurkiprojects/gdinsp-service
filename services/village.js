var util = require('./../common/util');

function getVillage(req, res, next) {

  if(!serviceHelper.areRequiredParamsPresent(req.params, ['id'])){
    return;
  }

  serviceHelper.handleRequest(res, constants.DB_QUERIES.VILLAGE.GETVILLAGEBYID, [req.params.id], res,constants.DB_QUERY_TYPES.LIST);
  
}

function getVillages(req, res, next) {
  
  serviceHelper.handleRequest(res, constants.DB_QUERIES.VILLAGE.GETALLVILLAGES, [], res,constants.DB_QUERY_TYPES.LIST);
}

function createVillage(req, res, next) {
  var paramNames=["name", "block", "tehsil", "district", "contact","updatedBy", "state"];

  if(!serviceHelper.areRequiredParamsPresent(req.body, paramNames, res)){
    return;
  }

  var paramData=[req.body.name, req.body.block, req.body.tehsil, req.body.district, 
  req.body.contact, req.body.updatedBy, req.body.updatedTS, req.body.state];

  serviceHelper.handleRequest(res, constants.DB_QUERIES.VILLAGE.INSERTVILLAGE, paramData,constants.DB_QUERY_TYPES.INSERT);
}

function updateVillage(req, res, next) {
  var paramNames=["name", "block", "tehsil", "district", "contact", "updatedBy", "state"];

  if(!serviceHelper.areRequiredParamsPresent(req.body, paramNames, res)){
    return;
  }

  var id=req.params.id;
  var paramData=[req.body.name, req.body.block, req.body.tehsil, req.body.district, 
  req.body.contact, req.body.updatedBy, req.body.updatedTS, req.body.state, id];

  serviceHelper.handleRequest(res, constants.DB_QUERIES.VILLAGE.UPDATEVILLAGEBYID, paramData,constants.DB_QUERY_TYPES.UPDATE);
}


function deleteVillage(req, res, next) {
  if(!serviceHelper.areRequiredParamsPresent(req.params, ['id'], res)){
    return;
  }

  serviceHelper.handleRequest(res, constants.DB_QUERIES.VILLAGE.DELVILLAGEBYID, [req.params.id], constants.DB_QUERY_TYPES.UPDATE);
}

module.exports = {
    getVillage:getVillage,
    getVillages:getVillages,
    createVillage:createVillage,
    updateVillage:updateVillage,
    deleteVillage:deleteVillage
};
