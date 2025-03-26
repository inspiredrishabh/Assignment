import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";

const Header = () => {
  const { isAuthenticated, username, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Handle window resize and close mobile menu on larger screens
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 767) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="app-header">
      <div className="header-left">
        <div className="brand">
          <span className="logo">✓</span>
          <h1>Todo App</h1>
        </div>
        
        <button 
          className={`mobile-menu-toggle ${mobileMenuOpen ? 'open' : ''}`} 
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      <nav className={`main-nav ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li className="nav-item active">
            <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
          </li>
          {windowWidth <= 767 && isAuthenticated && (
            <li className="nav-item mobile-user-info">
              <span className="mobile-greeting">Welcome, {username}</span>
              <button onClick={() => {
                logout();
                setMobileMenuOpen(false);
              }} className="mobile-logout-button">
                Logout
              </button>
            </li>
          )}
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
