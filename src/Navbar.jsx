import React from 'react';
import logo from '/assets/logo.png';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ toggleCart, cartLength }) => (
  <nav className='navbar'>
    <div className='navbar-group1'>
    <div className="navbar-logo">
      <img src={logo} alt="Logo" className="logo" />
    </div>
    <div className="navbar-links">
      <a href="#product" className="navbar-link">Product</a>
      <a href="#men" className="navbar-link">Men</a>
      <a href="#women" className="navbar-link">Women</a>
      <a href="#about" className="navbar-link">About</a>
      <a href="#contact" className="navbar-link">Contact</a>
    </div>
    </div>
    <div className='navbar-group2'>
      <button onClick={toggleCart} className="navbar-cart-button">
      <FontAwesomeIcon icon={faShoppingCart} />
      <span className="cart-length">{cartLength}</span>
    </button>
    <img src="/assets/Oval.jpg" alt="User avatar" className="navbar-avatar" />
    </div>
  </nav>
);

export default Navbar;



