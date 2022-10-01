import { useState, useEffect } from "react";
import React from 'react';
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import '../InsideBlog/InsideBlog.css';
import { getBlogComments, postBlogComments } from "../../../services/blogServices";
import { useParams,useNavigate } from "react-router-dom";
import { ToastContainer,toast } from "react-toastify";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState([]);
  let { id } = useParams();
  const [activeComment, setActiveComment] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    async function get() {
      const result = await getBlogComments(id);
      setComments(result.data);
    }
    get();
  }, []);

  const addComment = async (text) => {
    await postBlogComments(text, id);
    setComment(text);
   toast.success('تم إضافة تعليقك');
   setTimeout(() => {
    window.location.reload();
   }, 1000);
    
  };

  return (
    <div className="comments">
     
      <CommentForm submitLabel="انشر تعليقك" handleSubmit={addComment} />
      <div className="comments-container">

        {comments.map((rootComment) => (
          <Comment
            key={rootComment._id}
            blogComment={rootComment}
            activeComment={activeComment}
            setActiveComment={setActiveComment}
            addComment={addComment}
          />
        ))}
        <ToastContainer/>
      </div>
    </div>
  );
};

export default Comments;
