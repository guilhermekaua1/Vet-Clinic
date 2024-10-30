const TutorServices = require("../services/tutor.services");
const _ = require("../const/statusCode");
const validationResult = require('express-validator').validationResult;
const ValidationError = require("../errors/ValidationError");

const statusCodes = new _();

exports.insertTutor = async function (req, res, next) {
  const errors = validationResult(req).array()
  try {
    if (errors.length > 0) {
      throw new ValidationError("Error na validacao dos dados", errors);
    }
    const insertedTutor = await TutorServices.insertTutor(req.body);
    res.status(statusCodes.status_201).json(insertedTutor);
  } catch (err) {
    next(err);
  }
};

exports.updateTutor = async function (req, res, next) {
  const idTutor = req.params.id;
  const errors = validationResult(req).array();
  try {
    if (errors.length > 0) {
      throw new ValidationError("Error na validacao dos dados", errors);
    }
    const updatedTutor = await TutorServices.updateTutor(idTutor, req.body);
    res.status(statusCodes.status_200).json(updatedTutor);
  } catch (err) {
    next(err);
  }
};

exports.getTutors = async function (req, res, next) {
  const errors = validationResult(req).array()
  try {
    if (errors.length > 0) {
      throw new ValidationError("Error na validacao dos dados", errors);
    }
    const tutors = await TutorServices.getTutors();
    res.status(statusCodes.status_200).json(tutors);
  } catch (err) {
    next(err);
  }
};

exports.deleteTutor = async function (req, res, next) {
  const idTutor = req.params.id;
  const errors = validationResult(req).array()
  try {
    if (errors.length > 0) {
      throw new ValidationError("Error na validacao dos dados", errors);
    }
    await TutorServices.deleteTutor(idTutor);
    res.status(statusCodes.status_200).json();
  } catch (err) {
    next(err);
  }
};
