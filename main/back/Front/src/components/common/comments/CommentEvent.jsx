import React from 'react';

const CommentEvent = ({
  eventComment
 
}) => {
  
  const createdAt = new Date(eventComment.createdAt).toLocaleDateString();
  return (
   
    <div key={eventComment._id} className="comment">
      <div className="comment-right-part">
        <div className="comment-content">
          <div className="comment-author"><small id='username'>{eventComment.user.username}</small>
          <small id='date'>{createdAt}</small>
          </div>
        </div>
        <div className="comment-text">{eventComment.comment}</div>
        <hr style={{color:'#a18f8f'}}></hr>
      </div>
    </div>
    
  );
};

export default CommentEvent;
