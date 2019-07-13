// Lors d'un CREATE ou d'un UPDATE de book, l'opération se fait en 2 étapes
// 1 - une requête pour faire la partie file upload et enregistrer le fichier dans l'arbrescence du serveur
// 2 - une requête pour l'écriture en BDD	
// Adress appel /books/upload dans le post ou le put il faudra utiliser 'bookImage' pour l'image

const multer = require('multer');
const crypto = require('crypto');
const path = require('path');

// configuration du file upload => les fichiers images seront stockés dans 
// le répertoire /uploads, seul le nom de fichier est stcké en bdd


const storage = multer.diskStorage({
	destination: './uploads',
	filename: (req, file, callback) => {
		crypto.pseudoRandomBytes(16, (err, raw) => {
			if (err) return callback(err);
			callback(null, raw.toString('hex') + path.extname(file.originalname));
		});
	}
});

const upload = multer({ storage: storage });
const bookImage = upload.single('bookImage');

exports.writeFileOnDisk = async function (req, res) {

	try {

		await bookImage(req, res, () => {

			/*
			if (!req.file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
				return res.status(400).json({
					status: 400,
					data: { originalname: req.file.originalname },
					message: 'Le fichier doit être un ficiher image !'

				});
			}*/

			return res.status(201).json({
				status: 201,
				data: { filename: req.file.filename, file: req.file },
				message: 'Success writing file image on disk'
			});

		});

	} catch (e) {
		return res.status(500).json({ status: 500, message: e.message });
	}

};