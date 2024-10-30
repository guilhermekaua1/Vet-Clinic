const Sequelize = require('sequelize');
const db = require('../db/connection');

const Tutor = db.define('tutors', {
    id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
    },
    name: {
        type: Sequelize.STRING
    },
    phone: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    date_of_birth: {
        type: Sequelize.STRING
    },
    zip_code: {
        type: Sequelize.STRING
    },
}, {
    defaultScope: {
        attributes: { exclude: ['updatedAt', 'createdAt', 'tutorId'] }
    }
})

module.exports = Tutor;