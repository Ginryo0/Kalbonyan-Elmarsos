const uid = Symbol('uid'); // not with new - no need to add identifier -> 'uid'

const user = {
  // id: 'p1',
  [uid]: 'p`',
  age: 32,
  name: 'btats',
  [Symbol.toStringTag]: 'User', // built in symbol
};

user.id = 'p2'; // this should be prevented

console.log(user[Symbol('uid')]); // not accessible

console.log(Symbol('uid') === Symbol('uid')); // false

console.log(user.toString()); // def [obj obj] - after symbol -> [obj user]

// --- iterators
const company = {
  //currEmployee: 0,
  employees: ['Max', 'Meshmesh', 'Btats'],
  // next() {
  //   if (this.currEmployee >= this.employees.length) {
  //     return { value: this.currEmployee, done: true };
  //   }
  //   const returnValue = {
  //     value: this.employees[this.currEmployee],
  //     done: false,
  //   };
  //   this.currEmployee++;
  //   return returnValue;
  // },
  [Symbol.iterator]: function* employeegenerator() {
    //  use generator to automatically gen
    // let employee = company.next();

    // while (!employee.done) {
    //   yield employee.value;
    //   emploeyee = company.next();
    // }
    let currEmployee = 0;
    while (currEmployee < this.employees.length) {
      yield this.employees[currEmployee];
      currEmployee++;
    }
  },
};

// let employee = company.next();

// while (!employee.done) {
//   console.log(employee.value);
//   employee = company.next();
// }

for (const employee of company) {
  console.log(employee);
}

console.log([...company]);

// --- Reflect API

const course = {
  title: 'Js - Course',
};

Reflect.setPrototypeOf(course, {
  toString() {
    return this.title;
  },
});

console.log(course.toString());
Reflect.deleteProperty(course, 'title'); // delete course.title

console.log(course);

// --- ProxyAPI

const course1 = { title: 'Js - Course' };

const courseHandler = {
  get(obj, propertyName) {
    // console.log(propertyName);
    if (propertyName === 'length') {
      return 0;
    }
    return obj[propertyName] || 'notFound'; // overrides geting value of a property
  },
  set(obj, propertyName, newValue) {
    // blocking access to setters .. etc
    console.log('Sending data ...');
    if (propertyName === 'price') {
      return; // don't allow it
    }
    obj[propertyName] = newValue;
  },
};

const pCourse = new Proxy(course1, courseHandler); // wrapping - disguise

pCourse.price = 10;
console.log(pCourse.title);
console.log(pCourse.price);
console.log(pCourse.length);

console.log(course1, pCourse); // unchanged
