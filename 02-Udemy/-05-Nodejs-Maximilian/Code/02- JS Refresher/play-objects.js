const person = {
  name: 'Meshmesh',
  age: 22,
  greet() {
    console.log('Hi, I am ' + this.name);
  },
};
// person.greet();

const printName = ({ name }) => {
  console.log(name);
};

printName(person);

const { name, age } = person;

// const copiedPerson = { ...person };
// console.log(copiedPerson);
const hobbies = ['Sports', 'Cooking'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);

// // for (let hobby of hobbies) {
// //   console.log(hobby);
// // }

// // console.log(
// //   hobbies.map((hobby) => {
// //     return 'Hobby: ' + hobby;
// //   })
// // );

// const copiedArray = [...hobbies];
// console.log(copiedArray);

// const toArray = (...args) => {
//   return args;
// };

// console.log(toArray(1, 2, 8, 12));
