/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable no-const-assign */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-undef */
import React from 'react';
import { connect } from 'react-redux';
import {deleteFavorite} from '../actions'
import '../styles/components/Checkout.styl';

const Checkout = (props) => {
  // console.log(props.cart[0].id)
  // eslint-disable-next-line no-unused-vars
  const { cart } = props;
  const { description,id,image,price,title } = cart;
  // eslint-disable-next-line no-console
 const handleDeleteFavorite=(id)=>{
    props.deleteFavorite(id)
  }
  let total=0
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
            <i onClick={()=>handleDeleteFavorite(item.id)} className="fas fa-trash-alt" />
          </div>
        ))}
      </div>
      {cart.length > 0 && 
        
        (
        <div className="Checkout-sidebar">
          <h3>Precio Total:</h3>
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
  deleteFavorite,
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);