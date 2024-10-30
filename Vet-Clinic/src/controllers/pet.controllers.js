const PetServices = require('../services/pet.services')
const _ = require("../const/statusCode");
const ValidationError = require("../errors/ValidationError");
const { validationResult } = require('express-validator');
const statusCodes = new _();

exports.insertPet = async function (req, res, next) {
    const tutorId = req.params.tutorId;
    const errors = validationResult(req).array()
    try {
        if (errors.length > 0) {
            throw new ValidationError("Error na validacao dos dados", errors);
        }
        const insertedPet = await PetServices.insertPet(req.body, tutorId)
        res.status(statusCodes.status_201).json(insertedPet)
    }catch(err) {
        next(err);
    }
}

exports.listPet = async function (req, res, next) {
    try {
        const pets = await PetServices.listPet();
        res.status(statusCodes.status_200).json(pets);
    } catch (err) {
        next(err);
    }
}

exports.updatePet = async function (req, res, next) {
    const idPet = req.params.petId;
    const idTutor = req.params.tutorId;
    try {
        const updatedPet = await PetServices.updatePet(idPet, idTutor, req.body);
        res.status(statusCodes.status_201).json(updatedPet);
    }catch(err) {
        next(err);
    }
}

exports.deletePet = async function (req, res, next) {
    const idTutor = req.params.tutorId;
    const idPet = req.params.petId;

    try {
        await PetServices.deletePet(idTutor, idPet);
        res.status(statusCodes.status_200).json();
    }catch(err) {
        next(err);
    }
}