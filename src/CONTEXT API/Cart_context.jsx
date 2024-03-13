import { createContext, useContext, useEffect, useReducer } from 'react';
import cart_reducer from '../reducer/cart_reducer';
import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from '../action';

const fetchDataFromLocalStorage = () => {
  let cart = localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : [];

  return cart;
};

const initialState = {
  cart: fetchDataFromLocalStorage(),
  total_items: 0,
  total_amount: 0,
  shipping_fee: 999,
};

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const Cart_context = ({ children }) => {
  const [state, dispatch] = useReducer(cart_reducer, initialState);

  // ADD TO CART
  const addToCart = (id, color, amount, product) => {
    dispatch({ type: ADD_TO_CART, payload: { id, color, amount, product } });
  };

  // REMOVE ITEM
  const removeItem = (id) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: id });
  };

  // TOGGLE AMOUNT
  const toggleAmount = (id, value) => {
    dispatch({
      type: TOGGLE_CART_ITEM_AMOUNT,
      payload: { id, value },
    });
  };

  // CLEAR CART
  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  // SETTING ALL CART ITEM TO LOCAL STORAGE
  useEffect(() => {
    dispatch({ type: COUNT_CART_TOTALS });
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeItem, toggleAmount, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default Cart_context;
