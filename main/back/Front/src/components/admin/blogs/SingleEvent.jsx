import "./singleBlog.css";
import { getEvent } from "../../../services/eventServices";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';


const PF = "https://biollife.herokuapp.com/uploads/";
let department;
function SingleEvent() {
  let eventId=useParams();
  eventId=eventId.id;
  const [event,setEvent] = useState([]);
  useEffect(() => {
    async function get() {
      const result = await getEvent(eventId);
      setEvent(result.data[0]);
     department=result.data[0].department.name;
    }
    get();
  }, [eventId]);

  return (
    <div className="singleBlog">
      <h1>{event.title}</h1>
      <div className="image">
      <img
      src={PF+event.image} alt="blog"
    />
      </div>
      <div className="text-container">
        <p>{event.subject}</p>
      </div>
      <div className="info-container">
        <div className="author">{event.author}</div>
        <div className="department">{department}</div>
      </div>
    </div>
  );
}

export default SingleEvent;