const path = require("path");

// module.exports = path.dirname(process.mainModule.filename);
module.exports = path.dirname(require.main.filename);
// -> the directory of the main module that started our server -> app.js
