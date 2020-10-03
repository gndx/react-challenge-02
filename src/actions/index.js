export const actions = {
  addToCart: 'ADD_TO_CART',
};

export const addToCart = payload => ({
  type: actions.addToCart,
  payload,
});
