import React, { useState } from "react";
import "./Auth.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Welcome Back 👋</h2>
        <p className="auth-subtitle">Login to continue</p>

        <form className="auth-form">

          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className="input-group">
            <label>Password</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
              />
              <span
                className="toggle-pass"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "👁️" : "🙈"}
              </span>
            </div>
          </div>

          <p className="forgot">Forgot Password?</p>

          <button className="auth-btn">Login</button>
        </form>

        <p className="auth-switch">
          New here? <span>Signup</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
