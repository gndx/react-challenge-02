/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { connect } from 'react-redux';
import { removeToCart } from '../actions';
import '../styles/components/Checkout.styl';

const Checkout = props => {
  const { cart, totalSum } = props;
  const handleClick = item => {
    props.removeToCart(item);
  };
  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h2>Sin Pedidos</h2>}
        {cart.map(item => (
          <div className="Checkout-item">
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
            <i
              className="fas fa-trash-alt"
              onClick={() => handleClick(item.id)}
            />
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>Precio Total:</h3>
          <h4>${totalSum}</h4>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.cart,
    totalSum: state.cart.map(item => item.price).reduce((a, b) => a + b, 0),
  };
};

const mapDispatchToProps = {
  removeToCart,
};

// export default Checkout
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);
