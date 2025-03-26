import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

const AddTaskForm = () => {
  const [taskText, setTaskText] = useState("");
  const [importance, setImportance] = useState("Medium");
  const { addTask } = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      addTask(taskText, importance);
      setTaskText("");
      setImportance("Medium");
    }
  };

  return (
    <form className="add-task-box" onSubmit={handleSubmit}>
      <div className="input-row">
        <div className="text-field-container">
          <input
            type="text"
            placeholder="Type your task here..."
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            className="task-text-input"
            required
          />
        </div>

        <div className="dropdown-container">
          <select
            value={importance}
            onChange={(e) => setImportance(e.target.value)}
            className="importance-dropdown"
          >
            <option value="High">Important!</option>
            <option value="Medium">Normal</option>
            <option value="Low">Low priority</option>
          </select>
        </div>

        <div className="button-container">
          <button type="submit" className="save-task-btn">
            Save Task
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddTaskForm;
