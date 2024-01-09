const directoryService = require('../services/directoryService');

async function getDirectoryContent(req, res) {
    try {
        console.log(req.params);
        const { path } = req.params;
        console.log("Path del req.params: " + path);
        const content = await directoryService.getDirectoryContent(path);
        console.log("content: " + content);
        res.json(content);
    } catch (error) {
        res.status(500).send('Error al obtener el contenido del directorio');
    }
}

module.exports = {
    getDirectoryContent,
};