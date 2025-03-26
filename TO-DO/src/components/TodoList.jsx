import React from "react";
import TodoItem from "./TodoItem";
import { useTodo } from "../contexts/TodoContext";

const TodoList = () => {
  const { tasks } = useTodo();

  // Group tasks by priority
  const importantTasks = tasks.filter((task) => task.priority === "High");
  const normalTasks = tasks.filter((task) => task.priority === "Medium");
  const lowPriorityTasks = tasks.filter((task) => task.priority === "Low");

  // Combine tasks in priority order
  const allTasks = [...importantTasks, ...normalTasks, ...lowPriorityTasks];

  if (tasks.length === 0) {
    return (
      <div className="no-tasks">
        <p>You don't have any tasks yet. Add something to get started!</p>
      </div>
    );
  }

  return (
    <div className="tasks-list">
      <h2>My Tasks</h2>
      <div className="tasks-wrapper">
        {allTasks.map((task) => (
          <TodoItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
