import React from "react";
import { useTodo } from "../contexts/TodoContext";

const TodoItem = ({ task }) => {
  const { deleteTask, updateTaskPriority, toggleTaskCompletion } = useTodo();

  // Get CSS class based on priority
  const getPriorityClass = () => {
    switch (task.priority) {
      case "High":
        return "priority-high";
      case "Medium":
        return "priority-medium";
      case "Low":
        return "priority-low";
      default:
        return "";
    }
  };

  return (
    <div
      className={`todo-item ${getPriorityClass()} ${
        task.completed ? "completed" : ""
      }`}
    >
      <div className="todo-content">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTaskCompletion(task.id)}
          className="todo-checkbox"
        />

        <span className="todo-title">{task.title}</span>
      </div>

      <div className="todo-actions">
        <select
          value={task.priority}
          onChange={(e) => updateTaskPriority(task.id, e.target.value)}
          className="priority-update"
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        <button onClick={() => deleteTask(task.id)} className="delete-button">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
