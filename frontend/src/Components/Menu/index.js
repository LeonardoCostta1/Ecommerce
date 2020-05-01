import React from 'react';
import logo from '../../Assets/img/freezy.svg'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import'./style.css';

export default function Menu() {
  const response = useSelector(state=>{
    return state.cart.products.length
  })
  return (
    <div className="menu_wrapper">
        <div className="logo_wrapper">
        <Link to="/">
            <img src={logo} alt="Freezy"/>
            </Link>
        </div>
        <div className="nav_wrapper"></div>
        <div className="cart_icons_wrapper">
          <Link to="/cart">
          <div className="shop">shopping cart</div>
          <i className="fas fa-shopping-cart"></i>
          {response}
          </Link>
        </div>
    </div>
  );
}
