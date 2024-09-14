import React, { useEffect, useState } from 'react';
import { getClassList } from '../../api/class';

const ClassList = () => {
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
      <h2>Available Classes</h2>
      <ul>
        {classes.map((classItem) => (
          <li key={classItem._id}>{classItem.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ClassList;
