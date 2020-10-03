import { actions } from '../actions';

const reducer = (state, action) => {
  switch (action.type) {
    case actions.addToCart:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case actions.removeToCart:
      return {
        ...state,
        cart: state.cart.filter(items => items.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
