import "./blogCard.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { Link } from "react-router-dom";
import {deleteEvent} from '../../../services/eventServices';

function EventCard(props) {
  const PF = "https://biollife.herokuapp.com/uploads/";
  const handleDelete=()=>{
   deleteEvent(props.id);
   window.location='/dashboard/Blogs'
  }
  return (
    <div className="cardBlog">
      <h1>{props.title}</h1>
      <div className="image">
        <img src={PF+props.image} alt='event'/>
      </div>
      <div className="text">{props.subject}</div>
      <div className="info-container">
        <div className="author">{props.author}</div>
        <div className="department">{props.department}</div>
        <div className="like">
          <ThumbUpIcon className="like-icon" />
          <p>{props.likes}</p>
        </div>
      </div>
      <div className="buttons-contaier">
        <div className="button-div">
          <div className="openBlog-container">
            <p className="open-text">للفتح اضغط:</p>
            <Link className="link" to={`/SingleEvent/${props.id}`}>
              <button className="blog-btn-open">
                <OpenInNewIcon />
              </button>
            </Link>
          </div>
        </div>
        <div className="button-div">
          <div className="deleteBlog-container">
            <p className="open-text">للمسح اضغط:</p>
            <button className="blog-btn-delete" type="button" onClick={handleDelete}>
              <DeleteOutlineIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;