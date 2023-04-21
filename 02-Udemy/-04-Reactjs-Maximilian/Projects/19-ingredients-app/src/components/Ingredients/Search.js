import React, { useEffect, useState, useRef } from 'react';

import Card from '../UI/Card';
import useHttp from '../hooks/http';
import ErrorModal from '../UI/ErrorModal';
import './Search.css';

const Search = React.memo((props) => {
  const { onLoadIngrediets } = props;
  const [enteredFilter, setEnteredFilter] = useState('');
  const { isLoading, data, error, sendRequest, clear } = useHttp();
  const inputRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (enteredFilter === inputRef.current.value) {
        const query =
          enteredFilter.length === 0
            ? ''
            : `?orderBy="title"&equalTo="${enteredFilter}"`;

        sendRequest(
          'https://react-dummy-proj-default-rtdb.europe-west1.firebasedatabase.app/ingerdients.json' +
            query
        );
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [sendRequest, enteredFilter, inputRef]);

  useEffect(() => {
    if (!isLoading && !error && data) {
      const loadedIngreds = [];
      for (const key in data) {
        loadedIngreds.push({
          id: key,
          title: data[key].title,
          amount: data[key].amount,
        });
      }
      onLoadIngrediets(loadedIngreds);
    }
  }, [data, isLoading, error, onLoadIngrediets]);

  return (
    <section className="search">
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          {isLoading && <p>Loading ...!!@</p>}
          <input
            type="text"
            value={enteredFilter}
            onChange={(ev) => setEnteredFilter(ev.target.value)}
            ref={inputRef}
          />
        </div>
      </Card>
    </section>
  );
});

export default Search;
