const { check } = require("express-validator");
const {
  validationMiddleware,
} = require("../../middlewares/validatorMiddleware");

const getCategoryValidator = [
  check("slug").isSlug().withMessage("Invalid category slug"),
  validationMiddleware,
];
module.exports = { getCategoryValidator };
