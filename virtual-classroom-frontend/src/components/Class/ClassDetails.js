// src/components/ClassDetails.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ClassDetails = () => {
  const { classId } = useParams();
  const [classDetails, setClassDetails] = useState(null);

  useEffect(() => {
    const fetchClassDetails = async () => {
      try {
        const response = await axios.get(`/api/classes/${classId}`);
        setClassDetails(response.data);
      } catch (error) {
        console.error('Error fetching class details:', error);
      }
    };

    fetchClassDetails();
  }, [classId]);

  if (!classDetails) return <p>Loading...</p>;

  return (
    <div>
      <h2>{classDetails.title}</h2>
      {/* Display units and sessions */}
      {/* Display discussion section */}
    </div>
  );
};

export default ClassDetails;
