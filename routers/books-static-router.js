/*
const books = [
	{
		id: 1,
		name: 'livre1',
		category: 'category1'
	},
	{
		id: 2,
		name: 'livre2',
		category: 'category1'
	}
];
*/

/*
	.get((req, res) => {
		res.json(success(books));
	})
*/

/*
	// configuration pour ajouter un book à la collection
	.post((req, res) => {
		if (req.body.name) { // vérification du name

			let sameName = false; // vérification que le name n'existe pas déjà

			for (let i = 0; i < books.length; i++) {
				if (req.body.name == books[i].name) {
					sameName = true;
					break;
				}
			}

			if (sameName) {
				res.json(error('book déjà présent dans la collection'));
			} else {
				let book = {
					id: createId(),
					name: req.body.name
				};

				books.push(book);

				res.json(success(book));
			}

		} else {
			res.json(error('pas de nom fourni !'));
		}
	});
*/

/*
	.get((req, res) => {

		let index = req.params.id;

		if (typeof (index) == 'string') { // cas erreur
			res.json(error(index));
		} else {
			res.json(success(books[index]));
		}

	})

	.put((req, res) => {

		let index = getIndex(req.params.id);

		// 1er test : on vérifie que l'id en paramètre existe bien dans la collection
		if (typeof (index) == 'string') { // cas erreur
			res.json(error(index));
		} else {
			// let book = books[index];
			let same = false;
			for (let i = 0; i < books.length; i++) { // vérification que l'on affecte pas un name déjà existant dans la collection
				if (req.body.name == books[i].name && req.params.id != books[i].id) {
					same = true;
					break;
				}
			}

			if (same) {
				res.json(error('Le nom du livre existe déjà !'));
			} else {
				books[index].name = req.body.name;
				res.json(success(books[index]));
			}
		}

	})
	*/

/*
	.delete((req, res) => {

		let index = getIndex(req.params.id);

		if (typeof (index) == 'string') { // cas erreur
			res.json(error('id du book inconnu'));
		} else {
			books.splice(index, 1);
			res.json(success(books));
		}

	});

// fonctions utilitaires des l'API développée

function getIndex(id) {

	// la fonction getIndex retourne soit l'index si le book est trouvé soit une chaîne de caractères 'mauvais id'

	for (let i = 0; i < books.length; i++) {
		if (books[i].id == id) {
			console.log('found');
			return i;
		}
	}
	return 'mauvais id';
}

function createId() {
	return ((books[books.length - 1]).id) + 1;
}
*/


