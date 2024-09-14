import React from 'react';
import { Navigate } from 'react-router-dom';

// Mock authentication function (replace with actual logic)
const isAuthenticated = () => true;

const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/" />;
};

export default PrivateRoute;
