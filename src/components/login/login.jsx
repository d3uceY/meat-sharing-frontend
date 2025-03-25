import React, { useState } from "react";
import "./login.css";
import api from "../services/api";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await api.post("/auth/login", formData); // Correct API call
      const access_token = response.data.access_token;
      localStorage.setItem("token", access_token);
      //alert("Login successful!");
      navigate("/");
    } catch (err) {
      setError("Error logging in. Please check your credentials.");
    }
  };

  return (
    <div className="signUpSection">
      <div className="signUpContainer">
        <div className="signUpHeader">
          <img src="src/assets/Group 4.png" alt="logo" />
          <h1>Login</h1>
        </div>
        <form className="formContainer" onSubmit={handleSubmit}>
          <div className="inputContainer">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              placeholder="Enter your Email"
              onChange={handleChange}
              required
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
          {error && <p className="error">{error}</p>}
        </form>
        <p>
          Don't have an account? <Link to="/signUp">Sign Up here</Link>
        </p>
      </div>
    </div>
  );
}
