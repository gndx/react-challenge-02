const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }
      case 'DELETE_ITEM_FROM_CART':
        return {
          ...state, 
          cart: state.cart.filter(items => items.id !== action.payload)
        }
    default:
      return state;
  }
}

export default reducer;