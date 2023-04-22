const reqHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(
      '<html><head>Yoo</head><body><h1>Supp mate</h1><form action="/create-user" method="post"><input type="text" name="username"><button>Submit</button></body></html>'
    );
    return res.end();
  }
  if (url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write(
      "<html><head>Yoo</head><body><h1>Users list</h1><ul><li>Meshmseh</li><li>Medhat</li></ul></body></html>"
    );
    return res.end();
  }
  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const userName = parsedBody.split("=")[1];
      console.log(userName);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  }
};

module.exports = reqHandler;
