import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  function signup(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      phone,
      password,
    };

    axios
     .post("https://e-commerce-api-c07f.onrender.com/users", data)
      .then((res) => {
        console.log(res);
        toast.success("Signup successful");

        setName("");
        setEmail("");
        setPhone("");
        setPassword("");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Signup failed");
      });
  }

  return (
    <>
      <div className="signup-form">
        <h2>Signup Page</h2>

        <form onSubmit={signup}>
          <input
            type="text"
            placeholder="Enter your name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />

          <input
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />

          <input
            type="tel"
            placeholder="Enter your phone number"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <br />

          <input
            type="password"
            placeholder="Enter your password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />

          <button id="signup" type="submit">
            Signup
          </button>

          <p style={{ textAlign: "center" }}>
            Are you existing user? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Signup;
