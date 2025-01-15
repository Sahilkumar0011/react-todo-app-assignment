import React from 'react';
import '../styles/taskItem.css';

const TaskItem = ({ task, onDelete, onPriorityChange }) => {
  const handlePriorityChange = (e) => {
    onPriorityChange({ id: task.id, priority: e.target.value });
  };

  return (
    <div className="list-group-item d-flex justify-content-between">
      <div>{task.text}</div>
      <div>
        <button className="btn btn-sm btn-danger" onClick={() => onDelete(task.id)}>
          Delete
        </button>
        <select
          className="btn btn-sm btn-secondary ml-2"
          value={task.priority}
          onChange={handlePriorityChange}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
    </div>
  );
};

export default TaskItem;
