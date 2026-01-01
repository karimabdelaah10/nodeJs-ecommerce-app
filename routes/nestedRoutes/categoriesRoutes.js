const express = require('express');
const Router = express.Router();
const categoryController = require('../../models/controllers/categoryController');


Router.get('/', categoryController.getAllCategories);
Router.post('/', categoryController.createCategory);


module.exports = Router;