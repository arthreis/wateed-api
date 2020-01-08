const express = require('express');

const ItemController = require('./controllers/ItemController');
const UserController = require('./controllers/UserController');

const routes = express.Router();

routes.get('/users', UserController.getAll);
routes.get('/users/:id', UserController.get);
routes.post('/users', UserController.create);
routes.patch('/users', UserController.get, UserController.update);
routes.delete('/users/:id', UserController.get, UserController.delete);

routes.get('/items', ItemController.getAll);
routes.get('/items/:id', ItemController.get);
routes.post('/items', ItemController.create);
routes.patch('/items/:id', ItemController.get, ItemController.update);
routes.delete('/items/:id', ItemController.get, ItemController.delete);

module.exports = routes;