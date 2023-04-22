const name = 'Meshmesh';
const age = 22;
const hasHobbies = true;

const summarizeUser = (uName, uAge, uHasHobbies) => {
  return (
    'Name is ' +
    uName +
    ', is ' +
    uAge +
    'and maybe he has hobbies: ' +
    uHasHobbies
  );
};

// const add = (a, b) => a + b;
const addOne = (a) => a + 1;
// const addN = () => 1 + 2;

console.log(addOne(2));
console.log(summarizeUser(name, age, hasHobbies));

/////
