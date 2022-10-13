const express = require('express');
const router = express.Router();
const puppetsCtrl = require('../../controllers/api/puppets');

// GET /api/puppets
router.get('/', puppetsCtrl.index);
//POST /api/puppets/create
router.post('/create', puppetsCtrl.create)
//POST /api/puppets/save
router.post('/save', puppetsCtrl.save)
//DELETE /api/puppets/delete
router.delete('/delete', puppetsCtrl.deletePuppet)

module.exports = router; 


