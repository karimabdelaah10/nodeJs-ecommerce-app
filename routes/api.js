const express = require('express');
const Router = express.Router();
const categoriesRoutes = require('./nestedRoutes/categoriesRoutes');



Router.get('/', (req, res) => {
    res.send('Hello World from Express!');
  });

Router.use('/categories', categoriesRoutes);
module.exports = Router;