import { actions } from '../actions';

const reducer = (state, action) => {
  switch (action.type) {
    case actions.addToCart:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
