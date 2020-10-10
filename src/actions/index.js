// eslint-disable-next-line import/prefer-default-export
export const addToCart = (payload) => ({
  type: 'ADD_TO_CART',
  payload,
});

export const deleteItem = (payload) => ({
  type: 'DELETE_ITEM',
  payload,
});
