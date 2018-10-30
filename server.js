/**
 * express - server layer
 * body-parser - parse incoming requests
 * cors - handle cross-origin request
 * morgan - HTTP request logger
 * mongoose - Object modeling for MongoDB
 */
const express = require('express');
const body_parser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const fs = require('fs');

const app = express();
const router = express.Router();
app.use(morgan('combined'));
app.use(body_parser.json());
app.use(cors());

// connect to mongodb
mongoose.connect('mongodb://localhost/movie_database', function(){
  console.log('Connection stablished');
}).catch(err => {
  mongoose.Error('App starting error:', err.stack);
  process.exit(1);
});

// include controllers
fs.readdirSync('controllers').forEach(function(file){
  if (file.substr(-3) == '.js') {
    const route = require('./controllers/' + file);
    route.controller(app);
  }
});

router.get('/', function(req, res){
  res.json({message: 'API Initialized'});
});

const port = process.env.API_POR || 8082;
app.use('/', router);
app.listen(port, function(){
  console.log('API running on port ' + port);
})