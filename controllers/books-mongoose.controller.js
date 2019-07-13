const booksMongooseService = require('../services/books-mongoose.service');

exports.getAllBooks = async function(req, res){

	try {
		var books = await booksMongooseService.getAllBooks({});
		return res.status(200).json({status:200, data : books,message: 'Success Controller call getAllBooks()'});
	} catch(e){
		return res.status(500).json({status:500, message: e.message});
	}

};

exports.getOneBook = async function(req, res){

	let index = req.params.id;

	try {
		var book = await booksMongooseService.getOneBook(index);
		return res.status(200).json({status:200, data : book,message: 'Success Controller call getOneBook()'});
	} catch(e){
		return res.status(500).json({status:500, message: e.message});
	}

};

exports.deleteOneBook = async function(req, res){

	let index = req.params.id;

	try {
		var book = await booksMongooseService.deleteOneBook(index);
		return res.status(202).json({status:202, data : book,message: 'Success Controller call deleteOneBook()'});
	} catch(e){
		return res.status(500).json({status:500, message: e.message});
	}

};

exports.updateOneBook = async function(req,res){

	try {
		var updatedBook = await booksMongooseService.updateOneBook(req);
		return res.status(200).json({status:200, data: updatedBook, message: 'Sucess Controller call updateOneBook()'});
	} catch(e) {
		return res.status(500).json({status:500, message: e.message});
	}

};

exports.createOneBook = async function(req,res){

	try {
		var createdBook = await booksMongooseService.createOneBook(req);
		return res.status(200).json({status:200, data: createdBook, message: 'Sucess Controller call createOneBook()'});
	} catch(e) {
		return res.status(201).json({status:201, message: e.message});
	}

};

