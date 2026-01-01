const express = require('express');
const app = express();
const port = 3000;
const dotenv = require('dotenv');
const env = dotenv.config().parsed;
const dbConnection = require('./config/database');
const Router = require('./routes/api');

// DATABASE CONNECTION
dbConnection();

// APP MIDDLEWARE
app.use(express.json());
app.listen(env.APP_PORT);
console.log(`Server is running on http://localhost:${env.APP_PORT}`);       


// App Routes
app.use('/api', Router);