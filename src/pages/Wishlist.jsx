import React from "react";
import Navbar from "../components/Navbar";

const Wishlist = () => {
  return (
    <>
      <Navbar />

      <div className="wishlist-page">
        <h2>❤️ My Wishlist</h2>
        <h3>No items in wishlist.</h3>
      </div>
    </>
  );
};

export default Wishlist;