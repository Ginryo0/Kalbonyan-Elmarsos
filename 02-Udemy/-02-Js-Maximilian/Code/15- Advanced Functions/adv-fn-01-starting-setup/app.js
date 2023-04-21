function add(num1, num2) {
  return num1 + num2;
}

// function sendDataToServer() {} -> expected to be impure

console.log(add(1, 5));
console.log(add(12, 15));

function addRandom(num1) {
  return num1 + Math.random();
}

console.log(addRandom(5));

let previousResult = 0;

function addMoreNumbers(num1, num2) {
  const sum = num1 + num2;
  previousResult = sum;
  return sum;
}

console.log(addMoreNumbers(1, 5));

const hobbies = ['Sports', 'Cooking'];

function printHobbies(h) {
  h.push('NEW HOBBY');
  console.log(h);
}

printHobbies(hobbies);

let multiplier = 1.1;

function createTaxCalculator(tax) {
  // even if multiplier is reffered here
  function calculateTax(amount) {
    console.log(multiplier); // updated on execution
    return amount * tax * multiplier; // tax loged in on creation
  }
  return calculateTax;
}

const calculateVatAmount = createTaxCalculator(0.14);
const calculateIncomeTaxAmount = createTaxCalculator(0.2);

multiplier = 1.2;

console.log(calculateVatAmount(100));
console.log(calculateVatAmount(200));
console.log(calculateIncomeTaxAmount(100));

let userName = 'Max';

function greetUser() {
  // let name = 'Meshmesh';
  console.log('Hi', name); // no name in local env -> look in global
}

userName = 'Manuel';

let name = 'meesho';
greetUser();

// function powerOf(x, n) {
//   let result = 1;
//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }

//   return result;
// }

function powerOf(x, n) {
  // if (n === 1) {
  //   return x;
  // }
  // return x * powerOf(x, n - 1);
  return n === 1 ? x : x * powerOf(x, n - 1);
}

const myself = {
  name: 'Max',
  friends: [
    {
      name: 'Manuel',
      friends: [
        {
          name: 'Chris',
          friends: [
            {
              name: 'PTATS',
            },
            {
              name: 'Medhat',
            },
          ],
        },
      ],
    },
    {
      name: 'Teeto',
    },
  ],
};

function printFriendNames(person) {
  const collectedNames = [];
  if (!person.friends) {
    return []; // empty array
  }
  for (const friend of person.friends) {
    collectedNames.push(friend.name);
    collectedNames.push(...printFriendNames(friend));
  }
  return collectedNames;
}

console.log(printFriendNames(myself));

function printName(person) {
  if (person.friends) {
    for (frnd of person.friends) {
      printName(frnd);
    }
  }
  console.log(person.name);
}

printName(myself);
console.log(powerOf(2, 3));
