const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Adalynn Odell');
});

module.exports = routes;
