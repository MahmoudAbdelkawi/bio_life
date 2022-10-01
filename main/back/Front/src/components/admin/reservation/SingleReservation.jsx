import "./singleReservation.css";
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import {putReserve} from '../../../services/reserveServices';

function SingleReservation(props) {
  let status;
  return (
    <>
    <div className="singleRes">
      <p className="singleRes-Title">
        {props.fname} {props.lname}
      </p>
      <ul>
        <li className="price">
          <p className="price-p">تاريخ الموعد :{props.date} </p>
        </li>
        <div className="desc">
          <p className="desc-title">البريد الالكتروني :{props.email}</p>
        </div>
        <div className="desc">
        <p className="desc-title">رقم الجوال :{props.phoneNumber}</p>
      </div>
        <li className="desc">
          {" "}
          <p className="desc-title">القسم: {props.Department}</p>
        </li>
        <li>
          <p className="depart"> الطبيب : {props.doctor}</p>
        </li>
        <li className="desc">
          {" "}
          <p className="desc-title">رقم الحجز : {props.res_number}</p>
        </li>
        
        <li>
          <div className="edit-container">
            <p className="edit-text">قبول :</p>
            <button className="btn-edit" onClick={()=>{putReserve(props.id,status='confirmed');window.location='/dashboard/reservations'}}>
              <DoneIcon className="edit-icon" />
            </button>
          </div>
        </li>
        <li>
          <div className="delete-container">
            <p className="edit-text">رفض: </p>
            <button className="btn-delete" onClick={()=>{putReserve(props.id,status='disconfirmed');window.location='/dashboard/reservations'}}>
              <CloseIcon />
            </button>
          </div>
        </li>
      </ul>
    </div>


    </>
  );
}

export default SingleReservation;
