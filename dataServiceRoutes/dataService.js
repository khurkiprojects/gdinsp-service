
var express = require('express');
var router = express.Router();
var userService = require('./../services/user');
var villageService = require('./../services/village');
var villageGroupService = require('./../services/villageGroup');
var institutionService = require('./../services/institution');
var checklistService = require('./../services/checklist');
var inspectionService = require('./../services/inspection');


router.get('/user/:id', userService.getUser);
router.get('/users', userService.getUsers);
router.post('/user', userService.createUser);
router.put('/user/:id', userService.updateUser);
router.delete('/user/:id', userService.deleteUser);

router.get('/village/:id', villageService.getVillage);
router.get('/villages', villageService.getVillages);
router.post('/village', villageService.createVillage);
router.put('/village/:id', villageService.updateVillage);
router.delete('/village/:id', villageService.deleteVillage);

router.get('/villageGroup/:id', villageGroupService.getVillageGroup);
router.get('/villageGroups', villageGroupService.getVillageGroups);
router.post('/villageGroup', villageGroupService.createVillageGroup);
router.put('/villageGroup/:id', villageGroupService.updateVillageGroup);
router.delete('/villageGroup/:id', villageGroupService.deleteVillageGroup);

router.get('/vgVillages/:vgId', villageGroupService.getVillageGroupVillages);
router.post('/vgVillage', villageGroupService.addVillageGroupVillage);
router.delete('/vgVillage/:id', villageGroupService.deleteVillageGroupVillage);

router.get('/institution/:id', institutionService.getInstitution);
router.get('/institutions', institutionService.getInstitutions);
router.post('/institution', institutionService.createInstitution);
router.put('/institution/:id', institutionService.updateInstitution);
router.delete('/institution/:id', institutionService.deleteInstitution);

router.get('/checklist/:id', checklistService.getChecklist);
router.get('/checklists', checklistService.getChecklists);
router.post('/checklist', checklistService.createChecklist);
router.put('/checklist/:id', checklistService.updateChecklist);
router.delete('/checklist/:id', checklistService.deleteChecklist);

router.get('/checkpoints/:checklistId', checklistService.getCheckpoints);
router.post('/checkpoint', checklistService.createCheckpoint);
router.put('/checkpoint/:id', checklistService.updateCheckpoint);
router.delete('/checkpoint/:id', checklistService.deletePoint);

router.get('/inspection/:id', inspectionService.getInspection);
router.get('/inspections', inspectionService.getInspections);
router.post('/inspection', inspectionService.createInspection);
router.put('/inspection/:id', inspectionService.updateInspection);
router.delete('/inspection/:id', inspectionService.deleteInspection);

router.get('/inspInstitutions', inspectionService.getInspInstitutions);
router.post('/inspInstitutions', inspectionService.createInspInstitutions);
router.delete('/inspInstitution/:id', inspectionService.deleteInspInstitution);

router.get('/inspCheckpoints', inspectionService.getInspCheckpoints);
router.post('/inspCheckpoints', inspectionService.createInspCheckpoints);
router.delete('/inspCheckpoint/:id', inspectionService.deleteInspCheckpoints);

module.exports = router;
