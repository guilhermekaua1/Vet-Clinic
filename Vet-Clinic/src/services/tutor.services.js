const Tutor = require("../models/tutor.model");
const AppError = require('../errors/AppError')
const _ = require('../const/statusCode');
const status_codes = new _();

exports.getTutors = async function () {
  const tutors = await Tutor.findAll({
    include: ["pets"],
    attributes: { exclude: ["updatedAt", "createdAt"] },
  });

  if (!tutors.length) { 
    throw new AppError('Tutores nao encotrados', status_codes.status_404);
  }
  return tutors;
};

exports.insertTutor = async function (reqBody) {
  const { name, phone, email, date_of_birth, zip_code, pets } = reqBody;
  await Tutor.create({
    pets,
    name,
    phone,
    email,
    date_of_birth,
    zip_code,
  }).catch(() => {
    throw new AppError("Não foi possível cadastrar o tutor", status_codes.status_500);
  });
};

exports.updateTutor = async function (tutorId, reqBody) {
  const { name, phone, email, date_of_birth, zip_code } = reqBody;
  await Tutor.update(
    {
      name: name,
      phone: phone,
      email: email,
      date_of_birth: date_of_birth,
      zip_code: zip_code,
    },
    {
      where: { id: tutorId },
    }
  ).catch(() => {
    throw new AppError("Não foi possivel atualizar este tutor.", status_codes.status_500);
  });
};

exports.deleteTutor = async function (idTutor) {
    const deleted = await Tutor.destroy({
      where: {
        id: idTutor,
      },
    });
  
    if (!deleted) {
      throw new AppError("Tutor não encontrado", status_codes.status_404);
    }
};

exports.findById = async function (id) {
  return await Tutor.findByPk(id);
};
