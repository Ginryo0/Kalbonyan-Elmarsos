const task3Element = document.getElementById('task-3');

function greet() {
  alert('Hi there!');
}

function greetUser(userName) {
  alert('Hi ' + userName);
}

function combine(str1, str2, str3) {
  const combinedText = str1 + str2 + str3;
  return combinedText;
}

greetUser('Meshmesh');

task3Element.addEventListener('click', greet);

const combinedString = combine('Potata', 'is', 'Good');
alert(combinedString);


// MY SOLUTION
// function randAlert() {
//   alert('Supp bud');
// }

// function hello(name) {
//   alert(`hello, ${name}`);
// }

// randAlert();
// hello('meshmesh');

// task3Element.addEventListener('click', randAlert);

// function conc(str1, str2, str3) {
//   return str1 + str2 + str3;
// }

// alert(conc('Potata', 'is', 'Good'));
