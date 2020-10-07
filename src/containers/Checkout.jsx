import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../actions';
import '../styles/components/Checkout.styl';

const Checkout = props => {
  const { cart, totalSum } = props;

  const handleDeleteItem = id => {
    props.removeFromCart(id);
  };

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h2>Sin Pedidos</h2>}
        {cart.map(item => (
          <div className="Checkout-item" key={item.id}>
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>
$
                {item.price}
              </span>
            </div>
            <button
              type="button"
              className="btn fas fa-trash-alt"
              onClick={() => handleDeleteItem(item.id)}
            />
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>Precio Total:</h3>
          <h4>
$
            {totalSum}
          </h4>
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
  removeFromCart,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);