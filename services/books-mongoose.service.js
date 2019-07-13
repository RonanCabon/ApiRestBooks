const mongoose = require('mongoose');
const connection = mongoose.connection;

const BooksMongooseModel = require('../models/books-mongoose.model');

mongoose.connect('mongodb://localhost:27017/BooksMongoDB', {useNewUrlParser: true});

// gestion cas erreur de connexion
connection.on('error', (err) => {
	console.error('Connection to mongoDB error :', err.message);
});

// gestion de la connexion
connection.once('open', () => {
	console.log ('Connected to mongoDB BooksMongoDB');
});
 
exports.getAllBooks = async function(query){

	try{
		var books = await BooksMongooseModel.find()
			.sort({'createdOn': -1})
			.exec();
		return books;
	} catch (e) {
		throw Error(e);
	}
};

exports.getOneBook = async function(index){

	try{
		var book = await BooksMongooseModel.findById(index).exec();
		return book;
	} catch (e) {
		throw Error(e);
	}
};

exports.deleteOneBook = async function(index){

	try{
		var book = await BooksMongooseModel.findByIdAndDelete(index).exec();
	} catch (e) {
		throw Error(e);
	}
};

exports.updateOneBook = async function(req){

	try{
		var updatedBook = await BooksMongooseModel.findByIdAndUpdate(req.params.id, req.body, {new:true});
		return updatedBook;
	} catch (e) {
		throw Error(e);
	}

};

exports.createOneBook = async function(req){

	try {
		var book = new BooksMongooseModel({
			name : req.body.name,
			category : req.body.category,
			image : req.body.image,
			description : req.body.description
		});
		var newBook = await book.save();
		return newBook;
	} catch (e){
		throw Error(e);
	}

};

