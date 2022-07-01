const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("database", "root", "19980831", {
  host: "localhost",
  dialect: "mysql",
  logging: null,
});

module.exports = sequelize;
