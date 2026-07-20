import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";

const Dashboard = () => {
  const userName = localStorage.getItem("userName");

  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const addToCart = (product) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const exists = cart.find(
    (item) => item.product_id === product.product_id
  );

  if (exists) {
    alert("Product already added to cart!");
    return;
  }

  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Product added to cart successfully!");
};

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Navbar />

      <div className="dashboard">
        <h2>Welcome, {userName}</h2>

        <div className="products-container">
          {products.map((x) => (
            <div className="product-card" key={x.product_id}>
              <img
                src={x.product_image}
                alt={x.product_name}
                className="product-img"
              />

              <h3>{x.product_name}</h3>

              <p>
                <b>Category:</b> {x.product_category}
              </p>

              <p>
                <b>Price:</b> ₹{x.product_price.toLocaleString()}
              </p>

              <p>
                <b>Rating:</b> ⭐ {x.product_ratings}
              </p>

             <div className="button-group">
  <button
    className="view-btn"
    onClick={() => navigate(`/product/${x.product_id}`)}
  >
    View
  </button>

  <button
    className="cart-btn"
    onClick={() => addToCart(x)}
  >
    Add to Cart
  </button>
</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;