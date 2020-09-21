/* eslint-disable import/prefer-default-export */
export const addToCart = payload => ({
  type: 'ADD_TO_CART',
  payload,
});
export const deleteFavorite=payload=>{
  return{
  type:'DELETE_FAVORITE',
  payload,
}}

// export { addToCart };