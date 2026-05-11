import { useEffect, useState } from "react";
import TaskList from "./components/TaskList";

const API_BASE = import.meta.env.VITE_API_URL;

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const fetchTasks = async () => {
    const response = await fetch(`${API_BASE}/tasks`);
    const data = await response.json();
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (event) => {
    event.preventDefault();
    if (!title.trim()) return;

    await fetch(`${API_BASE}/tasks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title })
    });

    setTitle("");
    fetchTasks();
  };

  const toggleTask = async (task) => {
    await fetch(`${API_BASE}/tasks/${task._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !task.completed })
    });
    fetchTasks();
  };

  const deleteTask = async (taskId) => {
    await fetch(`${API_BASE}/tasks/${taskId}`, { method: "DELETE" });
    fetchTasks();
  };

  return (
    <main className="container">
      <h1>MERN + Jenkins Demo</h1>
      <p>Simple task app for CI/CD practice</p>

      <form className="task-form" onSubmit={addTask}>
        <input
          placeholder="Enter task title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
    </main>
  );
}
