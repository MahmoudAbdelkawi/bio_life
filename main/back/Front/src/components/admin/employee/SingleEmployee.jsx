import "./singleEmployee.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import {deleteMember} from '../../../services/membersServices';


function SingleEmployee(props) {
  const PF = "https://biollife.herokuapp.com/uploads/";
const handleDelete = ()=>{
  deleteMember(props.id);
  window.location='/dashboard/employees';
}
  return (
    <div className="singleEmp">
          <div className='image'>
            <img src={PF+props.image} alt='employee' /> 
          </div>
      <p className="singleEmp-Title">
        {props.name} 
      </p>
      <ul>
        <li className="price">
          <p className="price-p">المنصب :{props.position} </p>
        </li>
        <div className="desc">
          <p className="desc-title">البريد الالكتروني :{props.email}</p>
        </div>
        <li className="desc">
          {" "}
          <p className="desc-title">القسم: {props.Department}</p>
        </li>
        <li>
          <p className="depart"> نبذة عن : {props.paragraph}</p>
        </li>
        <li className="desc">
          {" "}
          <p className="desc-title"> ساعات العمل : {props.fromTime} - {props.toTime}</p>
        </li>
        <li className="desc">
        {" "}
        <p className="desc-title"> أيام العمل :{props.fromDay} - {props.toDay}</p>
      </li>
        <li>
          <div className="delete-container">
            <p className="edit-text">حذف: </p>
            <button className="btn-delete" type="button" onClick={handleDelete}>
              <DeleteOutlineIcon />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default SingleEmployee;
