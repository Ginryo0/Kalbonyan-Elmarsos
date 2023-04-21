const express = require('express'); // uses middleware functions
const bodyParser = require('body-parser');
const locationRoutes = require('./routes/location'); // importing route

const app = express(); // you call express like a function -> creates a server when called

// app.set('view engine', 'ejs'); // set engine for parsing our template = ejs extension
// app.set('views', 'views'); // 2n param -> folder that holds our views files
// // calling a middleware
app.use(bodyParser.json());

app.use((re, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(locationRoutes);
// app.use((req, res, next) => {
//   res.setHeader('Content-Type', 'text/html');
//   next(); // move to next middleware
// });

// app.use((req, res, next) => {
//   const userName = req.body.username || 'NoName';
//   res.render('index', {
//     // render index file in views path
//     user: userName,
//   });
//   // res.send(
//   //   `<h1>Supp ${userName}</h1><form method="POST" action="/"><input name="username" type="text"><button type="submit">Sennd</button></form>`
//   // );
// });

app.listen(3000); // express
