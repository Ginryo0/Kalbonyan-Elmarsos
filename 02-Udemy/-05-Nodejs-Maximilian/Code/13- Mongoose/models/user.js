const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// cart -> has items -> type array [{item type}]
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  cart: {
    items: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: { type: Number, required: true },
      },
    ],
  },
});

// no arrow func -> to use this man
userSchema.methods.addToCart = function (product) {
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
      productId: product._id,
      quantity: newQty,
    });
  }
  const updatedCart = {
    items: updatedCartItems,
  };

  this.cart = updatedCart;
  return this.save();
};

userSchema.methods.removeFromCart = function (productId) {
  const updatedCartItems = this.cart.items.filter(
    (item) => item.productId.toString() !== productId.toString()
  );

  this.cart.items = updatedCartItems;
  return this.save();
};

userSchema.methods.clearCart = function () {
  this.cart = { items: [] };
  return this.save();
};

// User -> will be our mode/class we use here/ collection -> users
module.exports = mongoose.model("User", userSchema);
