export default function TaskList({ tasks, onToggle, onDelete }) {
  if (!tasks.length) {
    return <p className="empty">No tasks yet. Add your first task.</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task._id}>
          <label>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggle(task)}
            />
            <span className={task.completed ? "done" : ""}>{task.title}</span>
          </label>
          <button className="danger" onClick={() => onDelete(task._id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
