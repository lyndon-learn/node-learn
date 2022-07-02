const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("myschooldb", "root", "19980831", {
  host: "localhost",
  dialect: "mysql",
  logging: null,
});

module.exports = sequelize;
