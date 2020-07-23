const express = require('express');
const helmet = require('helmet');
const routes = require('./routes');

const app = express();

app.use(helmet());
app.use('/', routes);

// default catch all handler
app.all('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'route not defined',
    data: null
  });
});

module.exports = app;
