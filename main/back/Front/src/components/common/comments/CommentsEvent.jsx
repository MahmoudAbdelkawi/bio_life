import { useState, useEffect } from "react";
import React from 'react';
import CommentForm from "./CommentForm";
import CommentEvent from "./CommentEvent";
import '../InsideBlog/InsideBlog.css';
import { getEventComments, postEventComments } from "../../../services/eventServices";
import { useParams,useNavigate } from "react-router-dom";


const CommentsEvent = () => {
  const [comments, setComments] = useState([]);
  let { id } = useParams();
  const [activeComment, setActiveComment] = useState(null);
  
  useEffect(() => {
    async function get() {
      const result = await getEventComments(id);
      setComments(result.data);
    }
    get();
  }, []);

  const addComment = async (text) => {
    await postEventComments(text, id);
  };

  return (
    <div className="comments">
     
      <CommentForm submitLabel="انشر تعليقك" handleSubmit={addComment} />
      <div className="comments-container">

        {comments.map((rootComment) => (
          <CommentEvent
            key={rootComment._id}
            eventComment={rootComment}
            activeComment={activeComment}
            setActiveComment={setActiveComment}
            addComment={addComment}
          />
        ))}
      </div>
    </div>
  );
};

export default CommentsEvent;
