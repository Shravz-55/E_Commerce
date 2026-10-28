import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function login(e) {
    e.preventDefault();

    axios
      .get("https://e-commerce-api-c07f.onrender.com/users")
      .then((res) => {
        const users = res.data;

        const result = users.find((user) => {
          return user.email === email && user.password === password;
        });

        if (result) {
          toast.success("Login Successful");
          localStorage.setItem("userId", result.id);
          localStorage.setItem("isLoggedIn", true);
          localStorage.setItem("userName", result.name);

           setTimeout(() => {
        navigate("/dashboard");
    }, 1000);
        } else {
          toast.error("Invalid Email or Password");
        }
      })

      
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong");
      });
  }

  return (
    <>
      <div className="login-form">
        <h2>Login Page</h2>

        <form onSubmit={login}>
          <input
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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

          <button id="login" type="submit">
            Login
          </button>

          <p style={{ textAlign: "center" }}>
            New user? <Link to="/signup">Signup</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
