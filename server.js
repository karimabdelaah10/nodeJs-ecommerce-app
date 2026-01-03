const express = require('express');
const app = express();
const dotenv = require('dotenv');
const morgan = require('morgan');
const { enums } = require('./enums.js');
const env = dotenv.config().parsed;
const dbConnection = require('./config/database');
const Router = require('./routes/api');

// DATABASE CONNECTION
dbConnection();

if (env.APP_ENV === enums.DEVELOPMENT) {
  console.log('Development mode enabled');
  app.use(morgan('dev'));
}
// APP MIDDLEWARE
app.use(express.json());
app.listen(env.APP_PORT);
console.log(`Server is running on http://localhost:${env.APP_PORT}`);       


// App Routes
app.use('/api', Router);