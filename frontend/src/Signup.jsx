import React, { useState } from "react";
import "./Auth.css";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Create Account 🚀</h2>
        <p className="auth-subtitle">Join our community</p>

        <form className="auth-form">

          <div className="input-group">
            <label>Username</label>
            <input type="text" placeholder="Enter your username" />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className="input-group">
            <label>Password</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
              />
              <span
                className="toggle-pass"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "👁️" : "🙈"}
              </span>
            </div>
          </div>

          <button className="auth-btn">Signup</button>
        </form>

        <p className="auth-switch">
          Already have an account? <span>Login</span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
