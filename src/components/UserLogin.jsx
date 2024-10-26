import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './Login.css'; // Optional, for adding custom styles
import { useNavigate } from "react-router-dom";
import { userLoginAPI } from "../services/user";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("admin"); // Default user type
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect based on login status in localStorage
    if (localStorage.getItem('adminLogin')) {
      navigate('/dashboard');
    } else if (localStorage.getItem('userLogin')) {
      navigate('/user');
    }
  }, [navigate]);

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const validateForm = () => {
    if (!email || !password) {
      toast.error("Please enter all fields!");
      return false;
    }
    const emailPattern = /\S+@\S+\.\S+/;
    if (!emailPattern.test(email)) {
      toast.error("Please enter a valid email!");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const res = await userLoginAPI({
          username: email,
          password: password,
          userType: userType,
        });

        if (res.status) {
          toast.success("Login Successful!");
          if (res.isAdmin) {
            navigate('/dashboard');
            localStorage.setItem("adminLogin", "true");
          } else {
            navigate('/');
            localStorage.setItem("userLogin", "true");
            localStorage.setItem("userId", res.data._id);
          }
        } else {
          toast.error(res.message || "Login failed!");
        }
      } catch (error) {
        toast.error("An error occurred while logging in.");
      }
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="userType">User Type</label>
          <select id="userType" value={userType} onChange={handleUserTypeChange}>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default Login;
