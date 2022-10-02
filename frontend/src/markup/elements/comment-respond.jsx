import React, { Component } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

// import { ToastContainer,toast } from "react-toastify";
import { getCurrentUser } from "../../services/loginServices";
const user = getCurrentUser();





const CommentRespond = ({
	handleSubmit,
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
    //   toast.warn("سجّل معنا كي يمكنك التعليق");
    }
  }, []);
		return(
			<>
				<div className="comment-respond" id="respond">
					<h4 className="widget-title">Leave a Comment</h4>
					<form className="comment-form" id="commentform">
						{/* <p className="comment-form-author">
							<label for="author">Name <span className="required">*</span></label>
							<input type="text" value="" name="Author"  placeholder="Author" id="author"/>
						</p>
						<p className="comment-form-email">
							<label for="email">Email <span className="required">*</span></label>
							<input type="text" value="" placeholder="Email" name="email" id="email"/>
						</p> */}
						<p className="comment-form-comment">
							<label for="comment">Comment</label>
							<textarea rows="8" name="comment" placeholder="Comment" id="comment" value={text}
        // disabled = {!user?true:false}
        onChange={(e) => setText(e.target.value)}></textarea>
						</p>
						<p className="form-submit">
							<input type="submit" value="Submit Comment" className="submit" id="submit" name="submit"/>
						</p>
					</form>
				</div>
				
			</>
		);
	
}

export default CommentRespond;