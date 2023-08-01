const express = require("express");
const mysql = require("mysql2");
const PORT = process.env.PORT || 3001;
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
app.use(express.json())
app.use(cors({ origin: 'http://localhost:3000' }));
app.use('/images', express.static(path.join(__dirname, 'assets')));

app.listen(PORT, () => {
    console.log(`Le port de mon backend est le : ${PORT}`);
});

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT
});

connection.connect((err) => {
    if (err) {
        console.error('Erreur de connexion à la base de données :', err);
    } else {
        console.log('Connecté à la base de données MySQL !');
    }
});

/*IMPORT REQUETE*/
const annonce = require('./requetes/annonce');
/*-----*/

/*APPEL REQUETE*/
annonce(app, connection);
/*----------*/

