import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  const buttonStyle = {
    backgroundColor: '#dc3545', // Red background matching sidebar's theme
    color: '#fff', // White text
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    fontSize: '1rem',
    cursor: 'pointer',
    width: '95px', // Fixed width
    height: '50px', // Fixed height
    marginTop: 'auto', // Push the button to the bottom of the sidebar
    transition: 'background-color 0.3s, transform 0.2s',
  };

  const buttonHoverStyle = {
    backgroundColor: '#bd2130', // Darker red on hover
  };

  const buttonActiveStyle = {
    transform: 'scale(0.98)', // Slight shrink effect on click
  };

  return (
    <button
      onClick={handleLogout}
      style={buttonStyle}
      onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
      onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
      onMouseDown={(e) => (e.target.style.transform = buttonActiveStyle.transform)}
      onMouseUp={(e) => (e.target.style.transform = 'scale(1)')}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
