const directoryService = require('../services/directoryService');

async function getDirectoryContent(req, res) {
    try {
        
        const { path } = req.params;
        const content = await directoryService.getDirectoryContent(path);
        res.json(content);

    } catch (error) {
        res.status(500).send('Error while obtaining directory content');
    }
}

module.exports = {
    getDirectoryContent,
};