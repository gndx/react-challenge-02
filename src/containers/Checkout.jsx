import React from 'react';
import { connect } from 'react-redux';
import { removeToCart } from '../actions';
import '../styles/components/Checkout.styl';

const Checkout = props => {
  const { cart, suma } = props;

  const handleRemoveCart = itemId => {
    props.removeToCart(itemId);
  };

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h2>Sin Pedidos</h2>}
        {cart.map(item => (
          <div className="Checkout-item" key={item.id}>
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
            <button
              type="button"
              onClick={() => handleRemoveCart(item.id)}
              className="fas fa-trash-alt"
            />
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>Precio Total:</h3>
          <h4>${suma}</h4>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.cart,
    suma: state.cart.reduce((sum, i) => sum + i.price, 0),
  };
};

const mapDispatchToProps = {
  removeToCart,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);
