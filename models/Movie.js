/**
 * Movie model to be exposed
 * 
 */

const mongoose = require('mongoose');

// define movie schema
const MovieSchema = new mongoose.Schema({
  name: String,
  year: Number,
  description: String,
  slug: {type: String, unique: true}
});

// movie model
const Movie = mongoose.model('Movie', MovieSchema);
module.exports = Movie;