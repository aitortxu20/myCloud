const express = require('express');
const directoryController = require('../controllers/directoryController');

const router = express.Router();

router.get('/:path(*)', directoryController.getDirectoryContent);

module.exports = router;