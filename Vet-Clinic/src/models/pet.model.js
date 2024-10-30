const Sequelize = require('sequelize');
const db = require('../db/connection');
const Tutor = require('./tutor.model')

const Pet = db.define('pets', {
    id: {
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    name: {
        type: Sequelize.STRING
    },
    species: {
        type: Sequelize.STRING
    },
    carry: {
        type: Sequelize.CHAR
    },
    weight: {
        type: Sequelize.DOUBLE
    },
    date_of_birth: {
        type: Sequelize.STRING
    }
}, {
    defaultScope: {
        attributes: { exclude: ['updatedAt', 'createdAt', 'tutorId'] }
    }
});

Tutor.hasMany(Pet, {as: 'pets'});
Pet.belongsTo(Tutor);

module.exports = Pet;