import React, { useReducer, useCallback, useMemo, useEffect } from 'react';
import useHttp from '../hooks/http';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import ErrorModal from '../UI/ErrorModal';
import Search from './Search';

const ingredientReducer = (currentIngrediets, action) => {
  switch (action.type) {
    case 'SET':
      return action.ingredients;
    case 'ADD':
      return [...currentIngrediets, action.ingredient];
    case 'DELETE':
      return currentIngrediets.filter((ing) => ing.id !== action.id);
    default:
      throw new Error('Should not get there!');
  }
};

function Ingredients() {
  const [userIngredients, dispatch] = useReducer(ingredientReducer, []);

  const {
    isLoading,
    error,
    data,
    sendRequest,
    reqExtra,
    reqIdentifier,
    clear,
  } = useHttp();

  useEffect(() => {
    console.log(isLoading);
    if (!isLoading && !error && reqIdentifier === 'REMOVE_INGREDIENT') {
      dispatch({ type: 'DELETE', id: reqExtra });
    } else if (!isLoading && !error && reqIdentifier === 'ADD_INGREDIENT') {
      console.log(data);
      dispatch({ type: 'ADD', ingredient: { id: data.name, ...reqExtra } });
    }
  }, [data, reqIdentifier, error, reqExtra, isLoading]);

  const filterIngredsHandler = useCallback((filteredIngreds) => {
    dispatch({ type: 'SET', ingredients: filteredIngreds });
  }, []);

  const addIngredientHandler = useCallback(
    (ingredient) => {
      sendRequest(
        'https://react-dummy-proj-default-rtdb.europe-west1.firebasedatabase.app/ingerdients.json',
        'POST',
        JSON.stringify(ingredient),
        ingredient,
        'ADD_INGREDIENT'
      );
    },
    [sendRequest]
  );

  const removeIngredHandler = useCallback(
    (ingredId) => {
      sendRequest(
        `https://react-dummy-proj-default-rtdb.europe-west1.firebasedatabase.app/ingerdients/${ingredId}.json`,
        'DELETE',
        null,
        ingredId,
        'REMOVE_INGREDIENT'
      );
    },
    [sendRequest]
  );

  const ingredientList = useMemo(() => {
    return (
      <IngredientList
        ingredients={userIngredients}
        onRemoveItem={removeIngredHandler}
      ></IngredientList>
    );
  }, [userIngredients, removeIngredHandler]);

  return (
    <div className="App">
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
      <IngredientForm
        onAddIngredient={addIngredientHandler}
        loading={isLoading}
      />

      <section>
        <Search onLoadIngrediets={filterIngredsHandler} />
        {ingredientList}
      </section>
    </div>
  );
}

export default Ingredients;
