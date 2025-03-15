import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleResetPassword = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email address.");
      return;
    }
    setError("");
    setMessage("If an account with this email exists, we will send a password reset link.");
    // Simulate the process (you would actually send a request to your backend here)
    setTimeout(() => {
      navigate("/login"); // Redirect to login after the reset process
    }, 2000);
  };

  return (
    <div className="center-container" style={{backgroundColor:"grey"}}>
    <div
      className=" container-fluid d-flex justify-content-center align-items-center"
      style={{
        height: "100vh",
        backgroundColor: "#f4f7f6",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        className="card p-4 shadow"
        style={{
          width: "400px",
          borderRadius: "10px",
          backgroundColor: "#fff",
        }}
      >
        <h3 className="text-center" style={{ color: "#607d8b" }}>
          Forgot Password
        </h3>
        {error && <div className="alert alert-danger">{error}</div>}
        {message && <div className="alert alert-success">{message}</div>}
        <form onSubmit={handleResetPassword}>
          <div className="mb-3">
            <label className="form-label" style={{ color: "#607d8b" }}>
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ borderColor: "#607d8b", borderRadius: "8px" }}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100"
            style={{
              backgroundColor: "#607d8b",
              borderRadius: "8px",
            }}
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default ForgotPassword;