import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import '../styles/components/Checkout.styl';
import { deleteItem } from '../actions'

const Checkout = (props) => {
  const { cart } = props;
  const handleDeleteItem = (itemId) => {
    props.deleteItem(itemId);
  }

let totalPrice = 0;
const countTotalPrice = (price) => {
  totalPrice += price;
}

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : (
          <>
            <h2>Sin Pedidos</h2>
            <br />
            <Link to='/'><button type="button">Regresar al Home</button></Link>
          </>
)}
        {cart.map(item => (
          <div className="Checkout-item" key={item.id}>
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>
                $
                {item.price}
                {countTotalPrice(item.price)}
              </span>
            </div>
            <i className="fas fa-trash-alt" onClick={() => handleDeleteItem(item.id)} />
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>Precio Total:</h3>
          <h4>
$
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
  };
};

const mapDispatchToProps = {
  deleteItem,
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);