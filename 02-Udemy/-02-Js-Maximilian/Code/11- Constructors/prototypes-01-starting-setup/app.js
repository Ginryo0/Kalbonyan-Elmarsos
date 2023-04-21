// class AgedPerson {
//   printAge() {
//     console.log(this.age);
//   }
// }

// class Person extends AgedPerson {
//   // class-> syntactical sugar (easier ver) of constructor function
//   name = 'Max';

//   constructor() {
//     super();
//     this.age = 30;
//     // this.greet = function () { ... } -> added to each instance
//   }

//   greet() {
//     // here It's added to the prototype -> same as Person.prototype.greet = function () {} for const function
//     console.log(
//       'Hi, I am' + this.name + ' and I am' + this.age + ' years old.'
//     );

//     // greet () => { ... this.name} -> better to get this to refer to instance
//   }
// }

function Person() {
  // this = {}; //new -> creates empty object sets this to the object
  this.age = 30;
  this.name = 'Max';
  this.greet = function () {
    // created for each instance
    console.log(
      'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.'
    );
  };
}

Person.describe = function () {
  console.log('Creating persons...'); // the instance of Person Won't have describe method defined -> not in constructor
};

// Person.prototype = {  // -> changes prototype
//   printAge() {
//     console.log(this.age);
//   },
// };

// Person.prototype.printAge = function () {
//   //-> adding method to prototype
//   console.log(this.age);
// };

console.dir(Person);

// const person = new Person(); // new -> returen object
// person.greet();
// console.log(person.toString()); // works -> toString from Object prototype
// console.log(person.__proto__.toString()); // this is what happens
// console.log(person.__proto__ === Person.prototype); // this is what happens
// person.printAge();
// const p2 = new person.__proto__.constructor(); // when you don't have access to the prototype
// console.log(p2);
// console.dir(Object.prototype); // true granddaddy -> the fall back objects of all objects not Object itself -> therefore you can't use all methods of Object

// const p = new Person();
// const p2 = new Person();
// p.greet();
// console.log(p);

// const btn = document.getElementById('btn');
// btn.addEventListener('click', p.greet.bind(p));

// Setting Prototype

const course = {
  // new Object()
  title: ' JS - Guide',
  rating: 5,
};

console.log({ ...Object.getPrototypeOf(course) });
Object.setPrototypeOf(course, {
  ...Object.getPrototypeOfof(course), // get properties of old prototype and spread them
  printRating: function () {
    console.log(`${this.rating}/5`);
  },
});

const student = Object.create(
  {
    printProg: function () {
      console.log(this.progress);
    },
  },
  {
    // defining properties
    name: {
      configurable: true,
      enumerable: true,
      value: 'Max',
      writable: true,
    },
  }
); // create -> parameter -> proto

// student.name = 'Max';

Object.defineProperty(student, 'progress', {
  configurable: true,
  enumerable: true,
  value: 0.8,
  writable: false,
});

student.printProg();
console.log(student.name);
course.printRating();
