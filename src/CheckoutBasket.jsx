import React, { useState } from 'react';

const CheckoutBasket = () => {
  const [basket, setBasket] = useState([]);

  const addToBasket = (product) => {
    setBasket(oldBasket => [...oldBasket, product]);
  };

  return (
    <div>
      {basket.map((product, index) => (
        <div key={index}>
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}
      <p>Total: {basket.reduce((total, product) => total + product.price, 0)}</p>
    </div>
  );
};

export default CheckoutBasket;
