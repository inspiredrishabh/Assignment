import React from "react";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import { TodoProvider } from "./contexts/TodoContext";
import Header from "./components/Header";
import Login from "./components/Login";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

// Main app content component
const AppContent = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="app-container">
      <Header />

      <div className="todo-container">
        {isAuthenticated ? (
          <>
            <TodoForm />
            <TodoList />
          </>
        ) : (
          <Login />
        )}
      </div>
    </div>
  );
};

// Root App component with providers
function App() {
  return (
    <AuthProvider>
      <TodoProvider>
        <AppContent />
      </TodoProvider>
    </AuthProvider>
  );
}

export default App;
