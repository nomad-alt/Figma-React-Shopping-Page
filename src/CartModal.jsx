import React from 'react';
import './cartModal.css';

const CartModal = ({ cart, closeCart }) => {
  const cartItems = cart.map(item => {
    const discountedPrice = item.product.price - (item.product.price * item.product.discount) / 100;

    return (
      <div key={item.product.id} className="cart-item">
        <img src={item.product.image[0]} alt={item.product.name} className="cart-item-image" />
        <div>
          <h3>{item.product.name}</h3>
          <p>Quantity: {item.quantity}</p>
          <p>Price: ${discountedPrice.toFixed(2)}</p>
        </div>
      </div>
    );
  });

  const totalPrice = cart.reduce((total, item) => total + (item.product.price - (item.product.price * item.product.discount) / 100) * item.quantity, 0);

  return (
    <div className="cart-modal">
      <h2>Cart</h2>
      {cartItems}
      <h2 className='total-cart-amount'>Total: ${totalPrice.toFixed(2)}</h2>
      <button className='check-out-button' onClick={closeCart}>Checkout</button>
    </div>
  );
};

export default CartModal;
