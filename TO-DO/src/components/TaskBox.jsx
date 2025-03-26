import React from "react";
import { useTodo } from "../contexts/TodoContext";

const TaskBox = ({ task }) => {
  const { deleteTask, updateTaskPriority, toggleTaskCompletion } = useTodo();

  // Get CSS class based on priority
  const getImportanceClass = () => {
    switch (task.priority) {
      case "High":
        return "important-task";
      case "Medium":
        return "normal-task";
      case "Low":
        return "not-urgent";
      default:
        return "";
    }
  };

  // Get priority emoji for better visual cues
  const getEmojiIcon = () => {
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
      className={`task-box ${getImportanceClass()} ${
        task.completed ? "done" : ""
      }`}
    >
      <div className="task-left-side">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTaskCompletion(task.id)}
          className="done-checkbox"
          aria-label={`Mark ${task.title} as ${
            task.completed ? "not done" : "done"
          }`}
        />

        <span className="task-text">
          <span className="task-icon" aria-hidden="true">
            {getEmojiIcon()}
          </span>
          {task.title}
        </span>
      </div>

      <div className="task-right-side">
        <select
          value={task.priority}
          onChange={(e) => updateTaskPriority(task.id, e.target.value)}
          className="change-importance"
          aria-label="Change importance"
        >
          <option value="High">Important!</option>
          <option value="Medium">Normal</option>
          <option value="Low">Low priority</option>
        </select>

        <button
          onClick={() => deleteTask(task.id)}
          className="remove-btn"
          aria-label={`Delete task: ${task.title}`}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default TaskBox;
