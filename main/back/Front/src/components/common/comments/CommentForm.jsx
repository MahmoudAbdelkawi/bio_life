import React,{  useState,useEffect } from "react";
import { ToastContainer,toast } from "react-toastify";
import { getCurrentUser } from "../../../services/loginServices";
const user = getCurrentUser();



const CommentForm = ({
  handleSubmit,
  submitLabel,
  initialText = "",
}) => {
  const [text, setText] = useState(initialText);
  const isTextareaDisabled = text.length === 0;
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(text);
    setText("");
  };
  useEffect(() => {
    if(!user){
      toast.warn("سجّل معنا كي يمكنك التعليق");
    }
  }, []);
  return (
    <>
    <form onSubmit={onSubmit}>
      <textarea
        className="comment-form-textarea"
        value={text}
        disabled = {!user?true:false}
        onChange={(e) => setText(e.target.value)

        }
        
      />
     
      <button className="comment-form-button" disabled={isTextareaDisabled}
       >
        {submitLabel}
      </button>

    </form>
 
    <ToastContainer/>
    </>
  );
 
};

export default CommentForm;
