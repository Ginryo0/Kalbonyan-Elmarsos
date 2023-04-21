function randomIntBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min); // between min and max including both
}
console.log(randomIntBetween(1, 10));

function productDescription(strings, productName, productPrice) {
  console.log(strings);
  console.log(productName);
  console.log(productPrice);
  let priceCat = 'pretty cheap';
  if (productPrice > 20) {
    priceCat = 'fairly priced';
  }
  // return `${strings[0]}${productName}${strings[1]}${priceCat}${strings[2]}`;
  return { name: productName, price: productPrice, value: priceCat };
}
const prodName = 'JS COURSE';
const prodPrice = 19.99;
console.log(productDescription`this product (${prodName}) is (${prodPrice}).`);

const regex = /^\S+@\S+\.\S+$/;
console.log(regex.test('potato.com'));
console.log(regex.test('potato@yah.com'));

const regex2 = /hello/;

regex2.test('hi there, hello'); // = true = includes - case sensetive

const regex3 = /(h|H)ello/;
regex3.test('Hello');
regex3.test('hello');

const regex4 = /.ello/; // . -> any
regex4.test('ello'); // -> false
regex4.test('Aello'); // -> true

const n = Number.MAX_SAFE_INTEGER;
console.log(n);
const neg = Number.MIN_SAFE_INTEGER;
console.log(neg);
const f = Number.MAX_VALUE;
console.log(f);

n1 = Math.pow(2, 53) - 1; // you can't calculate more
console.log(n1);

console.log(0.2 + 0.4 === 0.6);
console.log(2 / 5);
console.log((1 / 5).toString(2)); // binary
console.log((0.2).toString(2)); // binary
console.log((0.2).toFixed(20)); // might exceed memory
console.log((20.2).toFixed(20)); // might exceed memory
