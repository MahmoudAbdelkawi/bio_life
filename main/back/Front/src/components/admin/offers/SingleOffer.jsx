import './singleOffer.css';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {deleteOffer} from '../../../services/offerServices';

function SingleOffer (props)  {
  const PF = "https://biollife.herokuapp.com/uploads/";
  const handleDelete = ()=>{
    deleteOffer(props.id);
    window.location='/dashboard/offers'
  }
    const points = props.points.map((point) => {
        return <ol key={Math.floor(100000 + Math.random() * 900000)}><li>{point}</li></ol>
    });
    return (
        <div className='singleOffer'>
          <div className='image'>
            <img src={PF+props.image} alt="offer" />
          </div>
          <p className="singleOffer-Title">{props.title}</p>
          <ul>
            <li className='price'><p className='price-p'>سعر العرض : {props.Price} ريال  </p></li>
            <div className='desc'><p className='desc-title'>محتويات العرض</p>{points}</div>
            <li className='desc'> <p className='desc-title'>العرض يتبع الى : {props.Department}</p></li>
            <li><p className='depart'> تاريخ انتهاء العرض : {props.expireDate}</p></li>
            <li>
                <div className='delete-container'>
                     <p className='edit-text'>للمسح اضغط : </p>
                     <button className='btn-delete' type='button' onClick={handleDelete}><DeleteOutlineIcon /></button>
                </div>
            </li>
          </ul>
        </div>
    );
}

export default SingleOffer;