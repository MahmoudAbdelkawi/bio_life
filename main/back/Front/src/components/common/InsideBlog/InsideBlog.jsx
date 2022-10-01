import React  from "react";
import Comments from "../comments/Comments";
import { useState,useEffect } from "react";
import {useParams} from 'react-router-dom';
import {getBlog,putBlogLikes,getIsLiked} from '../../../services/blogServices';
import {getCurrentUser} from '../../../services/loginServices';
import "./InsideBlog.css";

let isLiked,likes;
function  InsideBlog () {
  const PF = "https://biollife.herokuapp.com/uploads/";
  const [blog, setBlog] = useState([]);
   let id = useParams();
   id=id.id;
   const user = getCurrentUser();
   const createdAt = new Date(blog.createdAt).toLocaleDateString();
  useEffect(() => {
    async function get() {
      const blogResult = await getBlog(id);
      setBlog(blogResult.data);
      likes=blogResult.data.likes.length;
    }
    get();
    async function getLikes() {
      const likeResult = await getIsLiked(id);
      isLiked=likeResult.data;
     
    }
    if(user){
    getLikes();
    }  
  
  },[id,user]);
 
    return (
      <>
        <div className="container__cardblog">
          <div className="card__InsideBlog">

          <img
                src={PF+blog.image}
                alt="#"
                />
                 <h4>{blog.title}</h4>
            <div className="card__header">
          
                <div className="user__infoblog">
                <small id="date_blog">{createdAt}</small>
                {user&&(
                
                  <i className={isLiked === 'nothing'? 'far fa-heart':'fas fa-heart liked'} id="like" onClick={()=>{putBlogLikes(id);window.location.reload()}}>
                  {likes=likes === 0?'':likes}</i>
                )}
              </div>   
                </div>

            <div className="card__bodyblog">
             
              <p>{blog.subject}</p>
            </div>
           
          </div>
          
          <div className="card__footerblog">
              <div className="userblog">
                <div
                  
                  className="user__imageblog"
                ></div>
              </div>
            </div>
            
            <Comments />
            
        </div>
      </>
    );
  }

export default InsideBlog;