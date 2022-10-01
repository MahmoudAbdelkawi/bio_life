import React from "react";
import { useState,useEffect } from "react";
import { Link } from 'react-router-dom';
import './EventCard.css';
import { getEvents } from "../../../services/eventServices";

function EventCard () {
  // const PF = "https://biollife.herokuapp.com/uploads/";
  const [events,setEvents] = useState([]);

  useEffect(() => {
    async function get() {
      const eventResult = await getEvents();
      setEvents(eventResult.data);
    }
    get();
  },[]);
  
    return (
      <>
        {/* START BLOG */}
        <div className="container-event">
        {events?.map((event)=>(
        
        
          <div className="card-event" key={event._id}>
            <figure className="card__thumb-event">
              <img 
              // src={PF+event.image}
              src="https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000"
               alt="event" className="card__image-event" />
              <figcaption className="card__caption-event">
                <h2 className="card__title-event">{event.title}</h2>
                <p className="card__snippet-event">{event.subject.slice(0,50)}</p>
                <Link   to={`/InsidEevent/${event._id}`} className="card__button-event" >اقرأ المزيد</Link>
              </figcaption>
            </figure>
           
            <span className="card__date__event">{new Date(event.createdAt).toLocaleDateString()}</span>
            <span className="card__author__event">{event.author}</span>

          </div>
          ))}
        </div>

        {/* END BLOG */}
       
      </>
      );
        }

export default EventCard;