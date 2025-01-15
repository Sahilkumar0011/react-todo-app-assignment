import React from 'react';
import TaskItem from './TaskItem';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, updatePriority } from '../redux/tasksSlice';
import '../styles/taskList.css';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks); // Access tasks from Redux store
  const selectedPriority = useSelector((state) => state.tasks.selectedPriority); // Access selected priority from Redux store
  const dispatch = useDispatch();

  // Filter tasks based on selected priority
  const filteredTasks = selectedPriority
    ? tasks.filter((task) => task.priority === selectedPriority)
    : tasks;

  const handleDelete = (id) => {
    dispatch(deleteTask(id)); // Dispatch delete action
  };

  const handlePriorityChange = ({ id, priority }) => {
    dispatch(updatePriority({ id, priority })); // Dispatch priority update action
  };

  return (
    <div className="list-group">
      {filteredTasks.length > 0 ? (
        filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={handleDelete} // Pass the delete handler
            onPriorityChange={handlePriorityChange} // Pass the priority change handler
          />
        ))
      ) : (
        <p className="text-muted">No tasks found for the selected priority.</p>
      )}
    </div>
  );
};

export default TaskList;
