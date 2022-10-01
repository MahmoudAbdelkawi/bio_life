import React from "react";
import CommentsEvent from "../comments/CommentsEvent";
import "./InsideBlog.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getEvent,
  putEventLikes,
  getIsLiked
} from "../../../services/eventServices";
import {getCurrentUser} from '../../../services/loginServices';

let isLiked,likes;

function InsideEvent() {
  const PF = "https://biollife.herokuapp.com/uploads/";
  const [event, setEvent] = useState([]);
  let id = useParams();
  id=id.id;
  const createdAt = new Date(event.createdAt).toLocaleDateString();
  const user = getCurrentUser();
  useEffect(() => {
    async function get() {
      const eventResult = await getEvent(id);
      setEvent(eventResult.data[0]);
      likes=eventResult.data[0].likes.length;
    }
    get();

    async function getLikes() {
      const likeResult = await getIsLiked(id);
      isLiked=likeResult.data;
     
    }
    if(user)
   { getLikes();}
  }, [id,user]);

  return (
    <>
       <>
        <div className="container__cardblog">
          <div className="card__InsideBlog">

          <img
                src={PF+event.image}
                alt="#"
                />
                 <h4>{event.title}</h4>
            <div className="card__header">
          
                <div className="user__infoblog">
                <small id="date_blog">{createdAt}</small>
                {user&&(
                
                  <i className={isLiked === 'nothing'? 'far fa-heart':'fas fa-heart liked'} id="like" onClick={()=>{putEventLikes(id);window.location.reload()}}>
                  {likes=likes === 0?'':likes}</i>
                )}
              </div>   
                </div>

            <div className="card__bodyblog">
             
              <p>{event.subject}</p>
            </div>
           
          </div>
          
          <div className="card__footerblog">
              <div className="userblog">
                <div
                  
                  className="user__imageblog"
                ></div>
              </div>
            </div>
            
            <CommentsEvent/>
            
        </div>
      </>
    </>
  );
}

export default InsideEvent;
