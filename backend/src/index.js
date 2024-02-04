const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());


const uploadRoutes = require('./routes/upload'); 
const directoryRoutes = require('./routes/directoryRoutes');
const createDir = require('./routes/createDir');
const downloadRoute = require('./routes/downloadRoute');

app.use(express.static('frontend/public'));
app.use('/upload', uploadRoutes);
app.use('/uploads', directoryRoutes);
app.use('/create-directory', createDir);
app.use('/download', downloadRoute);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});


