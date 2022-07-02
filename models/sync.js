require("./Admin");
require("./Book");
require("./Class");
require("./Student");
require("./relation");

const sequelize = require("./db");

(async function () {
  await sequelize.sync({ alter: true });
  console.log("所有模型均已成功同步.");
})();
