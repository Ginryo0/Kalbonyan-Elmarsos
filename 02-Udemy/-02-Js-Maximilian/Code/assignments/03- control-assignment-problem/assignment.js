const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
const randN2 = Math.random();

if (randomNumber >= 0.7) {
  alert('Greater than 0.7');
} else {
  alert('Not greater!');
}

const array = [10, 20, 30];

for (const num of array) {
  console.log(num);
}

console.log('###');
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

console.log('###');
let counter = 0;
while (counter < array.length) {
  console.log(array[counter]);
  counter++;
}

// reversing
console.log('###');
for (let i = array.length; i >= 0; i--) {
  console.log(array[i]);
}

console.log(randomNumber, randN2);
if (
  (randomNumber > 0.7 && randN2 > 0.7) ||
  randomNumber <= 0.2 ||
  randN2 <= 0.2
) {
  alert('Greater than 0.7 or smaller than 0.2');
}
