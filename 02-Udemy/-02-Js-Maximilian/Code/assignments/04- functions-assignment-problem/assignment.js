const sayHello = (name) => console.log('Hi ' + name);

// 2-1
const sayHello1 = (name, phrase) => console.log(phrase + ' ' + name);

// 2-2
const sayHello2 = () => console.log('Hi -- meshmesh');
// 2-3

const sayHello4 = (name) => 'Hi ' + name;
// 3
const sayHello5 = (name, phrase = 'Yo') => console.log(phrase + ' ' + name);

sayHello('Meshmesh');
sayHello1('Meshmesh', 'Sup');
sayHello2();
console.log(sayHello4('Meshmesh'));
sayHello5('Meshmesh');
sayHello5('Meshmesh', 'Hey');

//4

function checkInput(cb, ...strings) {
  let hasEmptyText = false;
  for (const text of strings) {
    if (!text) {
      hasEmptyText = true;
      break;
    }
  }
  if (!hasEmptyText) {
    cb();
  }
}

checkInput(
  () => {
    console.log('All not empty!');
  },
  'Hello',
  '12',
  'adsfa',
  'Not empty'
);

// function error() {
//   console.log('You must enter non empty arguments');
// }
// const checkInput = (cb, ...strings) => {
//   let hasEmptyText = false;
//   for (const string of strings) {
//     if (!string) {
//       hasEmptyText = true;
//       break;
//     }
//     console.log(string);
//   }
//   if (hasEmptyText) {
//     cb();
//   }
// };

// checkInput(error, '', 'Mohamed');
