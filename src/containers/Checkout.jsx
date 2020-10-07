import React from 'react';
import { connect } from 'react-redux';
import { deleteFromCart } from '../actions';
import '../styles/components/Checkout.styl';

const Checkout = (props) => {
  const { cart } = props;
  const handleDeleteProduct = (item) => {
    props.deleteFromCart(item);
  }

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h2>Sin Pedidos</h2>}
        {cart.map(item => (
          <div div className="Checkout-item" key={item.id}>
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>
                $
                {item.price}
              </span>
            </div>
            <i className="fas fa-trash-alt" onClick={() => handleDeleteProduct(item.id)} />
          </div>
        ))}
      </div>
      <div>
        <h3>Total a pagar</h3>
        <h4>
          $ &nbsp;
          {cart.reduce((total, itemCart) => { total += itemCart.price; return total }, 0)}
        </h4>
      </div>
    </div>
  )
};

const mapStateToProps = state => {
  return {
    cart: state.cart,
  };
};

const mapDispachToProps = {
  deleteFromCart,
}

export default connect(mapStateToProps, mapDispachToProps)(Checkout);