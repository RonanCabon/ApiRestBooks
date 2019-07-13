/* **
Création du Router associé aux books
 ** */

// permet de faire de l'ES6
require('babel-register');

// Express va permettre de faire une API Rest
const express = require('express');

// Enrichissement des réponses avec le module utils
// const { success, error } = require('../assets/utils');

const booksController = require('../controllers/books-mongoose.controller');

// Définition/création du router associé à la ressource book
let booksRouter = express.Router();

// configuration des points d'entrée de l'API Rest Books
// Cf. CRUD => méthodes du protocole HTTP

booksRouter.route('/')
	.get(booksController.getAllBooks);

booksRouter.route('/')
	.post(booksController.createOneBook);

booksRouter.route('/:id')
	.get(booksController.getOneBook);

booksRouter.route('/:id')
	.delete(booksController.deleteOneBook);

booksRouter.route('/:id')
	.put(booksController.updateOneBook);

module.exports = booksRouter;
