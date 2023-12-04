module.exports = function(vegetables, fruits, farmLands) {
  var express = require('express');
  var router = express.Router();

  // Home page route
  router.get('/', function(req, res) {
      res.render('index', { title: 'Home', vegetables, fruits, farmLands });
  });

  // Additional routes can be added below with similar structure
  router.get('/about', function(req, res) {
      res.render('about', { title: 'About' });
  });

  router.get('/projects', function(req, res) {
      res.render('projects', { title: 'Projects' });
  });

  router.get('/contact', function(req, res) {
      res.render('contact', { title: 'Contact' });
  });

  router.get('/services', function(req, res) {
      res.render('services', { title: 'Services' });
  });

  // ... add any other routes you need

  return router;
};

