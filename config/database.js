// config/database.js
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("paiecashbis", "root", "Test123456", {
    host: "localhost",
    dialect: "mysql",
});

module.exports = sequelize;
