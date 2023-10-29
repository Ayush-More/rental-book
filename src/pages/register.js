import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./../css/register.css";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log(response);
      if (response.status === 201) {
        const data = await response.json();
        Navigate("/login");
        console.log(data);
      } else {
        const errorData = await response.json();

        console.error(errorData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="body2">
      <div className="wrapper" id="signup">
        <form onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <div className="input-box">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              required
              value={formData.username}
              onChange={handleChange}
            />
            <div id="username-error"></div>
          </div>
          <div className="input-box">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Id"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <div id="email-error"></div>
          </div>
          <div className="input-box">
            <input
              className="password"
              type="password"
              id="password"
              name="password"
              placeholder="Create Password"
              required
              value={formData.password}
              onChange={handleChange}
            />
            <span className="input__icon-wrapper">
              <i className="input__icon ri-eye-off-line"></i>
            </span>
            <div id="password-feedback"></div>
          </div>
          <div className="input-box">
            <input
              className="password"
              type="password"
              id="confirm-password"
              name="confirmPassword"
              placeholder="Confirm Password"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <span className="input__icon-wrapper">
              <i
                id="confirm-password-icon"
                className="input__icon ri-eye-off-line"
                onClick={() =>
                  togglePasswordVisibility(
                    "confirm-password",
                    "confirm-password-icon"
                  )
                }
              ></i>
            </span>
            <div id="password-error"></div>
          </div>

          <div className="remember-forgot"></div>
          <button type="submit" id="submit-button" className="btn">
            Register
          </button>

          <div className="register-link">
            <p>
              Already have an account?<Link to="/login"> Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
