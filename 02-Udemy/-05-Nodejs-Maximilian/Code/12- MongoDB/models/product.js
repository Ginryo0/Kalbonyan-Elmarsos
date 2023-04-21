const mongodb = require("mongodb");
const getDb = require("../util/database").getDb;

class Product {
  constructor(title, price, desc, imgUrl, id, userId) {
    this.title = title;
    this.price = price;
    this.description = desc;
    this.imageUrl = imgUrl;
    this._id = id ? new mongodb.ObjectId(id) : null;
    this.userId = userId;
  }

  // if no id = create product
  // id -> create a product to replace old one
  save() {
    const db = getDb();
    let dbOp;
    if (this._id) {
      dbOp = db
        .collection("products")
        .updateOne({ _id: this._id }, { $set: this });
      // $set -> update these fields -> this is obj
    } else {
      dbOp = db.collection("products").insertOne(this);
    }

    // will be converted auto to json
    return dbOp
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  }

  static fetchAll() {
    // .find returns a cursor -> get them step by step -> you have to do smth like next
    // find({title: 'fish'}) -> filters
    // .toArray -> get all at once and conv to array
    const db = getDb();

    return db
      .collection("products")
      .find()
      .toArray()
      .then((prods) => prods)
      .catch((err) => console.log(err));
  }

  static findById(prodId) {
    const db = getDb();

    // _id -> not id + ObjectId -> special type - faster - arranged alphabetically = incrementing
    // .next() -> move cursor returned by find to last item found
    return db
      .collection("products")
      .find({ _id: new mongodb.ObjectId(prodId) })
      .next()
      .then((prod) => prod)
      .catch((err) => console.log(err));
  }

  static deleteById(prodId) {
    const db = getDb();
    return db
      .collection("products")
      .deleteOne({ _id: new mongodb.ObjectId(prodId) })
      .then((res) => console.log("deleted"))
      .catch((err) => console.log(err));
  }
}

module.exports = Product;
