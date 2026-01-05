const express = require("express");
const app = express();
const dotenv = require("dotenv");
const morgan = require("morgan");
const { enums } = require("./enums.js");
const env = dotenv.config().parsed;
const dbConnection = require("./config/database");
const Router = require("./routes/api");
const ApiError = require("./utils/apiError");
const errorHandler = require("./middlewares/errorMiddleware");

// DATABASE CONNECTION
dbConnection();

// APP MIDDLEWARE
app.use(express.json());
if (env.APP_ENV === enums.DEVELOPMENT) {
  console.log("Development mode enabled");
  app.use(morgan("dev"));
}

app.listen(env.APP_PORT);
console.log(`Server is running on http://localhost:${env.APP_PORT}`);

// App Routes Registration
app.use("/api/v1", Router);

// Handle Unhandled Routes
app.use((req, res, next) => {
  next(new ApiError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// Global Error Handler
app.use(errorHandler);
