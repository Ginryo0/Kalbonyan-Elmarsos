const express = require('express');
const bodyParser = require('body-parser');

const feedRoutes = require('./routes/feed');

const app = express();
app.use(bodyParser.json()); // application/json -> res type

// Allow CORS from all origins + 5 methods
// Allow setting Content Type header for client & allow authorization
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use('/feed', feedRoutes);
// app.use(bodyParser.urlencoded()) -> x-www-form-urlencoded <form> -> res type

app.listen(8080);
