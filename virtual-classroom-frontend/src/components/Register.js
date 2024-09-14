import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');
  const navigate = useNavigate(); // Replacing useHistory with useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/auth/register', { name, email, password, role })
      .then(response => {
        localStorage.setItem('token', response.data.token);
        navigate('/'); // Replacing history.push('/') with navigate('/')
      })
      .catch(error => console.error('Registration error:', error));
  };

  return (
    <div className="container">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input 
            type="text" 
            className="form-control" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
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
        <div className="form-group">
          <label>Role</label>
          <select 
            className="form-control" 
            value={role} 
            onChange={(e) => setRole(e.target.value)} 
            required
          >
            <option value="student">Student</option>
            <option value="instructor">Instructor</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
};

export default Register;
