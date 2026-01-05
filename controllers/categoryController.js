const Categories = require('../models/categoryModel');
var slugify = require('slugify')



// @desc   Get all categories
// @route  GET /api/v1/categories
// @access Public
const getAllCategories = async (req, res) => {
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
}


// @desc Get Specific Category
// @route GET /api/v1/categories/:slug
// @access Public
const findCategoryBySlug  = async(req, res,next) =>{
    try{ 
    const slug = req.params.slug;
        const category = await Categories.findOne({slug: slug});
        if(!category){
            next(new ApiError('Category not found', 404));
        }

        res.status(200).json(category);
    }catch(error){
        next(error);
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
        next(error);
    }
}

//@desc Update a category
//@route PUT /api/v1/categories/:slug
//@access Public
const UpdateCategory = async(req ,res,next) => {
    try{
        const slug = req.params.slug;
        const name = req.body.name
        const category = await Categories.findOneAndUpdate({slug} , {
            name , slug : slugify(name.toLowerCase())
        },{
            new : true,
        });
        if(!category){
            next(new ApiError('Category not found', 404));
        }
        res.status(200).json(category);
    } catch (error) {
        next(error);
    }
}

// @desc   Delete a category
// @route  DELETE /api/v1/categories/:slug
// @access Public

const deleteCategory = async (req, res,next) => {
    try {
        const slug = req.params.slug;
        const category = await Categories.findOneAndDelete({ slug: slug });
        if (!category) {
            next(new ApiError('Category not found', 404));
        }
        res.status(200).json({ message: 'Category deleted successfully' });
    } catch (error) {
        next(error);
    }
}












module.exports = { getAllCategories,findCategoryBySlug, createCategory, UpdateCategory , deleteCategory };