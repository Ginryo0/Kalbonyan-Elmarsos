const fs = require("fs");
const path = require("path");

const p = path.join(path.dirname(require.main.filename), "data", "cart.json");

class Cart {
  static addProduct(id, prodPrice) {
    // Fetch prev cart
    fs.readFile(p, (err, content) => {
      let cart = { products: [], totalPrice: 0 };
      if (!err) {
        cart = JSON.parse(content);
      }
      // Analyze Cart
      const existingProdIdx = cart.products.findIndex((prod) => id === prod.id);
      const existingProd = cart.products[existingProdIdx];
      let updatedProd;
      if (existingProd) {
        updatedProd = { ...existingProd };
        updatedProd.qty += 1;
        cart.products = [...cart.products];
        cart.products[existingProdIdx] = updatedProd;
      } else {
        updatedProd = { id: id, qty: 1 };
        cart.products = [...cart.products, updatedProd];
      }
      cart.totalPrice = cart.totalPrice + +prodPrice;
      // Write new cart
      fs.writeFile(p, JSON.stringify(cart), (err) => {
        console.log(err);
      });
    });
  }

  static deleteProduct(id, productPrice) {
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        return;
      }

      const updatedCart = { ...JSON.parse(fileContent) };
      const product = updatedCart.products.find((prod) => id === prod.id);

      if (!product) {
        return;
      }

      const productQty = product.qty;
      updatedCart.products = updatedCart.products.filter(
        (prod) => prod.id !== id
      );
      updatedCart.totalPrice -= productQty * productPrice;

      fs.writeFile(p, JSON.stringify(updatedCart), (err) => {
        console.log(err);
      });
    });
  }

  static getCart(cb) {
    fs.readFile(p, (err, fileContent) => {
      const cart = JSON.parse(fileContent);
      if (err) {
        cb(null);
      } else {
        cb(cart);
      }
    });
  }
}

module.exports = Cart;
