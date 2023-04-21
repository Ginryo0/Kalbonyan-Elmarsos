const movieList = document.getElementById('movie-list');

movieList.style['background-color'] = 'red'; // = [backgroundColor]
movieList.style.display = 'block';

const userChosenKeyName = 'level'; // dynamically set a key value

const person = {
  'first-name': 'Meshmesh',
  age: 30,
  hobbies: ['coding', 'eating', 'gaming'],
  [userChosenKeyName]: '...',
  greet: function () {
    alert('Hi there!');
  },
  1.5: 'hello', // must be 0+ number
};

// adding new key values
person.isAdmin = true;
person.age = 31;
delete person.age; // delete key value
// person.age = null // you should use null manually instead of undefined -> null =reset , -> undefined -> it doesn't matter any more

// keys -> could be a string  or a variable name -> coerced to a string

console.log(person['first-name']);
console.log(person['hobbies']);
console.log(person[1.5]); // = ['1.5']
// objects -> keys are only nums -> ordered ascendingly by key num

const keyName = 'first-name';
console.log(person[keyName]); // search by the value of a variable
