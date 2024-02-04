const fs = require('fs').promises;
const path = require('path');

async function getDirectoryContent(dirPath) {
    
    const fullPath = path.join(__dirname, '../../..', 'uploads/', dirPath);
    const items = await fs.readdir(fullPath);
    const content = { files: [], directories: [] };

    for (const item of items) {
        const itemPath = path.join(fullPath, item);
        const stats = await fs.stat(itemPath);

        if (stats.isFile()) {
            content.files.push(item);
        } else if (stats.isDirectory()) {
            content.directories.push(item);
        }
    }
    
    return content;
}

module.exports = {
    getDirectoryContent,
};