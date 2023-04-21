const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (cb) => {
  // after .net/db? -> db name
  MongoClient.connect(
    "mongodb+srv://ginryo:LYcvrzU7BRLV8nLx@cluster0.spv0bgt.mongodb.net/shop?retryWrites=true&w=majority"
  )
    .then((client) => {
      console.log("Connected");
      _db = client.db();
      cb();
    })
    .catch((err) => {
      throw err;
    });
};

// get access to db
const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "NO DB FOUND!!";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
