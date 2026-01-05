const express = require("express");
const Router = express.Router();
const categoryController = require("../../controllers/categoryController");
const {
  getCategoryValidator,
} = require("../../utils/validators/categoryValidator");

Router.route("/")
  .get(categoryController.getAllCategories)
  .post(categoryController.createCategory);
Router.route("/:slug")
  .get(getCategoryValidator, categoryController.findCategoryBySlug)
  .put(categoryController.UpdateCategory)
  .delete(categoryController.deleteCategory);
module.exports = Router;
