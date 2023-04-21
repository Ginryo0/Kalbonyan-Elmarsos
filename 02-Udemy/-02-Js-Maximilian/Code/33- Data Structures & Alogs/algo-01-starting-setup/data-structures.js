const age = [30, 29, 54];

// [30, 29, 54] => [30, 29, 54, _]
// [0, 1, 2] => [0, 1, 2, 3]
age.push(60); // => Constant -> O(1) - touches only added element
// [30, 29, 54] => [_, 30, 29, 54]
// [0, 1, 2] => [0, 1, 2, 3]
age.unshift(10); // -> Linear -> O(n) - touches all elements

const myAge = age[1]; // constant -> touches only target

// --

const namePopularity = [
  { userName: 'max', usages: 5 },
  { userName: 'manu', usages: 6 },
];

const manuUsages = namePopularity.find(
  (pers) => pers.userName === 'manu'
).usages;
// Best -> constant -> O(1) - manu is first
// WORST -> Linear -> O(n)
// AVG -> Linear -> O(n)

const nameMap = {
  max: 5,
  manu: 6,
};
const manuUsages2 = nameMap['manu']; // constant -> O(1)

// const nameRealMap = new Map();
