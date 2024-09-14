import React, { useEffect, useState } from 'react';
import { getClassList } from '../../api/class';

const Dashboard = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchClasses = async () => {
      const token = localStorage.getItem('token');
      const data = await getClassList(token);
      setClasses(data);
    };

    fetchClasses();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <ul>
        {classes.map((classItem) => (
          <li key={classItem._id}>{classItem.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
