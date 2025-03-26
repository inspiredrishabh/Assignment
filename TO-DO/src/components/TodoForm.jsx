import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");
  const { addTask } = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTask(title, priority);
      setTitle("");
      setPriority("Medium");
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <input
          type="text"
          placeholder="Add a new task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="task-input"
          required
        />

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="priority-select"
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        <button type="submit" className="add-button">
          Add Task
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
