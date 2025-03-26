import React from "react";
import { useAuth } from "../contexts/AuthContext";

const Header = () => {
  const { isAuthenticated, username, logout } = useAuth();

  return (
    <header className="app-header">
      <div className="header-left">
        <div className="brand">
          <span className="logo">✓</span>
          <h1>Todo App</h1>
        </div>
      </div>

      <nav className="main-nav">
        <ul className="nav-links">
          <li className="nav-item active">
            <a href="#home">Home</a>
          </li>
        </ul>
      </nav>

      <div className="header-right">
        {isAuthenticated ? (
          <div className="user-info">
            <div className="user-welcome">
              <span className="greeting">Welcome,</span>
              <span className="username">{username}</span>
            </div>
            <button onClick={logout} className="logout-button">
              Logout
            </button>
          </div>
        ) : (
          <div className="auth-buttons">
            <button className="login-nav-button">Login</button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
