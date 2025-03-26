import React from "react";
import { useAuth } from "../contexts/AuthContext";

const Header = () => {
  const { isAuthenticated, username, logout } = useAuth();

  return (
    <header className="app-header">
      <h1>Todo App</h1>
      {isAuthenticated && (
        <div className="user-info">
          <span>Welcome, {username}</span>
          <button onClick={logout} className="logout-button">
            Logout
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
