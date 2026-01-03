const Categories = require('../models/categoryModel');
var slugify = require('slugify')



// @desc   Get all categories
// @route  GET /api/v1/categories
// @access Public
const getAllCategories = async (req, res) => {
    try {
        const page = req.query.page * 1 || 1;
        const limit = req.query.limit * 1 || 20;
        const skip = (page - 1) * limit;
        const filters = { };
        const categories = await Categories.find(filters).skip(skip).limit(limit);
        res.status(200).json({
            page,
            limit,
            results: categories.length,
            data: categories
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


// @desc   Create a new category
// @route  POST /api/v1/categories
// @access Public
const createCategory = async (req, res) => {
    try {
    const newCategoryData =  { 
        name: req.body.name,
        slug: slugify(req.body.name.toLowerCase()),
    };  
    const category = await Categories.create(newCategoryData);
        res.status(201).json(category);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
















module.exports = { getAllCategories, createCategory };