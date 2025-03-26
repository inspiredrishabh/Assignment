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

  // Get priority emoji for better visual cues
  const getPriorityEmoji = () => {
    switch (task.priority) {
      case "High":
        return "🔴 ";
      case "Medium":
        return "🟡 ";
      case "Low":
        return "🟢 ";
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
          aria-label={`Mark ${task.title} as ${task.completed ? 'incomplete' : 'complete'}`}
        />

        <span className="todo-title">
          <span className="priority-indicator" aria-hidden="true">{getPriorityEmoji()}</span>
          {task.title}
        </span>
      </div>

      <div className="todo-actions">
        <select
          value={task.priority}
          onChange={(e) => updateTaskPriority(task.id, e.target.value)}
          className="priority-update"
          aria-label="Change task priority"
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        <button 
          onClick={() => deleteTask(task.id)} 
          className="delete-button"
          aria-label={`Delete task: ${task.title}`}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
