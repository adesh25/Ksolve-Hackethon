// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Virtual Classroom</h1>
      <nav>
        <Link to="/login">Login</Link> | 
        <Link to="/register">Register</Link> | 
        <Link to="/classes">Classes</Link>
      </nav>
    </div>
  );
};

export default Home;
