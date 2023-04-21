const http = require('http');

// building
const server = http.createServer((request, response) => {
  let body = [];
  request.on('data', (chunk) => {
    // add event listener
    body.push(chunk);
  });
  request.on('end', () => {
    body = Buffer.concat(body).toString();
    let userName = 'NoName';
    if (body) {
      userName = body.split('=')[1];
    }
    response.setHeader('Content-Type', 'text/html'); // you have to tell browser data type - text/plain -> normal text
    response.write(
      `<h1>Supp ${userName}</h1><form method="POST" action="/"><input name="username" type="text"><button type="submit">Sennd</button></form>`
    ); // send
    response.end();
  });
});

// start server
server.listen(3000);
