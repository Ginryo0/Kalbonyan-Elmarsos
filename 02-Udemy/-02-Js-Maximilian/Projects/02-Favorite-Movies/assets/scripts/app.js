// Selection *****
const addMovieModal = document.getElementById('add-modal'); // 1st element with that id
// const addMovieModal = document.body.children[1];

const startAddMovieBtn = document.querySelector('header button'); // tag Selector
// const startAddMovieBtn = document.querySelector('header').lastElementChild  -> worse because last child could change

const backdrop = document.getElementById('backdrop');
// const backdrop = document.querySelector('#backdrop');
// const backdrop = document.body.firstElementChild;
const cancelBtn = addMovieModal.querySelector('.btn--passive');
const addBtn = cancelBtn.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');
// const inputs = addMovieModal.getElementsByTagName('input');
const entryTextSection = document.getElementById('entry-text');
const deleteMovieModal = document.getElementById('delete-modal');
const movies = [];

// Functions ********

const toggleBackdrop = () => {
  backdrop.classList.toggle('visible'); // finxed 100% vh -> translucent black cover
};

const updateUI = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = 'block';
  } else {
    entryTextSection.style.display = 'none';
  }
};

const closeMovieDeletionModal = () => {
  toggleBackdrop();
  deleteMovieModal.classList.remove('visible');
};

const deleteMovieHandler = (movieId) => {
  let movieIndex = 0; // counter to get index
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1); // deletes items -> takes: index to start deleting, number of items to delete
  const listRoot = document.getElementById('movie-list'); // should have been global
  listRoot.children[movieIndex].remove();
  closeMovieDeletionModal();
  updateUI();
  // listRoot.removeChild(listRoot.children[movieIndex]);
};

const startDeleteMovieHandler = (movieId) => {
  deleteMovieModal.classList.add('visible'); // no need to toglle -> it's invis by default -> would be vis to be clicked once
  toggleBackdrop();
  const cancelDeletionBtn = deleteMovieModal.querySelector('.btn--passive');
  let confirmDeletionBtn = deleteMovieModal.querySelector('.btn--danger');

  confirmDeletionBtn.replaceWith(confirmDeletionBtn.cloneNode(true)); // the solution is to replace it each time with deep clone node
  confirmDeletionBtn = deleteMovieModal.querySelector('.btn--danger'); // getting access to the clone button
  // confirmDeletionBtn.removeEventListener(
  //   'click',
  //   deleteMovieHandler.bind(null, movieId)
  // ); // won't work because each time bind creates a new object
  cancelDeletionBtn.removeEventListener('click', closeMovieDeletionModal); // wokrs fine because no bind ->     deletes the existing event listner before adding a new one

  cancelDeletionBtn.addEventListener('click', closeMovieDeletionModal);
  confirmDeletionBtn.addEventListener(
    'click',
    deleteMovieHandler.bind(null, movieId) // bind creates new function object each time so removing eventListener won't work
  ); // don't forget to bind -> you don't want to directly call the function
};

const renderNewMovieElement = (id, title, imageUrl, rating) => {
  const newMovieElement = document.createElement('li');
  newMovieElement.className = 'movie-element';
  newMovieElement.innerHTML = `
  <div class="movie-element__image">
    <img src="${imageUrl} alt="${title}">
  </div>
  <div class="movie-element__info">
  <h2>${title}</h2>
  <p>${rating}/5 stars</p>
  </div>
  `;
  newMovieElement.addEventListener(
    'click',
    startDeleteMovieHandler.bind(null, id)
  ); // delete the item on clicking  -> when deleted the eventListener to it is automatically cleared from memory
  const listRoot = document.getElementById('movie-list');
  listRoot.append(newMovieElement);
};

// toggle -> separated into add and remove -> to be used by cancel confirmation -> CLICK BACK DROP ALWAYS REMOVES
const closeMovieModal = () => {
  // toggleBackdrop(); -> this would make it get toggeled twice
  addMovieModal.classList.remove('visible');
};

const showMovieModal = () => {
  toggleBackdrop();
  addMovieModal.classList.add('visible'); // animation CSS
};

const clearMovieInput = () => {
  for (const userInput of userInputs) {
    userInput.value = '';
  }
};

const cancelAddMovieHandler = () => {
  closeMovieModal();
  clearMovieInput();
  toggleBackdrop();
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  // trim -> removes excess white space {}
  if (
    titleValue.trim() === '' ||
    imageUrlValue.trim() === '' ||
    ratingValue.trim() === '' ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert('Please enter valid values(rating between 1 and 5)');
    return;
  }

  const newMovie = {
    id: Math.random().toString(), // not in real life situations -> could generate same number multiple times
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue,
  };
  movies.push(newMovie);
  console.log(movies);
  closeMovieModal();
  toggleBackdrop();
  clearMovieInput();
  renderNewMovieElement(
    newMovie.id,
    newMovie.title,
    newMovie.image,
    newMovie.rating
  );
  updateUI();
};

// handler for functions used with events only
const backdropClickHandler = () => {
  closeMovieModal();
  clearMovieInput();
  closeMovieDeletionModal();
};

// Events ********
startAddMovieBtn.addEventListener('click', showMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelBtn.addEventListener('click', cancelAddMovieHandler);
addBtn.addEventListener('click', addMovieHandler);
