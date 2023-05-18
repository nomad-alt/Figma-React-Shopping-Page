const Cart = ({ cart }) => {
  return (
    <div>
      <h1>Your Cart</h1>
      {cart.map((item, index) => (
        <div key={index}>
          <h2>{item.product.name}</h2>
          <p>Quantity: {item.quantity}</p>
          <p>Price: ${(item.product.price * item.quantity).toFixed(2)}</p>
        </div>
      ))}
      <h2>Total: ${cart.reduce((total, item) => total + item.product.price * item.quantity, 0).toFixed(2)}</h2>
    </div>
  );
};

export default Cart;
