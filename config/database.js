const mongoose = require('mongoose');
const dotenv = require('dotenv');
const env = dotenv.config().parsed;



const dbConnection = () =>mongoose.connect(env.DB_URL)
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.log(err);
});




module.exports = dbConnection;