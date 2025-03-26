import React from "react";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import { TodoProvider } from "./contexts/TodoContext";
import Header from "./components/Header";
import Login from "./components/Login";
import AddTaskForm from "./components/AddTaskForm";
import TasksList from "./components/TasksList";
import "./App.css";

// Main app content component
const AppContent = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="my-app">
      <Header />

      <div className="main-content">
        {isAuthenticated ? (
          <div className="tasks-area">
            <h2 className="page-title">My To-Do List</h2>
            <AddTaskForm />
            <TasksList />
          </div>
        ) : (
          <div className="login-area">
            <Login />
          </div>
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
