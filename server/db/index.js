const db = require('./db');

const { Scale } = require("./scales");
const { Chord } = require("./chords");

// After you've required all of your models into this module, you should establish
// associations (https://sequelize-guides.netlify.com/association-types/) between them here as well!
// Example:
//
// Puppy.belongsTo(Owner)
Scale.hasMany(Chord);
Chord.belongsTo(Scale);

module.exports = {
  // Include your models in this exports object as well!
  db,
  Scale,
  Chord
};


