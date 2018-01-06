var util = require('./../common/util');

function getVillage(req, res, next) {
  var data=[{name:"Village 1"}, {name:"Village 2"}];

  res.json(data);
  
}

function getVillages(req, res, next) {
  var data=[{name:"Village 1"}, {name:"Village 2"}];

  res.json(data);
  
}

function createVillage(req, res, next) {
  res.json(util.getSuccessResponse({}));
}

function updateVillage(req, res, next) {
  res.json(util.getSuccessResponse({}));
}


function deleteVillage(req, res, next) {
  res.json(util.getSuccessResponse({}));
}

module.exports = {
    getVillage:getVillage,
    getVillages:getVillages,
    createVillage:createVillage,
    updateVillage:updateVillage,
    deleteVillage:deleteVillage
};
