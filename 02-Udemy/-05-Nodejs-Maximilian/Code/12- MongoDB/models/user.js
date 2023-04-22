const mongodb = require("mongodb");
const getDb = require("../util/database").getDb;

const ObjectId = mongodb.ObjectId;

class User {
  constructor(uname, email, cart, id) {
    this.name = uname;
    this.email = email;
    this.cart = cart; // {items}
    this._id = id;
  }

  save() {
    const db = getDb();
    return db.collection("users").insertOne(this);
  }

  addToCart(product) {
    const cartProductIdx = this.cart.items.findIndex((cp) => {
      // make sure we are working with strings
      return cp.productId.toString() === product._id.toString();
    });

    let newQty = 1;
    const updatedCartItems = [...this.cart.items];
    if (cartProductIdx >= 0) {
      newQty = this.cart.items[cartProductIdx].quantity + 1;
      updatedCartItems[cartProductIdx].quantity = newQty;
    } else {
      updatedCartItems.push({
        productId: new ObjectId(product._id),
        quantity: newQty,
      });
    }
    const updatedCart = {
      items: updatedCartItems,
    };
    const db = getDb();
    db.collection("users").updateOne(
      { _id: new ObjectId(this._id) },
      { $set: { cart: updatedCart } }
    );
  }

  getCart() {
    const db = getDb();
    const prodIds = this.cart.items.map((i) => {
      return i.productId;
    });
    return db
      .collection("products")
      .find({ _id: { $in: prodIds } })
      .toArray()
      .then((prods) =>
        prods.map((p) => ({
          ...p,
          quantity: this.cart.items.find(
            (i) => i.productId.toString() === p._id.toString()
          ).quantity,
        }))
      );
  }

  deleteItemFromCart(productId) {
    const updatedCartItems = this.cart.items.filter(
      (item) => item.productId.toString() !== productId.toString()
    );

    const db = getDb();
    return db
      .collection("users")
      .updateOne(
        { _id: new ObjectId(this._id) },
        { $set: { cart: { items: updatedCartItems } } }
      );
  }

  addOrder() {
    // order is a snapshot of cart data at order time
    const db = getDb();
    return this.getCart()
      .then((products) => {
        const order = {
          items: products,
          user: {
            _id: this._id,
            name: this.name,
          },
        };
        return db.collection("orders").insertOne(order);
      })
      .then((res) => {
        this.cart = { items: [] };
        return db
          .collection("users")
          .updateOne(
            { _id: new ObjectId(this._id) },
            { $set: { cart: { items: [] } } }
          );
      });
  }

  getOrders() {
    const db = getDb();
    // nested properties -> 'prop1.prop2' = string
    return db
      .collection("orders")
      .find({ "user._id": new ObjectId(this._id) })
      .toArray();
  }

  static findById(id) {
    const db = getDb();
    // findOne = find + next
    return db
      .collection("users")
      .findOne({ _id: new ObjectId(id) })
      .then()
      .catch((err) => console.log(err));
  }
}

module.exports = User;
