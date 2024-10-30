const express = require('express');
const router = express.Router();
const TutorController = require('../controllers/tutor.controllers');
const {tutor_insert_validator, tutor_update_validator, tutor_delete_validator} = require('../validation/schemas/tutor.schemas');

router.post(
  '/', 
  tutor_insert_validator,
  TutorController.insertTutor
);

router.get(
  '/',
  TutorController.getTutors);

router.put(
  '/:id',
  tutor_update_validator,
  TutorController.updateTutor);

router.delete(
  '/:id',
  tutor_delete_validator,
  TutorController.deleteTutor);

module.exports = router;