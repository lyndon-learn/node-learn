require("./Admin");
require("./Book");
require("./Class");
require("./Student");

const sequelize = require("./db");

(async function () {
  await sequelize.sync({ alter: true });
  console.log("所有模型均已成功同步.");
})();
