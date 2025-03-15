import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header1 from "./Header1";



const LoginPage1 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
    setError("");
    alert(`Logged in with Email: ${email}`);
  };
  

  return (
    <>
    <Header1/>
    <div className="center-container"> 
    <div 
      className="container-fluid d-flex justify-content-center align-items-center" 
      style={{ 
        height: '100vh', 
        backgroundColor: '#f4f7f6', 
        display: 'flex', 
        flexDirection: 'column' 
      }}
    >
      <div className="card p-4 shadow" style={{ width: '400px', borderRadius: '10px', backgroundColor: '#fff' }}>
        <h2 className="text-center mb-4" style={{ color: '#607d8b' }}>Login</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label" style={{ color: '#607d8b' }}>Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              style={{ borderColor: '#607d8b', borderRadius: '8px' }}
              required
            />
          </div>
  
          <div className="mb-3">
            <label className="form-label" style={{ color: '#607d8b' }}>Password</label>
            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                style={{ borderColor: '#607d8b', borderRadius: '8px' }}
                required
              />
              <button
                className="btn btn-outline-secondary"
                style={{ color: '#607d8b', borderColor: '#607d8b' }}
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
  
          <div className="d-flex justify-content-between mb-3">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <label className="form-check-label" style={{ color: '#607d8b' }}>Remember Me</label>
            </div>
            <Link to="/forgot-password" style={{ color: '#607d8b' }}>Forgot Password?</Link>
          </div>
  
          <div className="d-grid">
            <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#607d8b', borderRadius: '8px' }}>
              Login
            </button>
          </div>
        </form>
        
        <div className="text-center mt-3">
          <p>Don't have an account? <Link to="/registration" style={{ color: '#607d8b' }}>Register here</Link></p>
        </div>
      </div>
    </div>
  </div>
  </>
  );
};

export default LoginPage1;