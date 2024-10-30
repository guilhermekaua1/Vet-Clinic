const Sequelize = require('sequelize');
const name_db = process.env.NAME_DB

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: `./src/db/${name_db}`,
});

module.exports = sequelize;