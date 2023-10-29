import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./../css/login.css";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let history = useNavigate();

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:5000/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (response.status === 200) {
        const data = await response.json();
        console.log(data);
        history.push("/home");
      } else {
        const errorData = await response.json();
        console.error(errorData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="body1">
    <div className="wrapper" id="login">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="input-box"> 
          <input
            type="text"
            placeholder="Username"
            required
            name="email"
            value={credentials.email}
            onChange={onChange}
          />
        </div>
        <div className="input-box"> 
          <input
            className="password" 
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            placeholder="Password"
            required
            value={credentials.password}
            onChange={onChange}
          />
        </div>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="/login">Forgot password?</a>
        </div>
        <button type="submit" className="btn">
          Login
        </button>
        <div className="register-link">
          <p>
            Don't have an account?<Link to="/register">Register</Link>
          </p>
        </div>
      </form>
    </div>
    </div>
  );
}

export default Login;
