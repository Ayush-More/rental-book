import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./../css/login.css";
function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let Navigate = useNavigate();

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
        localStorage.setItem("token", data.token);
        console.log(data);
        Navigate("/");
      } else {
        const errorData = await response.json();
        console.error(errorData);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    document.title = "User Login";
  }, []);

  return (
    <div className="body1">
      <div className="wrapper" id="login">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="input-box" id="loginput">
            <input
              type="text"
              placeholder="Email Id"
              required
              name="email"
              value={credentials.email}
              onChange={onChange}
            />
          </div>
          <div className="input-box" id="loginput">
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
            <span className="input__icon-wrapper">
              <i
                className={`input__icon ${
                  showPassword ? "ri-eye-line" : "ri-eye-off-line"
                }`}
                onClick={togglePasswordVisibility}
              ></i>
            </span>
          </div>
          <div className="remember-forgot">
            <label>
              <input className="remember" type="checkbox" /> Remember me
            </label>
            <button type="submit" className="btn" id="loginbtn">
              Login
            </button>
          </div>
          <div className="register-link">
            <p>
              Don't have an account?
              <Link to="/register" className="reglink">
                {" "}
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
