import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from '../action';

const cart_reducer = (state, action) => {
  // console.log(state);
  switch (action.type) {
    case ADD_TO_CART:
      const { id, color, amount, product } = action.payload;
      const tempItem = state.cart.find((item) => item.id === id + color);

      if (tempItem) {
        const tempCart = state.cart.map((cartItem) => {
          if (cartItem.id === id + color) {
            let newAmount = cartItem.amount + amount;
            // CHECK IF THE newAmount is GREATER THAN THE STOCK AMOUNT
            if (newAmount > cartItem.max) {
              newAmount = cartItem.max;
            }
            return { ...cartItem, amount: newAmount };
          } else {
            return cartItem;
          }
        });
        return { ...state, cart: tempCart };
      } else {
        const newItem = {
          id: id + color,
          name: product.name,
          color,
          amount,
          image: product.images[0].url,
          price: product.price,
          max: product.stock,
        };
        return { ...state, cart: [...state.cart, newItem] };
      }
      break;

    case REMOVE_CART_ITEM:
      const tempCart = state.cart.filter((item) => item.id !== action.payload);
      return { ...state, cart: tempCart };
      break;
    case CLEAR_CART:
      return { ...state, cart: [] };
      break;
    case TOGGLE_CART_ITEM_AMOUNT:
      const { value } = action.payload;
      // console.log(action.payload);

      const tempData = state.cart.map((item) => {
        let newAmt;
        if (item.id === action.payload.id) {
          if (value === 'inc') {
            newAmt = item.amount + 1;
            if (newAmt > item.max) {
              newAmt = item.max;
            }
          }
          if (value === 'dec') {
            newAmt = item.amount - 1;
            if (newAmt < 1) {
              newAmt = 1;
            }
          }
          return { ...item, amount: newAmt };
        } else {
          return item;
        }
      });
      return { ...state, cart: tempData };
      break;

    case COUNT_CART_TOTALS:
      let cartData = state.cart.reduce(
        (total, cartAmount) => {
          // console.log(cartAmount);

          total.total_items += cartAmount.amount;
          total.total_amount += cartAmount.amount * cartAmount.price;

          return total;
        },
        {
          total_items: 0,
          total_amount: 0,
        }
      );
      return {
        ...state,
        total_items: cartData.total_items,
        total_amount: cartData.total_amount,
      };
      break;

    default:
      throw new Error(`No Matching "${action.type}" - acton type`);
      break;
  }
};
export default cart_reducer;
