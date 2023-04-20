import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await fetch("https://swapi.dev/api/films/");
      if (!res.ok) {
        throw new Error("something went wrong!");
      }
      const data = await res.json();

      const formattedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      setMovies(formattedMovies);
    } catch (err) {
      setError(err.message);
    }

    setIsLoading(false);
  }, []); // no external deps -> fetch built-in JS

  // will call it once -> unless fetchMovies changed -> won't change in this case but just yk
  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  // 1st -> no movies
  let content = <p>No movies were found</p>;

  // 2nd -> has movies -> both false
  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  // 3rd -> error -> response error
  if (error) {
    content = <p>{error}</p>;
  }

  // 4th- > loading -> overrides all other states
  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
