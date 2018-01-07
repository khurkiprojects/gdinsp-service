
var express = require('express');
var router = express.Router();
var userService = require('./../services/user');
var villageService = require('./../services/village');
var villageGroupService = require('./../services/villageGroup');
var institutionService = require('./../services/institution');
var checklistService = require('./../services/checklist');
var inspectionService = require('./../services/inspection');
var dataServiceHelper = require('./dataServiceHelper');


router.get('/user/:id', dataServiceHelper.isClientSubscriptionValid, userService.getUser);
router.get('/users', dataServiceHelper.isClientSubscriptionValid, userService.getUsers);
router.post('/user', dataServiceHelper.isClientSubscriptionValid, userService.createUser);
router.put('/user/:id', dataServiceHelper.isClientSubscriptionValid, userService.updateUser);
router.delete('/user/:id', dataServiceHelper.isClientSubscriptionValid, userService.deleteUser);
router.post('/authenticate', dataServiceHelper.isClientSubscriptionValid,userService.authenticateUser);
//router.get('/authenticate/:id/:pwd', dataServiceHelper.isClientSubscriptionValid,userService.authenticateUser);

router.get('/village/:id', dataServiceHelper.isClientSubscriptionValid, villageService.getVillage);
router.get('/villages', dataServiceHelper.isClientSubscriptionValid, villageService.getVillages);
router.post('/village', dataServiceHelper.isClientSubscriptionValid, villageService.createVillage);
router.put('/village/:id', dataServiceHelper.isClientSubscriptionValid, villageService.updateVillage);
router.delete('/village/:id', dataServiceHelper.isClientSubscriptionValid, villageService.deleteVillage);

router.get('/villageGroup/:id', dataServiceHelper.isClientSubscriptionValid, villageGroupService.getVillageGroup);
router.get('/villageGroups', dataServiceHelper.isClientSubscriptionValid, villageGroupService.getVillageGroups);
router.post('/villageGroup', dataServiceHelper.isClientSubscriptionValid, villageGroupService.createVillageGroup);
router.put('/villageGroup/:id', dataServiceHelper.isClientSubscriptionValid, villageGroupService.updateVillageGroup);
router.delete('/villageGroup/:id', dataServiceHelper.isClientSubscriptionValid, villageGroupService.deleteVillageGroup);

router.get('/vgVillages/:vgId', dataServiceHelper.isClientSubscriptionValid, villageGroupService.getVillageGroupVillages);
router.post('/vgVillage', dataServiceHelper.isClientSubscriptionValid, villageGroupService.addVillageGroupVillage);
router.delete('/vgVillage/:id', dataServiceHelper.isClientSubscriptionValid, villageGroupService.deleteVillageGroupVillage);

router.get('/institution/:id', dataServiceHelper.isClientSubscriptionValid, institutionService.getInstitution);
router.get('/institutions', dataServiceHelper.isClientSubscriptionValid, institutionService.getInstitutions);
router.post('/institution', dataServiceHelper.isClientSubscriptionValid, institutionService.createInstitution);
router.put('/institution/:id', dataServiceHelper.isClientSubscriptionValid, institutionService.updateInstitution);
router.delete('/institution/:id', dataServiceHelper.isClientSubscriptionValid, institutionService.deleteInstitution);

router.get('/checklist/:id', dataServiceHelper.isClientSubscriptionValid, checklistService.getChecklist);
router.get('/checklists', dataServiceHelper.isClientSubscriptionValid, checklistService.getChecklists);
router.post('/checklist', dataServiceHelper.isClientSubscriptionValid, checklistService.createChecklist);
router.put('/checklist/:id', dataServiceHelper.isClientSubscriptionValid, checklistService.updateChecklist);
router.delete('/checklist/:id', dataServiceHelper.isClientSubscriptionValid, checklistService.deleteChecklist);

router.get('/checkpoints/:checklistId', dataServiceHelper.isClientSubscriptionValid, checklistService.getCheckpoints);
router.post('/checkpoint', dataServiceHelper.isClientSubscriptionValid, checklistService.createCheckpoint);
router.put('/checkpoint/:id', dataServiceHelper.isClientSubscriptionValid, checklistService.updateCheckpoint);
router.delete('/checkpoint/:id', dataServiceHelper.isClientSubscriptionValid, checklistService.deletePoint);

router.get('/inspection/:id', dataServiceHelper.isClientSubscriptionValid, inspectionService.getInspection);
router.get('/inspections', dataServiceHelper.isClientSubscriptionValid, inspectionService.getInspections);
router.post('/inspection', dataServiceHelper.isClientSubscriptionValid, inspectionService.createInspection);
router.put('/inspection/:id', dataServiceHelper.isClientSubscriptionValid, inspectionService.updateInspection);
router.delete('/inspection/:id', dataServiceHelper.isClientSubscriptionValid, inspectionService.deleteInspection);

router.get('/inspInstitutions', dataServiceHelper.isClientSubscriptionValid, inspectionService.getInspInstitutions);
router.post('/inspInstitutions', dataServiceHelper.isClientSubscriptionValid, inspectionService.createInspInstitutions);
router.delete('/inspInstitution/:id', dataServiceHelper.isClientSubscriptionValid, inspectionService.deleteInspInstitution);

router.get('/inspCheckpoints', dataServiceHelper.isClientSubscriptionValid, inspectionService.getInspCheckpoints);
router.post('/inspCheckpoints', dataServiceHelper.isClientSubscriptionValid, inspectionService.createInspCheckpoints);
router.delete('/inspCheckpoint/:id', dataServiceHelper.isClientSubscriptionValid, inspectionService.deleteInspCheckpoints);

module.exports = router;
