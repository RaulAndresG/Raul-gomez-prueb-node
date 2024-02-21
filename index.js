const express = require("express");
const mysql = require("mysql");
const dotenv = require("dotenv");
const routerBase = require('./routes/routes.js');

dotenv.config();

const app = express();

const port = process.env.PORT || 7777; 
app.use(express.json());

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

connection.connect((err) => {
    if (err) {
        console.error("Error al conectar a la base de datos:", err);
    } else {
        console.log("Conectado correctamente a la base de datos");
    }
});

app.use('/market', routerBase);

app.listen(port, () => {
    console.log("Servidor lanzado en el puerto:", port);
});

module.exports = connection;
