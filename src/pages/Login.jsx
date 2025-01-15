import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';
import '../styles/login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  // Handle login on form submit
  const handleLogin = (e) => {
    e.preventDefault();
    // Here you can add your authentication logic, for now, it's mocked
    dispatch(login({ username }));
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default Login;
