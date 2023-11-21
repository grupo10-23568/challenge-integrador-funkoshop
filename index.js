const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3001;


app.use(express.static(path.resolve(__dirname, 'public_html')));


app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}...`));