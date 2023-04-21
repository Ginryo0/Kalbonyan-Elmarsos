// const ids = new Set([1, 2, 3]); // only option
// console.log(ids);
// console.log(ids.has(1)); // check if a value in a set
// ids.add(2); // will not added could it's already there
// ids[0]; // undefined
// if (ids.has(2)) {
//   ids.delete(2);
// }
// for (const entry of ids.entries()) {
//   // iterable of arrays -> has 2 element of same value -> easier to convert to a map
//   console.log(entry); // entry[0] -> value
// }

// for (const value of ids.values()) {
//   console.log(value);
// }

// /************ Maps ************/

// const person1 = { name: 'Max' };
// const person2 = { name: 'Meshmesh' };

// const personData = new Map([[person1, [{ date: 'yesterday', wage: 30 }]]]);
// personData.set(person2, [{ date: 'two weeks ago', wage: 50 }]);

// console.log(personData);
// console.log(personData.get(person1));
// console.log(personData.get(person2));

// for (const entry of personData.entries()) {
//   console.log(entry); // array of 2 -> 1- key , 2- array of values
// }

// for (const [key, value] of personData.entries()) {
//   console.log(key, value);
// }

// for (const key of personData.keys()) {
//   console.log(key);
// }

// for (const value of personData.values()) {
//   console.log(value);
// }

// // . clear -> clears all data
// // .delete -> deletes a single entry by key
// // forEach
// // has -> check
// // set -> set a value
// // size -> how many entries

// console.log(personData.size);

let person = { name: 'Max' };

const persons = new WeakSet(); // only with objects
persons.add(person);

// ... some operations

person = null; // garbage collected -> delted from the heap -> wil be deleted from the weakSet

console.log(persons);

const personData = new WeakMap(); // key has to be an object
personData.set(person, 'Extra info!');

person = null;

console.log(personData);
