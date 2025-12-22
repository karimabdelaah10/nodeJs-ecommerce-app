const express = require('express');
const app = express();
const port = 3000;
const dotenv = require('dotenv');
const env = dotenv.config().parsed;




app.listen(env.PORT);
console.log(`Server is running on http://localhost:${env.PORT}`);       


app.get('/', (req, res) => {
  res.send('Hello World from Express!');
});