import React from 'react';
import { connect } from 'react-redux';
import {deleteElements} from '../actions'
import '../styles/components/Checkout.styl';

const Checkout = (props) => {
  const { cart } = props;
  const {description, id, image, price, title} = cart;

  const handleDeleteElement = (id) =>{
    props.deleteElements(id)
  }
  let total = 0;

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h2>Sin Pedidos</h2>}
        {cart.map(item => (
          <div key={item.id} className="Checkout-item">
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>
                $
                {item.price}
              </span>
            </div>
            <i onClick={()=> handleDeleteElement(item.id)} className="fas fa-trash-alt" />
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>Precio Total:</h3>
          <h4>$</h4>
          {cart.map(item => (
            <h4 key={item.id}>{total+=item.price}</h4>
          ))}
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

const mapDispatchToProps={
  deleteElements,
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);