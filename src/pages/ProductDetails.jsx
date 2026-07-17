import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [address, setAddress] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => {
        const foundProduct = res.data.find(
          (item) => item.product_id === Number(id)
        );

        setProduct(foundProduct);
      })
      .catch((err) => console.log(err));
  }, [id]);

  function inc(){
    setQuantity(quantity+1)
  }
  function dec(){
    if(count>1){
      setQuantity(quantity-1)
    }
  }

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <>
      <Navbar />

      <div className="product-details">
        <img
          className="product-img"
          src={product.product_image}
          alt={product.product_name}
        />

        <h2>{product.product_name}</h2>

        <p>
          <b>Category:</b> {product.product_category}
        </p>

        <p>
          <b>Price:</b> ₹{product.product_price.toLocaleString()}
        </p>

        <p>
          <b>Rating:</b> ⭐ {product.product_ratings}/5
        </p>

        <p>
          <b>Description:</b> {product.product_description}
        </p>
        <button onClick={dec}>-</button>
        <h2>{quantity}</h2>
        <button onClick={inc}>+</button>

        <form>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <br />
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <input
            type="number"
            placeholder="Enter Contact Number"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            required
          />
          <br />
          <textarea
            placeholder="Enter Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          ></textarea>
          <button className="btn btn-primary">Buy Now</button>
        </form>
        {/* <button className="btn btn-primary">Buy Now</button> */}
        {/* <button className="btn btn-primary">Add to Cart</button> */}
      </div>

    </>
  );
};

export default ProductDetails;