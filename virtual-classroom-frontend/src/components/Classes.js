// src/components/Classes.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Classes = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await axios.get('/api/classes');
        setClasses(response.data);
      } catch (error) {
        console.error('Error fetching classes:', error);
      }
    };

    fetchClasses();
  }, []);

  return (
    <div>
      <h2>Available Classes</h2>
      <ul>
        {classes.map((cls) => (
          <li key={cls._id}>
            <a href={`/classes/${cls._id}`}>{cls.title}</a>
          </li>
        ))}
      </ul>
      {/* Conditionally render create class button based on role */}
      { /* Add logic to show this button only if user is an instructor/admin */ }
    </div>
  );
};

export default Classes;
