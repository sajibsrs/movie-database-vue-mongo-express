const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const MovieSchema = new Schema({
  name: String,
  year: Number,
  description: String
});

const Movie = mongoose.model('Movie', MovieSchema);
module.exports = Movie;