const express = require('express');
const router = express.Router();
const downloadController = require('../controllers/downloadController');

router.get('/:filename', downloadController.downloadFile);

module.exports = router;
