const Sequelize = require("sequelize");

// db, user, pw, config -> dialect db type
const sequelize = new Sequelize("node-course", "root", "NodeCourse", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
