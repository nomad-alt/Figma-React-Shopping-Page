import React from 'react';

const Product = ({ product, addToBasket }) => (
  <div>
    <img src={product.image} alt={product.name} />
    <h2>{product.name}</h2>
    <p>{product.description}</p>
    <p>{product.price}</p>
    <button onClick={() => addToBasket(product)}>Add to Basket</button>
  </div>
);

export default Product;
