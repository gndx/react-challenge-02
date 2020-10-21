import React from 'react';
import { connect } from 'react-redux';
import '../styles/components/Checkout.styl';
import { deleteFromCart } from '../actions';

const Checkout = (props) => {
  const { cart } = props;

  const handleDeleteFromCart = (item) => {
    props.deleteFromCart(item);
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
            <button  
              type='button'
              onClick={()=>handleDeleteFromCart(item.id)}
            >
              <i className="fas fa-trash-alt" />
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>Precio Total:</h3>
          <h4>$</h4>
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
  deleteFromCart,
};

export default connect(mapStateToProps,mapDispatchToProps)(Checkout);