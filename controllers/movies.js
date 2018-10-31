/**
 * Movies controller
 */

const Movie = require('../models/Movie.js');

module.exports.controller = (app) => {

  // fetch all movies from database if exits
  app.get('/movies', (req, res) => {
    Movie.find({}, 'name year description slug', (error, movies) => {
      if (error) { console.log(error); }
      res.send({movies});
    });
  });

  // fetch a single movie
  app.get('/movies/:slug', (req, res) => {
    Movie.findOne({'slug': req.params.slug }, 'name year description slug', (error, movie) => {
      if (error) { console.log(error); }
      res.send({movie});
    });
  })

  // receive movie and store in database
  app.post('/movies', (req, res) => {
    const new_movie = new Movie({
      name: req.body.name,
      year: req.body.year,
      description: req.body.description,
      slug: req.body.slug
    });

    new_movie.save((error, movie) => {
      if (error) {
        console.log(error);
      }
      res.send(movie);
    });
  });
}
