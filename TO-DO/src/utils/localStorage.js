// Task storage utilities
const STORAGE_KEY_TASKS = "todo_tasks";
const STORAGE_KEY_AUTH = "todo_auth";

export const getTasks = () => {
  const tasksJson = localStorage.getItem(STORAGE_KEY_TASKS);
  return tasksJson ? JSON.parse(tasksJson) : [];
};

export const saveTasks = (tasks) => {
  localStorage.setItem(STORAGE_KEY_TASKS, JSON.stringify(tasks));
};

export const getAuthStatus = () => {
  const authJson = localStorage.getItem(STORAGE_KEY_AUTH);
  return authJson
    ? JSON.parse(authJson)
    : { isAuthenticated: false, username: null };
};

export const saveAuthStatus = (authStatus) => {
  localStorage.setItem(STORAGE_KEY_AUTH, JSON.stringify(authStatus));
};

export const clearAuthStatus = () => {
  localStorage.removeItem(STORAGE_KEY_AUTH);
};
