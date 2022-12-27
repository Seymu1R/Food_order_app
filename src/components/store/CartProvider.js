import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItem = state.items.concat(action.it);
    const updatedTotalAmount = state.totalAmount + action.it.price3 * action.it.amount
  
  return {
    items : updatedItem,
    totalAmount : updatedTotalAmount
  }
}
  return defaultCartState;
};

function CartProvider(props) {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction ({type:"REMOVE", ID:id });
  };

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", it: item });
  };

  const setValue = {
    items: cartState.items,
    totalamount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={setValue}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
