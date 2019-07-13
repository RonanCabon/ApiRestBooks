// permet de faire de l'ES6
require('babel-register');

// Express va permettre de faire une API Rest
const express = require('express');
const app = express(); // création d'une instance de serveur express

// Morgan va permettre de faire du deboguage en développement
const morgan = require('morgan');

// externalisation de la configuration du serveur
const config = require('./assets/config');

// Pour le traitement des requêtes Http POST
const bodyParser = require('body-parser');

// Pour la partie Cross Control Origin, on utilise CORS
const cors = require('cors');

// Récupération du router pour les books
const booksRouter = require('./routers/books-router');
// Récupération du router pour les books file upload
const booksFileUploadRouter = require('./routers/books-file-upload-router');

// Définition d'un middleware
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Toutes les urls en /api/v1/books seront gérées par le BooksRouter
app.use(config.rootApi + 'books', booksRouter);
// Toutes les urls en /api/v1/books/upload seront gérées par le BooksFileUploadRouter
app.use(config.rootApi + 'books/upload', booksFileUploadRouter);

app.listen(config.port, () => { console.log('Api Rest Books started on port 3000 ...'); });


