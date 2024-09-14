import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Updated to useNavigate

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Replacing useHistory with useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/auth/login', { email, password })
      .then(response => {
        localStorage.setItem('token', response.data.token);
        navigate('/'); // Replacing history.push('/') with navigate('/')
      })
      .catch(error => console.error('Login error:', error));
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input 
            type="email" 
            className="form-control" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input 
            type="password" 
            className="form-control" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default Login;
