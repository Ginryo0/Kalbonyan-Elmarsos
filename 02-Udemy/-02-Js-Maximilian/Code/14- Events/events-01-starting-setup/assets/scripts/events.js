const button = document.querySelector('button');

const btnClickHandler = (event) => {
  // event.target.disabled = true; // -> disable button
  console.log(event);
};

// buttons.forEach((btn) => {
//   btn.addEventListener('mouseenter', btnClickHandler); // mouseenter -> hover on button
// });

const form = document.querySelector('form');

form.addEventListener('submit', (ev) => {
  event.preventDefault();
  console.log(ev);
});

const div = document.querySelector('div');

div.addEventListener('mouseenter', (ev) => {
  console.log('clicked DIV');
  console.log(ev);
}); // ,true -> capture

button.addEventListener('click', function (ev) {
  ev.stopPropagation();
  // ev.stopImmediatePropagation(); // stopping multiple events on same element
  console.log('clicked BTN');
  console.log(ev);
  console.log(this);
});

const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');

// listItems.forEach((listItem) => {
//   listItem.addEventListener('click', (ev) => {
//     ev.target.classList.toggle('highlight');
//   });
// });

list.addEventListener('click', function (ev) {
  // event delegation -> propagates
  // ev.currentTarget // ul -> the one with event listener
  // ev.target.classList.toggle('highlight');
  ev.target.closest('li').classList.toggle('highlight'); // always -> closest LI
  // form.submit(); // triggering submit event on form
  button.click();
  console.log(this); // -> current Target of event listener
});

//
//
//
// let curElementNumber = 0;

// function scrollHandler() {
//   const distanceToBottom = document.body.getBoundingClientRect().bottom;

//   if (distanceToBottom < document.documentElement.clientHeight + 150) {
//     const newDataElement = document.createElement('div');
//     curElementNumber++;
//     newDataElement.innerHTML = `<p>Element ${curElementNumber}</p>`;
//     document.body.append(newDataElement);
//   }
// }

// window.addEventListener('scroll', scrollHandler);
// window.addEventListener('scroll', (ev) => console.log(ev));

// const anotherBtnClickHanlder = () => {
//   alert('this was clicked!');
// };

// button.onclick = btnClickHandler;
// button.onclick = anotherBtnClickHanlder; // this overrides the old one

const boundFn = btnClickHandler.bind(this); // you need to store the bound function ->  so you could refer to it again

// button.addEventListener('dblclick', btnClickHandler); // -> can register multiple listneres
// setTimeout(() => {
//   button.removeEventListener('dblclick', btnClickHandler); // could remove them
// }, 2000);

// button.addEventListener('dblclick', () => {
//   console.log('clicked!');
// }); // -> this creates different function object

// setTimeout(() => {
//   button.removeEventListener('dblclick', () => {
//     console.log('clicked!'); // you can't remove it then
//   });
// }, 2000);
