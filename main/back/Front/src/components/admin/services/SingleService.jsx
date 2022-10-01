import "./singleService.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import {deleteServices} from '../../../services/serviceServices';


function SingleService(props) {
  
  const handleDelete = ()=>{
  deleteServices(props.id);
  window.location='/dashboard/services';
  }
  const points = props.points?.map((p) => {
    return (
      <ol  key={Math.floor(100000 + Math.random() * 900000)}>
        <li>{p}</li>
      </ol>
    );
  });
 
  const PF = "https://biollife.herokuapp.com/uploads/";
  return (
    <div className="singleService" key={props.id}>
      <div className="image">
        <img src={PF+props.image} alt="pic" />
      </div>
      <p className="singleService-Title">{props.title}</p>
      <ul>
        <div className="desc">
          <p className="desc-title">محتويات الخدمة</p>
          {points}
        </div>
        <li>
          <div className="delete-container">
            <p className="edit-text">للمسح اضغط : </p>
            <button className="btn-delete" type="button" onClick={handleDelete}>
              <DeleteOutlineIcon />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default SingleService;