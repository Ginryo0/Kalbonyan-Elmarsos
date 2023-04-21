const h1 = document.querySelector('h1');

h1.textContent = 'some new text';
h1.className = 'heading';
h1.style.color = 'white';
h1.style.backgroundColor = 'blue';

// const listItemsEls = document.querySelectorAll('li'); snapshot
const listItemsEls = document.getElementsByTagName('li'); // live version
for (const listItemEl of listItemsEls) {
  console.dir(listItemEl);
}

const li = document.querySelector('li:last-of-type');
li.textContent += '(Selected!)';

const body = document.body;
const ulEl = body.querySelector('ul');

// Traversing

const ul = document.querySelector('ul');
const liEl = ul.children[1];
liEl.textContent = 'Selected 2';

console.dir(ul.childNodes); // list of elements + text including white spaces before elements

ul.firstChild; // firt node -> txt
ul.lastElementChild; // last element node

console.dir(li.parentNode);
console.dir(li.parentElement);
console.dir(li.closest('body'));

console.dir(li.previousSibling);
console.dir(li.previousElementSibling);
console.dir(ul.nextElementSibling);
console.dir(ul.nextSibling);

const ul2 =
  document.body.firstElementChild.nextElementSibling.firstElementChild;
const li1 = ul2.firstElementChild;
console.log(li1);

const section = document.querySelector('section');
const button = document.querySelector('button');
// section.style.backgroudColor = 'green'; -> inline -> highest priority
section.className = ''; // clearing

button.addEventListener('click', () => {
  // if (section.className === 'red-bg visible') {
  //   section.className = 'red-bg invisible';
  // } else {
  //   section.className = 'red-bg visible';
  // }
  // section.classList.toggle('visible');
  section.classList.toggle('invisible');
});

ul2.innerHTML += '<li> item4 </li>';
const div = document.querySelector('div');
div.insertAdjacentHTML('beforeend', '<p>Something went wrong </p>');

const newLi = document.createElement('li');
ul.appendChild(newLi);
newLi.textContent = 'item 5';

const newLi2 = document.createElement('li');
newLi2.textContent = 'first item';
ul.prepend(newLi2);
const newLi3 = newLi2.cloneNode(true);
const newLi4 = newLi2.cloneNode(false); // doesn't inherit
ul.prepend(newLi4, newLi3);

// before after replaceWith -> strings or elements
// inserAdjacentElement
// window -> the currently loaded tab + the dimensions
// alert();
// window.alert(); // the browser automatically adds window. -> if the function is not found anywhere else
// console.dir(window.document);

// const h1 = document.getElementById('main-title');
// h1.querySelector();
// document.getElementsByClassName('list-item');
// document.querySelectorAll('.list-item');
// document.querySelector('ul li:last-of-type');
// const ul = document.querySelector('ul');
// ul.querySelector('li');

// const input = document.querySelector('input');
// input.value = 'Something'; // doesn't change in html

// input.id = 'new-id';

// input.setAttribute('value', 'Attribute HTML only changed');
// input.value = input.getAttribute('value'); // changes actual text in page;
