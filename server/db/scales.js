const Sequelize = require("sequelize");
const db = require("./db");

const Scale = db.define("scale", {
  key: {
    type: Sequelize.STRING,
  }
});

module.exports = { Scale };
