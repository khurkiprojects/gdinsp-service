var util = require('./../common/util');

function getVillageGroup(req, res, next) {
  var data=[{name:"VillageGroup 1"}, {name:"VillageGroup 2"}];

  res.json(data);
  
}

function getVillageGroups(req, res, next) {
  var data=[{name:"VillageGroup 1"}, {name:"VillageGroup 2"}];

  res.json(data);
}

function createVillageGroup(req, res, next) {
  res.json(util.getSuccessResponse({}));
}

function updateVillageGroup(req, res, next) {
  res.json(util.getSuccessResponse({}));
}

function deleteVillageGroup(req, res, next) {
  res.json(util.getSuccessResponse({}));
}


function getVillageGroupVillages(req, res, next) {
  var data=[{name:"VillageGroup Village 1"}, {name:"VillageGroup Village 2"}];

  res.json(data);
}

function addVillageGroupVillage(req, res, next) {
  res.json(util.getSuccessResponse({}));
}

function deleteVillageGroupVillage(req, res, next) {
  res.json(util.getSuccessResponse({}));
}

module.exports = {
    getVillageGroup:getVillageGroup,
    getVillageGroups:getVillageGroups,
    createVillageGroup:createVillageGroup,
    updateVillageGroup:updateVillageGroup,
    deleteVillageGroup:deleteVillageGroup,
    getVillageGroupVillages:getVillageGroupVillages,
    addVillageGroupVillage:addVillageGroupVillage,
    deleteVillageGroupVillage:deleteVillageGroupVillage
};
