import React from 'react';
import { connect } from 'react-redux';
import { deleteToCart } from '../actions';
import '../styles/components/Checkout.styl';

const Checkout = props => {
  const { cart } = props;

  const handleDeleteToCart = itemId => {
    props.deleteToCart(itemId);
  };

  const sum = () => {
    let total = 0;
    for (let i = 0; i < cart.length; i += 1) {
      total += cart[i].count*cart[i].price;
    }
    return total;
  };
  return (
    <>
      <div className="Checkout">
        <div className="Checkout-content">
          {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h2>Sin Pedidos</h2>}
          {cart.map((item) => (
            <div key={item.id} className="Checkout-item">
              <div className="Checkout-element">
                <h4>
                  {item.title}
                  <span> x </span>
                  {item.count}
                </h4>
                <span>
                  $
                  {item.price*item.count}
                </span>
              </div>
              <button type="button" className="fas fa-trash-alt" onClick={() => handleDeleteToCart(item.id)} />
            </div>
          ))}
        </div>
        {cart.length > 0 && (
          <div className="Checkout-sidebar">
            <h3>Precio Total:</h3>
            <h4>
              $
              {sum()}
            </h4>
          </div>
        )}
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = {
  deleteToCart,
};
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
