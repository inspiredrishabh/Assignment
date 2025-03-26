import React, { createContext, useState, useContext, useEffect } from "react";
import { getTasks, saveTasks } from "../utils/localStorage";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Load tasks from localStorage on component mount
    setTasks(getTasks());
  }, []);

  useEffect(() => {
    // Save tasks to localStorage whenever they change
    saveTasks(tasks);
  }, [tasks]);

  const addTask = (title, priority) => {
    if (!title.trim()) return;

    const newTask = {
      id: Date.now(),
      title: title.trim(),
      priority: priority || "Medium",
      completed: false,
      createdAt: new Date().toISOString(),
    };

    setTasks([newTask, ...tasks]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const updateTaskPriority = (taskId, newPriority) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, priority: newPriority } : task
      )
    );
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <TodoContext.Provider
      value={{
        tasks,
        addTask,
        deleteTask,
        updateTaskPriority,
        toggleTaskCompletion,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => useContext(TodoContext);
