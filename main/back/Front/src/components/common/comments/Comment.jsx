import React from 'react';

const Comment = ({
  blogComment
}) => {
  
  const createdAt = new Date(blogComment.createdAt).toLocaleDateString();
  return (
   
    <div key={blogComment._id} className="comment">
  
      <div className="comment-right-part">
      <div className="comment-content">
          <div className="comment-author"><small id='username'>{blogComment.user.username}</small>
          <small id='date'>{createdAt}</small>
          </div>
        </div>
        <div className="comment-text">{blogComment.comment}</div>
        <hr style={{color:'#a18f8f'}}></hr>
      </div>
    </div>
    
  );
};

export default Comment;
