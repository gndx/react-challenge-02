const reducer = (state, action) => {
  const { cart } = state;
  switch (action.type) {
    case 'ADD_TO_CART': {
      const itemCart = state.cart.find(items => items.id === action.payload.id);

      if (itemCart) {
        const newCart = cart.filter(
          item => item.id !== action.payload.id
        );
        itemCart.count +=1;
        newCart.push(itemCart);
        return {
          ...state,
          cart: newCart,
        };
      }
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    }
    case 'DELETE_TO_CART': 
      return {
        ...state,
        cart: state.cart.filter((items) => items.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
