const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, path.resolve(__dirname, '../../public_html/img')),
    filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});

const uploadFiles = multer({ storage });

module.exports = uploadFiles;