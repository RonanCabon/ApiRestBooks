const mongoose = require('mongoose');

const booksMongooseSchema = new mongoose.Schema({
	name: String,
	category: String,
	image: String,
	description: String
});

// Définition de la base de données
// name = BooksMongooseModel, collection = BooksMongoDBCollection

module.exports = mongoose.model('BooksMongooseModel',booksMongooseSchema,'BooksMongoDBCollection');