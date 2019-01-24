module.exports = {
	create: (req, res, next) => {
		const db = req.app.get('db');
		db.create_product([req.body.name, req.body.description, req.body.price, req.body.image_url]).then(() => res.sendStatus(200)).catch(err => console.log(err));
	},
	getOne: (req, res, next) => {
		const db = req.app.get('db');
		db.read_product(req.params.id).then(product => res.status(200).send(product)).catch(err => console.log("getOne",err));
	},
	getAll: (req, res, next) => {
		const db = req.app.get('db');
		db.read_products().then(product => res.status(200).send(product)).catch(err => console.log("getAll",err));
	},
	update: (req, res, next) => {
		const db = req.app.get('db');
		db.update_product([req.params.id, req.query.desc]).then(() => res.sendStatus(200)).catch(err => console.log("update",err));
	},
	delete: (req, res, next) => {
		const db = req.app.get('db');
		db.delete_product(req.params.id).then(() => res.sendStatus(200)).catch(err => console.log("delete", err));
	}
}