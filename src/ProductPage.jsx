import React, { useState } from 'react';
import './productPage.css';

const ProductPage = ({ product, addToCart }) => {
  const [activeImage, setActiveImage] = useState(product.image[0]);
  const [quantity, setQuantity] = useState(1);

  const discountedPrice = product.price - product.price * (product.discount / 100);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="product-page">
      <div className="product-image">
        <img src={activeImage} alt={product.name} />
        <div className="product-variants">
        {product.image.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={product.name}
            onClick={() => setActiveImage(img)}
            className="variant-image"
          />
        ))}
      </div>
      </div>
      <div className='product-details'>
        <h2 className='brand-name'>{product.brand}</h2>
      <h2 className="product-name">{product.name}</h2>
      <p className="product-description">{product.description}</p>
      {product.discount ? (
        <div className="product-price">
          <p className="original-price">${product.price.toFixed(2)}</p>
          <p className="discounted-price">${discountedPrice.toFixed(2)}</p>
          <p className="discount-percentage">{product.discount}% off</p>
        </div>
      ) : (
        <p className="product-price">${product.price.toFixed(2)}</p>
      )}
      <div className='product-quantity-add-cart-button'>
      <div className="product-quantity">
        <button onClick={decrementQuantity}>-</button>
        <input type="text" value={quantity} readOnly className="quantity-input" />
        <button onClick={incrementQuantity}>+</button>
      </div>
      <button onClick={() => addToCart(product, quantity)} className="add-to-cart-button">
        Add to cart
      </button>
      </div>
      </div>
    </div>
  );
};

export default ProductPage;
