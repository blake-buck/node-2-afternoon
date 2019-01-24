const express = require('express');
const body = require('body-parser');
const massive = require('massive');
const controller = require('./products_controller.js');
require('dotenv').config();

const app = express();

app.use(body.json());

massive(process.env.CONNECTION_STRING).then(dbInstance => {
	app.set('db', dbInstance);
	
}).catch( err => console.log(err));




app.get('/api/products', controller.getAll);
app.get('/api/products/:id', controller.getOne);
app.put('/api/products/:id', controller.update);
app.post('/api/products', controller.create);
app.delete('/api/products/:id', controller.delete);

const port = process.env.PORT || 3000;
app.listen(3000, console.log(`Listening on port ${port}`));