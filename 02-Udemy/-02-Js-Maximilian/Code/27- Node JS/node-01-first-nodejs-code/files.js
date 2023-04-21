const fs = require('fs'); // adding it to file already installed into node

fs.writeFile('user-data.txt', 'username=Ahmed', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Wrote to file!');
  }
});

fs.readFile('user-data.txt', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data.toString());
});

// const userName = 'Meshmseh';

// console.log(`Hi ${userName}!`);

// console.log('Hello world!');
// document.querySelector('button')
