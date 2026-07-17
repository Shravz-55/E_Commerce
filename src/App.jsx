import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import ProductDetails from "./pages/ProductDetails";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="light"
      />
    </>
  );
};


export default App;