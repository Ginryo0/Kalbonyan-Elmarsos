// 'use strict';
const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');
const movies = [];

const renderMovies = (filter = '') => {
  const movieList = document.getElementById('movie-list');

  if (movies.length === 0) {
    movieList.classList.remove('visible');
  } else {
    movieList.classList.add('visible');
  }

  const filteredMovies = !filter
    ? movies
    : movies.filter((movie) => {
        return movie.info.title.includes(filter);
      });

  movieList.innerHTML = '';
  filteredMovies.forEach((movie) => {
    const movieEl = document.createElement('li');
    if (!('info' in movie)) {
      // = movie.info === undefined
    }
    const { info, ...otherProps } = movie; // destructuring info key -> need to have an info key
    // movieEl.textContent = movie.info.title + ' - ' + movie.info[extraName];
    console.log(otherProps);
    // const { title: movieTitle } = info; // assign a new name to the property
    const { getFormattedTitle } = movie;
    // getFormattedTitle = getFormattedTitle.bind(movie); -> prepares a function for future execution -> returns a new function
    let text = getFormattedTitle.call(movie) + ' - '; // call -> execute a function with changing this - apply same -> difference in next arguments -> call takes comma separated - apply takes an array
    movieList.append(movieEl);
    for (const key in info) {
      if (key !== 'title' && key !== '_title') {
        text += `${key}: ${info[key]}`;
      }
    }
    movieEl.textContent = text;
  });
};
const addMovieHandler = () => {
  const title = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value;
  const extraValue = document.getElementById('extra-value').value;

  if (
    title.trim() == -'' ||
    extraName.trim() === '' ||
    extraValue.trim() === ''
  ) {
    return;
  }

  const newMovie = {
    info: {
      //title, // when key and variable containing value have same name
      set title(val) {
        // adding validation to the property value
        if (val.trim() === '') {
          this._title = 'DEFAULT';
        }
        this._title = val;
      },
      get title() {
        return this._title; // adding transformation -> .upperCase
      },
      [extraName]: extraValue,
    },
    id: Math.random().toString(),
    getFormattedTitle() {
      // getFormattedTitle: function ()
      // arrow -> this is window -> doesn't work
      return this.info.title.toUpperCase();
    },
  };

  newMovie.info.title = title;
  console.log(newMovie.info.title);
  movies.push(newMovie);
  renderMovies();
};

const searchMovieHandler = () => {
  console.log(this); // arrow functions -> do not know this -> global window
  const filterTerm = document.getElementById('filter-title').value;
  renderMovies(filterTerm);
};

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler); // this -> button

// spread operator -> copies object to another object

const person = { name: 'Max', hobbies: ['Sports', 'Cooking'] };
person.age = 30;
const person1 = { ...person };
person.age = 31;

const person2 = { ...person, age: 25, hobbies: [...person.hobbies] };

person.hobbies.pop();

console.log(person);
console.log(person1);
console.log(person2);

const person3 = Object.assign({}, person); // creates a copyof another object

// ------
const members = {
  teamName: 'Blue stuff',
  people: ['Max', 'Manuel'],
  getTeamMembers() {
    this.people.forEach((p) => {
      console.log(this); // this here is bound to nothing -> gets the object
      console.log(p + ' - ' + this.teamName);
    });
  },
};

//

const members2 = {
  teamName: 'Blue stuff',
  people: ['Max', 'Manuel'],
  getTeamMembers() {
    this.people.forEach(function (p) {
      console.log(this); // this here is called by forEach -> window
      console.log(p + ' - ' + this.teamName);
    });
  },
};

members2.getTeamMembers();
members.getTeamMembers();
