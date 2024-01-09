const express = require('express');
const router = express.Router();
const fs = require('fs').promises;
const path = require('path');

// Ruta para crear un directorio
router.post('/', async (req, res) => {
  const { directoryName, currentPath } = req.body;
  console.log(req.body)

  try {
    const uploadsPath = path.join(__dirname, '../../..');
    const newDirectoryPath = path.join(uploadsPath, currentPath, directoryName);
    console.log(newDirectoryPath);
    await fs.mkdir(newDirectoryPath);
    res.status(200).send('Directorio creado exitosamente');
  } catch (error) {
    console.error('Error node.js al crear el directorio: ', error);
    res.status(500).send('Error al crear el directorio');
  }
});

module.exports = router;
