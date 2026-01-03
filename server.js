const express = require('express');
const app = express();
const dotenv = require('dotenv');
const morgan = require('morgan');
const { enums } = require('./enums.js');
const env = dotenv.config().parsed;
const port = process.env.PORT || 4000;


app.listen(port);
console.log(`Server is running on http://localhost:${port}`);       


if (env.APP_ENV === enums.DEVELOPMENT) {
  console.log('Development mode enabled');
  app.use(morgan('dev'));
}



app.get('/', (req, res) => {
  res.send('Hello World from Express!');
});


app.get('/health', (req, res) => {
  res.status(200).send('OK');
});