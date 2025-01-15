import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedPriority } from '../redux/tasksSlice';
import { logout } from '../redux/authSlice'; // Import the logout action
import LogoutButton from '../pages/LogoutButton'; // Import the LogoutButton component
import '../styles/sidebar.css';

const Sidebar = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const selectedPriority = useSelector((state) => state.tasks.selectedPriority);

  const handlePriorityClick = (priority) => {
    dispatch(setSelectedPriority(priority)); // Update the selected priority
  };

  const getTaskCount = (priority) => tasks.filter((task) => task.priority === priority).length;

  return (
    <div className="sidebar">
      <h2>Task Priorities</h2>
      <ul>
        {['High', 'Medium', 'Low'].map((priority) => (
          <li key={priority}>
            <button
              onClick={() => handlePriorityClick(priority)}
              style={{ fontWeight: selectedPriority === priority ? 'bold' : 'normal' }}
            >
              {priority} ({getTaskCount(priority)})
            </button>
          </li>
        ))}
      </ul>

      {/* Add the Logout Button here */}
      <div className="logout-button">
        <LogoutButton />
      </div>
    </div>
  );
};

export default Sidebar;
