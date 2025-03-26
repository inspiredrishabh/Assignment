import React from "react";
import { useAuth } from "../contexts/AuthContext";

const Header = () => {
  const { isAuthenticated, username, logout } = useAuth();

  return (
    <header className="header-top">
      <div className="logo-area">
        <div className="app-brand">
          <span className="checkmark">✓</span>
          <h1>MyTasks</h1>
        </div>
      </div>

      <nav className="top-menu">
        <ul className="menu-items">
          <li className="menu-item active">
            <a href="#home">Home</a>
          </li>
          <li className="menu-item">
            <a href="#mytasks">My Stuff</a>
          </li>
          <li className="menu-item">
            <a href="#about">About</a>
          </li>
        </ul>
      </nav>

      <div className="user-corner">
        {isAuthenticated ? (
          <div className="user-box">
            <div className="user-hello">
              <span className="hi-text">Hi,</span>
              <span className="user-name">{username}</span>
            </div>
            <button onClick={logout} className="signout-btn">
              Sign out
            </button>
          </div>
        ) : (
          <div className="login-btns">
            <button className="signin-btn">Sign in</button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
