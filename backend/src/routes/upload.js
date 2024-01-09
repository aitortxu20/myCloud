const express = require('express');
const router = express.Router();
const multer = require('multer');
const bodyParser = require('body-parser');
const fs = require('fs');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
         // Accede al valor de uploadPath
        cb(null, "tmp/");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });


router.post('/', upload.single('file'), (req, res) => {
    
    const path = req.body.pathToUpload;
    const filename = req.file.filename;

    const currentPath = `./tmp/${filename}`;
    const newPath = `.${path}/${filename}`;
    
    fs.rename(currentPath, newPath, (err) => {
        if (err) {
          console.error('Error al mover el archivo:', err);
        } else {
          console.log('Archivo movido con éxito');
        }
    });
    // Verifica si uploadPath tiene el valor esperado
    res.send('Archivo subido correctamente.');
    
});

module.exports = router;

