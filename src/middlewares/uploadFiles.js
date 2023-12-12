const multer = require('multer');
const path = require('path');

// Configura el almacenamiento de archivos en la carpeta public_html/img
const storage = multer.diskStorage({
    // Carpeta donde se almacenarán los archivos
    destination: (req, file, cb) => cb(null, path.resolve(__dirname, '../../public_html/img')),
    // Define el nombre de archivo con que se guardar
    filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});

// Configura multer para el almacenamiento
const uploadFiles = multer({ storage });

module.exports = uploadFiles;