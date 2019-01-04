const Sequelize = require("sequelize");
const db = require("./db");

const Chord = db.define("chord", {
  chordName: {
    type: Sequelize.STRING,
  }
});

module.exports = { Chord };
