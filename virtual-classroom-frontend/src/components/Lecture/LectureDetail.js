import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const LectureDetail = () => {
  const { sessionId } = useParams();
  const [session, setSession] = useState(null);
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchSession = async () => {
      const token = localStorage.getItem('token');
      const res = await axios.get(`http://localhost:5000/api/sessions/${sessionId}`, {
        headers: { 'x-auth-token': token }
      });
      setSession(res.data);
      setComments(res.data.discussions);
    };

    fetchSession();
  }, [sessionId]);

  const handleAddComment = async () => {
    const token = localStorage.getItem('token');
    const res = await axios.post(
      `http://localhost:5000/api/sessions/${sessionId}/comment`,
      { text: newComment },
      {
        headers: { 'x-auth-token': token }
      }
    );
    setComments([...comments, res.data]);
    setNewComment('');
  };

  if (!session) return <p>Loading...</p>;

  return (
    <div>
      <h2>{session.title}</h2>
      <p>{session.content}</p>

      <h3>Discussion</h3>
      <ul>
        {comments.map((comment) => (
          <li key={comment._id}>
            {comment.text} by {comment.author.name}
          </li>
        ))}
      </ul>

      <textarea
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Add a comment"
      ></textarea>
      <button onClick={handleAddComment}>Post Comment</button>
    </div>
  );
};

export default LectureDetail;
