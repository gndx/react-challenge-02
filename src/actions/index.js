export const addToCart = payload => ({
  type: 'ADD_TO_CART',
  payload,
});

export const deleteElements = payload => {
  return {
    type: 'DELETE_ELEMENTS',
    payload,
}}
