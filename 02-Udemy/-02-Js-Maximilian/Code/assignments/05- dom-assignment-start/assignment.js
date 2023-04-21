const task1El1 = document.querySelector('#task-1'); // ul li:last-of-type
const task1El2 = document.getElementById('task-1');

task1El1.style.backgroundColor = 'black';
task1El2.style.color = 'white';

const docTitle1 = document.querySelector('title');
docTitle1.textContent = 'Assignment - Solved!';

const docTitle2 = document.head.querySelector('title');
docTitle2.textContent = 'Assignment - Solved!';

const h1 = document.getElementsByTagName('h1'); // returns a list
h1[0].textContent = 'Assignment - Solved!';

// Mine
// const liEl = document.querySelector('#task-1');
// liEl.style.backgroundColor = 'black';
// const liEl1 = document.getElementById('task-1');
// liEl1.style.color = 'white';

// // const head = document.head;
// // head.querySelector('title').textContent = 'Assignment - Solved!';

// document.querySelector('title').textContent = 'Assignment - Solved!';

// document.querySelector('h1').textContent = 'Assignment - Solved!';
