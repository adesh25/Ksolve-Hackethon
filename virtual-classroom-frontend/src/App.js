import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ClassList from './components/ClassList';
import ClassDetail from './components/ClassDetail';
import Login from './components/Login';
import Register from './components/Register';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<ClassList />} />
            <Route path="/classes/:id" element={<ClassDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
