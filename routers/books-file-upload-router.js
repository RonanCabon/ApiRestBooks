/* **
Création du Router associé aux books
 ** */

// permet de faire de l'ES6
require('babel-register');

// Express va permettre de faire une API Rest
const express = require('express');

// Enrichissement des réponses avec le module utils
// const { success, error } = require('../assets/utils');

const booksFileUploadController = require('../controllers/books-file-upload.controller');

// Définition/création du router associé à la ressource book
let booksFileUploadRouter = express.Router();

booksFileUploadRouter.route('/')
	.post(booksFileUploadController.writeFileOnDisk);

module.exports = booksFileUploadRouter;