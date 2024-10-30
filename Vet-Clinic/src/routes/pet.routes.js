const express = require('express');
const router = express.Router();
const PetController = require('../controllers/pet.controllers');
const { pet_insert_validator, pet_update_validator, pet_delete_validator } = require('../validation/schemas/pet.schemas');

router.post('/:tutorId', pet_insert_validator, PetController.insertPet);

router.get('/', PetController.listPet);

router.put('/:petId/tutors/:tutorId', pet_update_validator, PetController.updatePet)

router.delete('/:petId/tutors/:tutorId', pet_delete_validator, PetController.deletePet)

module.exports = router;