const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');

const userId = 'u123';
const user = {
  name: 'Max',
  age: 21,
  hobbies: ['eating', 'living'],
}; // by default .toString -> [object object]

storeBtn.addEventListener('click', () => {
  sessionStorage.setItem('uid', userId);
  localStorage.setItem('user', JSON.stringify(user));
});

retrBtn.addEventListener('click', () => {
  const extractedId = sessionStorage.getItem('uid');
  const extracteduser = JSON.parse(localStorage.getItem('user'));
  console.log(extracteduser);
  if (extractedId) {
    console.log(`Got the id ${extractedId}`);
  } else {
    console.log("couldn't find the id");
  }
});
