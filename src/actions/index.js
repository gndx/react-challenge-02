export const actions = {
  addToCart: 'ADD_TO_CART',
  removeToCart: 'REMOVE_TO_CART',
};

export const addToCart = payload => ({
  type: actions.addToCart,
  payload,
});

export const removeToCart = payload => ({
  type: actions.removeToCart,
  payload,
});
