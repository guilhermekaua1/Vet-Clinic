const { body, param } = require("express-validator");

const pet_insert_validator = [
  body("name").isAlpha().withMessage("Name must be composed by letters").notEmpty().withMessage("Name cannot be empty"),

  body("species").isAlpha("Species must be composed by letters").withMessage().notEmpty().withMessage(),

  body("carry").isString().withMessage().notEmpty().withMessage("Carry cannot be empty"),

  body("weight").isFloat().withMessage("Weight must be a float number").notEmpty().withMessage("Weight cannot be empty"),

  body("date_of_birth").isDate().withMessage().notEmpty().withMessage("Date of Birth cannot be empty"),

  param("id").isNumeric().withMessage().notEmpty().withMessage("ID cannot be empty"),
];

const pet_update_validator = [
  // body("name").isAlpha().withMessage().notEmpty().withMessage(),

  // body("species").isAlpha().withMessage().notEmpty().withMessage(),

  // body("carry").isString().withMessage().notEmpty().withMessage(),

  // body("weight").isNumeric().withMessage().notEmpty().withMessage(),

  // body("date_of_birth").isDate().withMessage().notEmpty().withMessage(),

  // body("id").isNumeric().withMessage().notEmpty().withMessage(),

  // param("tutorId").isNumeric().withMessage().notEmpty().withMessage(),
];

const pet_delete_validator = [
  param("id").isNumeric().withMessage().notEmpty().withMessage(),
];

module.exports = {
  pet_insert_validator,
  pet_update_validator,
  pet_delete_validator,
};
