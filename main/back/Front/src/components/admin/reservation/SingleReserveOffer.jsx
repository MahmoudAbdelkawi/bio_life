import "./singleReservation.css";
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import {putReserveOffer} from '../../../services/reserveServices';

function SingleReserveOffer(props) {
let status;
  return (
    <>
    <div className="singleRes">
      <p className="singleRes-Title">
        {props.fname} {props.lname}
      </p>
      <ul>
      <div className="desc">
      <p className="desc-title">رقم الجوال :{props.phoneNumber}</p>
    </div>
        <li className="price">
          <p className="price-p">تاريخ انتهاء العرض :{props.date} </p>
        </li>
        <li className="desc">
          {" "}
          <p className="desc-title">العرض: {props.offer}</p>
        </li>
        <li>
          <p className="depart"> السعر : {props.price}</p>
        </li>
        <li className="desc">
          {" "}
          <p className="desc-title">رقم العرض : {props.offer_number}</p>
        </li>
        
        <li>
          <div className="edit-container">
            <p className="edit-text">قبول :</p>
            <button className="btn-edit" onClick={()=>{putReserveOffer(props.id,status='confirmed');window.location='/dashboard/reservations'}}>
              <DoneIcon className="edit-icon" />
            </button>
          </div>
        </li>
        <li>
          <div className="delete-container">
            <p className="edit-text">رفض: </p>
            <button className="btn-delete" onClick={()=>{putReserveOffer(props.id,status='disconfirmed');window.location='/dashboard/reservations'}}>
              <CloseIcon />
            </button>
          </div>
        </li>
      </ul>
    </div>


    </>
  );
}

export default SingleReserveOffer;
