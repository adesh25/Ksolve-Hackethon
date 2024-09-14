import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CommentSection from './CommentSection';

const ClassDetail = () => {
  const { id } = useParams();
  const [classData, setClassData] = useState(null);

  useEffect(() => {
    axios.get(`/api/classes/${id}`)
      .then(response => setClassData(response.data))
      .catch(error => console.error('Error fetching class details:', error));
  }, [id]);

  if (!classData) return <div>Loading...</div>;

  return (
    <div className="container">
      <h1>{classData.title}</h1>
      <h2>Sessions</h2>
      <ul className="list-group">
        {classData.units.map(unit => (
          <li key={unit._id} className="list-group-item">
            <h3>{unit.title}</h3>
            {/* Render sessions here */}
          </li>
        ))}
      </ul>
      <CommentSection />
    </div>
  );
};

export default ClassDetail;
