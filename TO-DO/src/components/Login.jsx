import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";

const Login = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const { login, error, clearError, isAuthenticated } = useAuth();

  useEffect(() => {
    // Clear any auth errors when component mounts
    clearError();
  }, [clearError]);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(user, pass);
  };

  if (isAuthenticated) {
    return null; // Don't render login form if already authenticated
  }

  return (
    <div className="login-box">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        {error && <div className="error-box">{error}</div>}

        <div className="input-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            placeholder="Your username"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="Your password"
            required
          />
        </div>

        <button type="submit" className="signin-button">
          Sign In
        </button>
      </form>

      <p className="login-tip">
        Hint: Try username "admin" with password "admin123"
      </p>
    </div>
  );
};

export default Login;
