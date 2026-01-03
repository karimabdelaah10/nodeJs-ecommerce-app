const mongoose = require('mongoose');


const categoriesSchema =  new mongoose.Schema({
    name: {
      type : String,
      required : [true , 'Category name is required field'],
      minlength : [3 , 'Category name must be at least 3 characters'],
    },
    slug :{
      type : String,
      required : [true , 'Category slug is required field'],
      unique : true,
    },
    image : {
      type :String,
    }
  }, { timestamps : true }
);
  
  const Categories = mongoose.model('Categories', categoriesSchema);
  
  module.exports = Categories;