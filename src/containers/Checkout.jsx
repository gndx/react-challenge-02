import React from 'react';
import { connect } from 'react-redux';
import '../styles/components/Checkout.styl';
import {removeToCard} from '../actions'

const Checkout = props => {
  const { cart, totalPrice } = props;

  const handleRemove = (id) => {
    props.removeToCard(id);
  }

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
            <i className="fas fa-trash-alt" onClick={() => handleRemove(item.id)} />
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>Precio Total:</h3>
          <h4>
            $
            {' '}
            {totalPrice}
          </h4>
        </div>
      )}
    </div>
  )
};

const mapStateToProps = state => {
  return {
    cart: state.cart,
    totalPrice: state.cart.map(item => item.price).reduce((a, b) => a + b, 0),
  };
};

const mapDispatchToProps = {
  removeToCard,
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);