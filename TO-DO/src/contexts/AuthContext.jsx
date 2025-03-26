import React, { createContext, useState, useContext, useEffect } from "react";
import users from "../data/users.json";
import {
  getAuthStatus,
  saveAuthStatus,
  clearAuthStatus,
} from "../utils/localStorage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    username: null,
    error: null,
  });

  useEffect(() => {
    // Load authentication state from localStorage on initial render
    const savedAuth = getAuthStatus();
    setAuthState((prev) => ({
      ...prev,
      isAuthenticated: savedAuth.isAuthenticated,
      username: savedAuth.username,
    }));
  }, []);

  const login = (username, password) => {
    // Find user in our "database"
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      const newAuthState = {
        isAuthenticated: true,
        username: user.username,
        error: null,
      };
      setAuthState(newAuthState);
      saveAuthStatus({
        isAuthenticated: true,
        username: user.username,
      });
      return true;
    } else {
      setAuthState((prev) => ({
        ...prev,
        error: "Invalid username or password",
      }));
      return false;
    }
  };

  const logout = () => {
    setAuthState({
      isAuthenticated: false,
      username: null,
      error: null,
    });
    clearAuthStatus();
  };

  const clearError = () => {
    setAuthState((prev) => ({
      ...prev,
      error: null,
    }));
  };

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login,
        logout,
        clearError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
