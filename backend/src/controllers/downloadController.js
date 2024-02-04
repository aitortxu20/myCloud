const path = require('path');

const downloadFile = (req, res) => {

    const filename = req.params.filename;
    const finalPath = filename.replaceAll('-', '/')
    const filePath = path.join(__dirname, '../../..', finalPath);

    res.download(filePath, (err) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error while downloading");
        }
    });

};

module.exports = {
    downloadFile
};