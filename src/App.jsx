import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Navbar";
import ProductPage from "./ProductPage";
import productData from './product.json';
import CartModal from './CartModal';

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product, quantity) => {
    const existingProduct = cart.find((item) => item.product.id === product.id);

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCart([...cart, { product, quantity }]);
    }
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <Router>
      <NavBar toggleCart={toggleCart} cartLength={cart.length} />
      {showCart && <CartModal cart={cart} closeCart={toggleCart} />}
      <Routes>
        <Route path="/" element={<ProductPage product={productData} addToCart={addToCart} />} />
      </Routes>
    </Router>
  );
}

export default App;
