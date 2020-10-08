import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../styles/components/Header.styl';

const Header = props => {
  const { cart } = props;
  const sum = () => {
    let total = 0;
    for (let i = 0; i < cart.length; i += 1) {
      total += cart[i].count;
    }
    return total;
  };
  return (
    <div className="Header">
      <Link to="/">
        <h1>Platzi Store</h1>
      </Link>
      <div className="Header-checkout">
        <Link to="/checkout">
          <i className="fas fa-shopping-basket" />
        </Link>
        {cart.length > 0 && <div className="Header-alert">{sum()}</div>}
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps, null)(Header);
