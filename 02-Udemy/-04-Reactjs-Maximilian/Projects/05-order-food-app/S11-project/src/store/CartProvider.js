import { useReducer } from 'react';

import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    // concat creates a new state copy in memory
    const updatedPrice =
      state.totalAmount + action.item.amount * action.item.price;
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];

      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return { items: updatedItems, totalAmount: updatedPrice };
  }

  if (action.type === 'REMOVE') {
    let updatedItem = state.items.find((item) => item.id === action.id);
    // let updatedItemIdx = state.items.findIndex((item) => item.id === action.id);
    // let updatedItem = state.items[updatedItemIdx];
    let updatedTotatlAmount = state.totalAmount - updatedItem.price;
    let updatedItems;

    if (updatedItem.amount === 1) {
      // filter items of that item
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      updatedItem.amount--;
      // remember to assign new state to updatedItems
      updatedItems = [...state.items];
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotatlAmount,
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: 'ADD', item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE', id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
