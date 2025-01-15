import React from 'react';
import LogoutButton from '../pages/LogoutButton';

const Header = () => {
  return (
    <header style={{ 
      width: 'calc(100% - 270px)',
      marginLeft: '270px',
      backgroundColor: '#343a40', padding: '15px' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ color: '#ffffff' }}>React Todo App</h1>
        <LogoutButton /> {/* Logout button inside header */}
      </nav>
    </header>
  );
};

export default Header;
