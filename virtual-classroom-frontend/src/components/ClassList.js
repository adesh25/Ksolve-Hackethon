import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ClassList = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    axios.get('/api/classes')
      .then(response => setClasses(response.data))
      .catch(error => console.error('Error fetching classes:', error));
  }, []);

  return (
    <div className="container">
      <h1>Classes</h1>
      <ul className="list-group">
        {classes.map(cls => (
          <li key={cls._id} className="list-group-item">
            <Link to={`/classes/${cls._id}`}>{cls.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClassList;
