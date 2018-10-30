const MovieSchema = require('../models/Movie.js');

module.exports.controller = (app) => {

  // fetch all movies
  app.get('/movies', (req, res) => {
    MovieSchema.find({}, 'name year description',
    (error, movies) => {
      if (error) {console.log(error)}
      res.send({
        movies
      });
    });
  });
  
  // add a new movie
  app.post('/movies', (req, res) => {
    const newMovie = new MovieSchema({
      name: req.body.name,
      year: req.body.year,
      description: req.body.description
    });

    newMovie.save((error, movie) => {
      if (error) {
        console.log(error);
      }
      res.send(movie);
    });
  });
}
