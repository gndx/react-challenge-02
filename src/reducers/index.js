const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case 'REMOVE_TO_CART':
      return {
        ...state,
        cart: state.cart.filter(items => {
          console.log(items);
          return items.id !== action.payload;
        }),
      };
    default:
      return state;
  }
};

export default reducer;
