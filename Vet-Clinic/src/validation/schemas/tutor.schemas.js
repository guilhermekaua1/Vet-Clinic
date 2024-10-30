const { body, param } = require("express-validator");

const tutor_insert_validator = [
  body("name")
    .isString()
    .withMessage("The name needs to be composed of letters")
    .notEmpty()
    .withMessage("Name cannot be different than letters"),

  body("email")
    .isEmail()
    .withMessage("Must be a valid email address")
    .notEmpty()
    .withMessage("Email cannot be empty"),

  body("phone")
    .isNumeric()
    .withMessage("Must be a valid phone number")
    .notEmpty()
    .withMessage("Phone number cannot be empty"),

  body("date_of_birth")
    .isDate()
    .withMessage("Must be a valid date")
    .notEmpty()
    .withMessage("Date cannot be empty"),

  body("zip_code")
    .isString({ min: 2, max: 9 })
    .withMessage("Must be a valid zip code")
    .notEmpty()
    .withMessage("Zip Code cannot be empty"),
];

const tutor_update_validator = [
  // body("*")
  //   .if(body("name").isAlpha().notEmpty())
  //   .if(body("email").isEmail().notEmpty())
  //   .if(body("phone").isMobilePhone().notEmpty())
  //   .if(body("zip_code").isString().notEmpty())
  //   .if(body("date_of_birth").isDate().notEmpty())
  //   .if((value, { path }) => {
  //     console.log("chegou");
  //   }),

  // param("id")
  //   .isNumeric()
  //   .withMessage("Must be a valid numeric ID")
  //   .notEmpty()
  //   .withMessage("ID does not can be empty"),
];

const tutor_delete_validator = [
  param("id").isNumeric().withMessage("Must be a valid numeric ID"),
];

module.exports = {
  tutor_insert_validator,
  tutor_update_validator,
  tutor_delete_validator,
};
