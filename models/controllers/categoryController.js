const Categories = require('../categoryModel');


const getAllCategories = async (req, res) => {
    try {
        const categories = await Categories.find();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}



const createCategory = async (req, res) => {
    try {
        const category = await Categories.create(req.body);
        res.status(201).json(category);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { getAllCategories, createCategory };