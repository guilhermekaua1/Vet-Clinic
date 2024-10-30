const AppError = require("../errors/AppError");
const _ = require("../const/statusCode");
const statusCodes = new _();
const Pet = require("../models/pet.model");

exports.insertPet = async function (reqBody, tutorId) {
  const { name, species, carry, weight, date_of_birth } = reqBody;
  await Pet.create({
    tutorId,
    name,
    species,
    carry,
    weight,
    date_of_birth,
  })
    .then(data => { return data })
    .catch((err) => {
      throw new AppError("Não foi possivel criar um pet, tente novamente mais tarde", statusCodes.status_500, err.message)
    })
};

exports.listPet = async function () {
  const pets = await Pet.findAll({
    attributes: { exclude: ["updatedAt", "createdAt"] },
  });
  if (!pets.length) { 
    throw new AppError('Tutores nao encotrados', statusCodes.status_404);
  }
  return pets;
}

exports.updatePet = async function (idPet, idTutor, reqBody) {
  const { name, species, carry, weight, date_of_birth } = reqBody;
  await Pet.update(
    {
      name: name,
      species: species,
      carry: carry,
      weight: weight,
      date_of_birth: date_of_birth,
    },
    {
      where: {
        id: idPet,
        tutorId: idTutor,
      },
    }
  ).then((res) => {
    if (!res[0]) {
      throw new AppError("O id do Pet ou do Usuario podem estar incorretos");
    }
    return res;
  });
};

exports.deletePet = async function (idTutor, idPet) {
    await Pet.destroy({
      where: {
        id: idPet,
        tutorId: idTutor,
      },
    })
      .catch(() => {
        throw new AppError("Pet não encontrado", statusCodes.status_404);
      })
};
