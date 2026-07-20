import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(cartItems);
  }, []);

  return (
    <>
      <Navbar />

      <div className="cart-page">
        <h2>🛒 My Cart</h2>

        {cart.length === 0 ? (
          <h3>Your cart is empty.</h3>
        ) : (
          <div className="products-container">
            {cart.map((item) => (
              <div className="product-card" key={item.product_id}>
                <img
                  src={item.product_image}
                  alt={item.product_name}
                  className="product-img"
                />

                <h3>{item.product_name}</h3>

                <p>
                  <b>Price:</b> ₹{item.product_price.toLocaleString()}
                </p>

                <p>
                  <b>Rating:</b> ⭐ {item.product_ratings}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;