import React, { useState } from 'react';
import './CommentsSection.css';

function CommentsSection (){
  const [comments, setComments] = useState([
    { id: 1, text: 'Great video!', author: 'Ofek' },
    { id: 2, text: 'Very informative.', author: 'Ziv' },
    { id: 2, text: 'I love my mom.', author: 'Yuval' },
  ]);

  const [newComment, setNewComment] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    setComments([...comments, { id: comments.length + 1, text: newComment, author: 'CurrentUser' }]);
    setNewComment('');
  };

  return (
    <div className="commentsSection">
      <h3>Comments</h3>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <strong>{comment.author}</strong>: {comment.text}
          </li>
        ))}
      </ul>
      <form onSubmit={handleCommentSubmit}>
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CommentsSection;