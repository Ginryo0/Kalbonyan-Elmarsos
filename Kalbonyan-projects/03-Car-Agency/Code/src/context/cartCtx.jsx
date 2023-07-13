import React, { useContext, useReducer } from 'react';

const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const CLEAR_CART_ITEM = 'CLEAR_CART_ITEM';
const CLEAR_CART = 'CLEAR_CART';

const initialState = JSON.parse(localStorage.getItem('cart')) || [];

const reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    let found = false;
    const newState = [...state];
    const mappedCart = newState.map((item) => {
      if (item.name === action.payload.name) {
        found = true;

        return { ...action.payload, amount: item.amount + 1 };
      }
      return item;
    });

    if (!found) {
      newState.push({ ...action.payload, amount: 1 });
      localStorage.setItem('cart', JSON.stringify(newState));
      return newState;
    } else {
      localStorage.setItem('cart', JSON.stringify(mappedCart));

      return mappedCart;
    }
  }

  if (action.type === REMOVE_FROM_CART) {
    const cartCopy = [...state];
    const removedItem = cartCopy.find(
      (item) => item.name === action.payload.name
    );
    if (!removedItem) {
      return [...state];
    }
    if (removedItem.amount <= 1)
      return cartCopy.filter((item) => item.name !== removedItem.name);
    const mappedState = state.map((item) => {
      if (item.name === action.payload.name) {
        if (item.amount > 1) {
          return { ...action.payload, amount: item.amount - 1 };
        }
      }
      return item;
    });

    localStorage.setItem('cart', JSON.stringify(mappedState));
    return mappedState;
  }

  if (action.type === CLEAR_CART_ITEM) {
    return [...state].filter((item) => item.name !== action.payload.name);
  }

  if (action.type === CLEAR_CART) {
    localStorage.setItem('cart', JSON.stringify([]));
    return [];
  }
};

const cartCtx = React.createContext();
const CartCtxProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (car) => {
    dispatch({ type: ADD_TO_CART, payload: car });
  };
  const removeFromCart = (car) => {
    dispatch({ type: REMOVE_FROM_CART, payload: car });
  };

  const clearCartItem = (car) => {
    dispatch({ type: CLEAR_CART_ITEM, payload: car });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };
  return (
    <cartCtx.Provider
      value={{
        cart: state,
        addToCart,
        removeFromCart,
        clearCart,
        clearCartItem,
      }}
    >
      {children}
    </cartCtx.Provider>
  );
};

const useCartCtx = () => {
  return useContext(cartCtx);
};

export { CartCtxProvider, useCartCtx };
