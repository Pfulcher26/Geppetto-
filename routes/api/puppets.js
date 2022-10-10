const express = require('express');
const router = express.Router();
const puppetsCtrl = require('../../controllers/api/puppets');

//POST /api/puppets/create
router.post('/create', puppetsCtrl.create)

module.exports = router; 


