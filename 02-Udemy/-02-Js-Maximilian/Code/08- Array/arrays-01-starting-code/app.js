// // // const numbers = [1, 2, 3]; // better performance

// // // console.log(numbers);

// // // // const moreNumbers = new Array(5); // [] empty -> when using one number empty array with fixed length -> number
// // // // console.log(moreNumbers);

// // // // const yetMore = Array.of(1, 2);
// // // // console.log(yetMore)

// // // const stringArray = Array.from('hi!'); // takes an array or array-like-object(eg: string) to convert into array

// // // const listItems = document.querySelectorAll('li');
// // // const arrayListItems = Array.from(listItems);
// // // console.log(stringArray, arrayListItems);

// // // // const hobbies = ['cooking', 'reading'];
// // // const personalData = [30, 'meshmesh', { moreDetal: [] }]; // diferent types

// // // const analyticsData = [
// // //   [1, 1.6],
// // //   [-2, 3.4],
// // // ]; // nested - multi dimensionals

// // // for (const data of analyticsData) {
// // //   for (const dataPoint of data) {
// // //     console.log(dataPoint);
// // //   }
// // // }
// // // console.log(personalData[1]);

// // // ss
// // const hobbies = ['sports', 'reading'];
// // hobbies.push('eating'); // returns numbers = length of array - touches only last element of array
// // hobbies.unshift('coding'); // same - shifts to the right - affects all array -slower
// // const poppedValue = hobbies.pop(); // remove last - returns removed
// // const shifted = hobbies.shift(); // shift elements to the left ->
// // console.log(shifted, hobbies);

// // hobbies[1] = 'gaming';
// // hobbies[5] = 'reading'; // creates empty elements -> between in the unused indices
// // console.log(hobbies);

// // hobbies.splice(0, 0, 'stuff', 'smth'); // only on pure arrays - (start index, number of deleted items, ... items to add instead of deleted )
// // console.log(hobbies); // stuff -> 0, smth -> 1, sports -> 2

// // const removeElements = hobbies.splice(0, 1); // return removed element
// // console.log(removeElements, hobbies);

// // hobbies.splice(-1, 1); // deletes the last element -> negative index
// // console.log(hobbies);
// // hobbies.splice(0); // delete all items
// // console.log(hobbies);

// const testResults = [11, 5.3, 1.5, 10.99, 1.5, -25];
// // const storedResults = testResults; // same object -> same reference
// // const storedResults = testResults.slice(0, 2); // from [0, 2[ -> don't include 2
// // const storedResults = testResults.slice(-3, -1); // from [-3, -1[ -> both negative
// // const storedResults = testResults.slice(2) // from 2 to end
// console.log(testResults.includes(10.99));
// console.log(testResults.includes(120312));
// const storedResults = testResults.concat([3.99, 2], [1.52, 0]); // concats arrays together - returns a copy of new array
// testResults.push(5.91);
// console.log(storedResults, testResults); // copy of array = object -> different refernce
// console.log(testResults.indexOf(1.5)); // returns the index of first item from start
// console.log(testResults.lastIndexOf(1.5)); // from end

// const personalData = [{ name: 'Max' }, { name: 'Manuel' }];
// console.log(personalData.indexOf({ name: 'Manuel' })); // returns -1 = fail -> objects are refernce values in memory

// const manuel = personalData.find((person, index, persons) => {
//   return person.name === 'Manuel';
// });

// manuel.name = 'Anna'; // find doesn't create a copy -> same refernce
// console.log(manuel);

// const maxIndex = personalData.findIndex((person, index, persons) => {
//   return person.name === 'Max';
// });

// console.log(maxIndex);

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;
// const taxAdjustedPrices = [];

// // for (const price of prices) {
// //   taxAdjustedPrices.push(price * (1 + tax));
// // }

// // forEach -> better to get access to index
// prices.forEach((price, idx, prices) => {
//   const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
//   taxAdjustedPrices.push(priceObj);
// });

// console.log(taxAdjustedPrices);
// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;

// // map -> apllied a function on each element -> return that element -> the whole map has to be stored in a var
// const taxAdjustedPrices = prices.map((price, idx, prices) => {
//   const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
//   return priceObj;
// });

// // console.log(taxAdjustedPrices);

// prices.sort(); // prices itself is sorted
// console.log(prices);

// const sortedPrices = prices.sort(); // def -> converts items to strings then compare first element -> "10.399" < "3.00" -> because "1" < "3"
// // sorts array in place -> returns a reference to the same array sorted
// const sortedPrices2 = prices.sort((a, b) => {
//   // takes a function that compares 2 numbers -> executes the function on pairs -> check for equality -> swap
//   if (a > b) {
//     return 1; // > 0 -> a after b
//   } else if (a === b) {
//     return 0; // 0 -> keep order
//   } else {
//     return -1; // <0 -> a before b
//   }
// });
// console.log(sortedPrices2);
// console.log(sortedPrices2.reverse()); // reverse order

// // returns a new array -> not in place
// const filteredArray = prices.filter((price, index, prices) => {
//   return price > 6;
// });

// // arrow superioritiy -> drop what you don't need
// const filteredArray2 = prices.filter((p) => p > 6); // same as above

// console.log(filteredArray2);

// // reduce

// // let sum = 0;

// // prices.forEach((p) => (sum += p));
// // console.log(sum);

// const sum = prices.reduce(
//   (prevValue, currValue, curIndex, prices) => prevValue + currValue,
//   0
// ); // reduces an array to a simpler value -> single number or a string

// // reduce( function, prevValue) -> if prevValue not set = undefined -> currValue = arrayElements

// const data = 'newyork;10.99;2000';

// const transformedData = data.split(';', 1); // on strings
// transformedData[1] = +transformedData[1]; // make it a number
// // returns an array of splited elements -> take 2nd argument to limit number or resulted elements
// console.log(transformedData);
// const nameFragments = ['max', 'shwartz'];
// const name = nameFragments.join(' '); // returns a string, takes a separator
// console.log(name);

// // spread opr

// const copiedNameFragments = [...nameFragments]; // copy an array -> copy each element individualized
// nameFragments.push('Mr'); // only to original
// console.log(nameFragments, copiedNameFragments);

// console.log(Math.min(...prices)); //min takes number values not array -> spread gets numbers out of the array;

// const persons = [
//   { name: 'max', age: 30 },
//   { name: 'potaot', age: 31 },
// ];

// const copiedPersons = [...persons];

// // to make a separate copies of each object -> you have to create a new array with map
// const copiedPersons2 = [
//   ...persons.map((person) => ({ name: person.name, age: person.age })),
// ]; // ({}) parenthesis to contain object

// persons.push({ name: 'anna', age: 29 });

// persons[0].age = 31; // changed in both -> copying object is copying address
// console.log(persons, copiedPersons);

// console.log(copiedPersons2);

const nameData = ['Max', 'Shwartz', 'Mr', 30];

const [firstName, lastName, ...otherInformation] = nameData;
console.log(firstName, lastName, otherInformation);

// Maps & sets
