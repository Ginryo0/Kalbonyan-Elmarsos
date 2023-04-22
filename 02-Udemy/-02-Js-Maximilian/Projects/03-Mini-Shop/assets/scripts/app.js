class Product {
  // starts with cap
  // title = 'DEFAULT'; // field -> property for a class
  // imageUrl;
  // description;
  // price;

  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

class ElementAttribute {
  // creating HTML attributes
  constructor(attrName, attrValue) {
    this.name = attrName;
    this.value = attrValue;
  }
}

class Component {
  // THIS WOULD BE CALLED IF SUB CLASS HAVE NO CONSTRUCTOR
  constructor(renderHookId, shouldRender = true) {
    this.hookId = renderHookId;
    if (shouldRender) {
      this.render();
    }
  }

  createRootElement(tag, cssClasses, attributes) {
    const rootElement = document.createElement(tag);
    if (cssClasses) {
      rootElement.className = cssClasses;
    }
    if (attributes && attributes.length > 0) {
      for (const attr of attributes) {
        rootElement.setAttribute(attr.name, attr.value);
      }
    }
    document.getElementById(this.hookId).append(rootElement);
    return rootElement;
  }
}

class ShoppingCart extends Component {
  items = [];

  set cartItems(value) {
    this.items = value; // updating the object property
    this.totalOutPut.innerHTML = `<h2>Total: \$ ${this.totalAmount.toFixed(
      2
    )}</h2>`;
  }

  get totalAmount() {
    const sum = this.items.reduce((prev, curr) => prev + curr.price, 0);
    return sum;
  }

  addProduct(product) {
    const updatedItems = [...this.items]; // creating a copy of items
    updatedItems.push(product); // updating the copy
    this.cartItems = updatedItems; // triggering setter -> giving the updated copy
  }

  render() {
    const cartEl = this.createRootElement('section', 'cart');
    cartEl.innerHTML = `
    <h2>Total: \$ ${0}</h2>
    <button>Order Now!</button>
    `;
    const orderBtn = cartEl.querySelector('button');
    // orderBtn.addEventListener('click', () => this.orderProducts());
    orderBtn.addEventListener('click', this.orderProducts);
    this.totalOutPut = cartEl.querySelector('h2');
  }

  constructor(renderHookId) {
    super(renderHookId, false); // call parent constructor
    this.orderProducts = () => {
      // has to be set here -> to ensure it's defined before render is called (eventListener is set)
      //using arrow here -> so this refers to object
      console.log('Ordering...');
      console.log(this.items);
    };
    this.render();
  }
}

class ProductItem extends Component {
  constructor(product, renderHookId) {
    super(renderHookId, false); // super must be called before any this. assign
    this.product = product;
    this.render(); // rendering manually after data getting loaded
  }

  addTocart() {
    App.addProductToCart(this.product);
  }

  render() {
    const prodEl = this.createRootElement('li', 'product-item');
    prodEl.innerHTML = `
    <div>
      <img src="${this.product.imageUrl}" alt="${this.product.title}" >
      <div class="product-item__content">
        <h2>${this.product.title}</h2>
        <h3>\$${this.product.price}</h2>
        <p>${this.product.description}</p>
        <button>Add to Cart </button>
      </div>
    </div>
    `;
    const addCartBtn = prodEl.querySelector('button');
    addCartBtn.addEventListener('click', this.addTocart.bind(this));
  }
}

class ProductList extends Component {
  // CONVERTED TO this.products -> and will be got after super call
  // then .render() will be called before them getting assigned
  #products = []; // private property

  constructor(renderHookId) {
    super(renderHookId, false); // set to false -> because products is a private property -> render has to be called by this class directly
    this.render();
    this.fetchProducts();
  }

  fetchProducts() {
    this.#products = [
      new Product(
        'A pillow',
        'https://contents.mediadecathlon.com/p1749048/k$f0b275c3207e208e12771a5c385d3ff8/-.jpg?format=auto&quality=40&f=452x452',
        'soft pillow',
        19.99
      ),
      new Product(
        'A carpet',
        'https://images.yaoota.com/5sbwOB9V0xPk8bNW9bTX87YJ82s=/trim/fit-in/500x500/filters:quality(80)/yaootaweb-production/media/crawledproductimages/98fea77736dca01d90aef81032c4f9505e3937c9.jpg',
        'good carpet',
        89.99
      ),
    ];
    this.renderProducts();
  }
  renderProducts() {
    for (const prod of this.#products) {
      new ProductItem(prod, 'product-list');
    }
  }

  render() {
    this.createRootElement('ul', 'product-list', [
      new ElementAttribute('id', 'product-list'),
    ]);
    if (this.#products && this.#products.length > 0) {
      this.renderProducts();
    }
  }
}

class Shop extends Component {
  constructor() {
    super();
  }

  render() {
    this.shoppingCart = new ShoppingCart('app'); // forward 'app' // making it a property of shop
    // this.shoppingCart.render(); // it'll be appended by component
    new ProductList('app');
    // productList.render();

    // renderHook.append(shopCartEl);
    // renderHook.append(prodListEl);
  }
}

// who calls who
class App {
  static cart;
  static init() {
    const shop = new Shop();
    // const { shoppingCart } = shop;
    // shop.render();
    this.cart = shop.shoppingCart;
  }

  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

App.init();

// console

class Person {
  name = 'Max';
}

const p = new Person();
typeof p; // object
p instanceof Person; // true

btn = document.querySelector('button');
btn instanceof HTMLButtonElement;
btn instanceof HTMLElement;

const obj = new Object();
const obj2 = {};

const person = {
  name: 'Max',
  greet() {
    console.log(this.name);
  },
};

Object.getOwnPropertyDescriptors(person); // get person property properties
Object.defineProperty(person, 'name', {
  configurable: true, // false -> make undeleted + properties unchanged
  enumerable: true, // false -> skipped in for in loop
  value: this.name,
  writable: false, // make it unwritable -> any changes to name won't be applied
});
