import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const createClass = async (classData, token) => {
  const res = await axios.post(`${API_URL}/class`, classData, {
    headers: { 'x-auth-token': token }
  });
  return res.data;
};

export const getClassList = async (token) => {
  const res = await axios.get(`${API_URL}/classes`, {
    headers: { 'x-auth-token': token }
  });
  return res.data;
};
