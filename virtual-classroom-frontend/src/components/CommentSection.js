import React, { useState } from 'react';
import axios from 'axios';

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const fetchComments = () => {
    axios.get('/api/comments') // Adjust the endpoint as needed
      .then(response => setComments(response.data))
      .catch(error => console.error('Error fetching comments:', error));
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    axios.post('/api/comments', { text: newComment })
      .then(response => {
        setComments([...comments, response.data]);
        setNewComment('');
      })
      .catch(error => console.error('Error adding comment:', error));
  };

  return (
    <div className="container">
      <h2>Comments</h2>
      <ul className="list-group">
        {comments.map(comment => (
          <li key={comment._id} className="list-group-item">
            {comment.text}
          </li>
        ))}
      </ul>
      <form onSubmit={handleAddComment}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Comment</button>
      </form>
    </div>
  );
};

export default CommentSection;
