import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">Logo</h2>

      <div className="nav-links">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/products">Products</Link>
        <Link to="/orders">Orders</Link>
      </div>
    </nav> 
  );
};

export default Navbar;