const express = require('express');
const router = express.Router();
const fs = require('fs').promises;
const path = require('path');

router.post('/', async (req, res) => {
  const { directoryName, currentPath } = req.body;
  console.log(req.body)

  try {

    const uploadsPath = path.join(__dirname, '../../..');
    const newDirectoryPath = path.join(uploadsPath, currentPath, directoryName);

    await fs.mkdir(newDirectoryPath);
    res.status(200).send('Dir created successfully');

  } catch (error) {

    console.error('Error while creating dir: ', error);
    
  }
});

module.exports = router;
