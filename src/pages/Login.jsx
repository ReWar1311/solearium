import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-left">
        <div className="logo">
          Sole-arium
        </div>
        <div className="login-title">Login</div>
        <form>
          <div className="form-group">
            <label className="form-label" htmlFor="email">Email</label>
            <input className="form-input" type="email" id="email" name="email" autoComplete="username" />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="password">Password</label>
            <input className="form-input" type="password" id="password" name="password" autoComplete="current-password" />
          </div>
          <button className="login-btn" type="submit">login</button>
        </form>
      </div>
      <div className="login-right">
        <img
          src="./login_soles.png"
          alt="Sole-arium Product"
        />
      </div>
    </div>
  );
};

export default Login;
