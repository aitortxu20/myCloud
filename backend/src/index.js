const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());


const uploadRoutes = require('./routes/upload'); // Importa el enrutador de subida de archivos
const directoryRoutes = require('./routes/directoryRoutes');
const createDir = require('./routes/createDir');
//const downloadRoutes = require('./routes/download.js'); // Importa el enrutador de descarga de archivos

app.use(express.static('frontend/public'));
app.use('/upload', uploadRoutes); // Monta las rutas de subida en /upload
app.use('/uploads', directoryRoutes);
app.use('/create-directory', createDir);


// Otras configuraciones y middleware de tu aplicación...

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

//module.exports = app;
