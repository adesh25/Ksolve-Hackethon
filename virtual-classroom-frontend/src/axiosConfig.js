import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api', // Adjust the base URL to match your backend
});

export default instance;
