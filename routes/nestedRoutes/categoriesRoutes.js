const express = require('express');
const Router = express.Router();
const categoryController = require('../../controllers/categoryController');


Router.route('/')
    .get(categoryController.getAllCategories)
    .post(categoryController.createCategory);
Router.route('/:slug')
        .get(categoryController.findCategoryBySlug)
        .put(categoryController.UpdateCategory)
        .delete(categoryController.deleteCategory);
module.exports = Router;