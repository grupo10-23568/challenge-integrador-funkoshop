const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.DBUSER,
    password: process.env.DBPASS,
    database: process.env.DB,
    port: process.env.DBPORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

pool.getConnection((error, connection) => {
    if (error) {
        console.error('Hubo un error de conexión: ', error);
    } else {
        console.log('Conexión a la BD fue exitosa.');
        connection.release();
    }
});

module.exports = {
    conn: pool.promise()
};