export const addToCart = payload => ({
  type: 'ADD_TO_CART',
  payload,
});

export const deleteItemFromCart = payload => ({
  type: 'DELETE_ITEM_FROM_CART',
  payload,
});