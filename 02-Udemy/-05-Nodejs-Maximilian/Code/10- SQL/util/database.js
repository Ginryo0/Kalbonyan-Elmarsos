const mysql = require("mysql2");

// multiple connections = connection poo
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "node-course",
  password: "NodeCourse",
});

// async connection
module.exports = pool.promise();
