import React from 'react';
import { connect } from 'react-redux';
import { deleteCart } from '../actions'
import '../styles/components/Checkout.styl';

const Checkout = (props) => {
  const { id, cart } = props;

  const handleDeleteCart = (itemId) => {
    props.deleteCart(itemId);
  }

  const total = 0;
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
            <i className="fas fa-trash-alt" onClick={() => handleDeleteCart(item.id)} />      
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>Precio Total:</h3>
          <h4>$ {
          cart.reduce((sum, i) => (
            sum += i.price
          ), 0)}</h4>
        </div>
      )}
    </div>
  )
};

const mapStateToProps = state => {
  return {
    cart: state.cart,
  };
};
const mapDispatchToProps = {
  deleteCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);