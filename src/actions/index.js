/* eslint-disable import/prefer-default-export */
export const addToCart = payload => ({
  type: 'ADD_TO_CART',
  payload,
});
export const removeToCart = payload => ({
  type: 'REMOVE_TO_CART',
  payload,
});
