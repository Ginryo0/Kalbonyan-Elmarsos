// require -> core module or a path
const http = require("http");
const routes = require("./routes");
console.log(routes.txt);

const server = http.createServer(routes.handler);

server.listen(3000);
