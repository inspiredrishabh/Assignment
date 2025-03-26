import React from "react";
import TodoItem from "./TodoItem";
import { useTodo } from "../contexts/TodoContext";

const TodoList = () => {
  const { tasks } = useTodo();

  // Group tasks by priority
  const highPriorityTasks = tasks.filter((task) => task.priority === "High");
  const mediumPriorityTasks = tasks.filter(
    (task) => task.priority === "Medium"
  );
  const lowPriorityTasks = tasks.filter((task) => task.priority === "Low");

  // Combine tasks in priority order
  const sortedTasks = [
    ...highPriorityTasks,
    ...mediumPriorityTasks,
    ...lowPriorityTasks,
  ];

  if (tasks.length === 0) {
    return (
      <div className="empty-list">
        <p>No tasks yet. Add a task to get started!</p>
      </div>
    );
  }

  return (
    <div className="todo-list">
      <h2>Your Tasks</h2>
      <div className="tasks-container">
        {sortedTasks.map((task) => (
          <TodoItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
