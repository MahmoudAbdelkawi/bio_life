import {useEffect,useState} from "react";
import "./reservations.css";
import SingleReservation from "../admin/reservation/SingleReservation";
import { resOffers,getReserve } from "../../services/reserveServices";
import SingleReserveOffer from '../admin/reservation/SingleReserveOffer';


function Reservations() {
  const [reserves, setReserves] = useState([]);
  const [resOffer, setResOffers] = useState([]);
useEffect(() => {
  async function getReserves() {
    const reserveResult = await getReserve();
    setReserves(reserveResult.data);
  }
  getReserves();

  async function getResOffers() {
    const reserveResult = await resOffers();
    setResOffers(reserveResult.data);
  }
  getResOffers();
}, []);

const reservationArray = reserves.map((res)=>(
  {
    id:res._id,
    fname: res.fname,
    lname: res.lname,
    email: res.email,
    phoneNumber:res.phoneNumber,
    res_number: res.res_number,
    date: res.date,
    doctor:res.doctor?res.doctor.name:'لم يتم التحديد',
    Department: res.department?res.department.name:res.doctor.department.name,
  }

  ));

  const reserveOfferArray = resOffer.map((res)=>(
    {
      id:res._id,
      fname:res.fname,
      lname:res.lname,
      phoneNumber:res.phoneNumber,
      offer:res.offer.title,
      price:res.offer.price,
      date:res.offer.expiredate,
      offer_number:res.offer_number
    }
  
    ));
 
  const reservationMaping = reservationArray.map((r) => {
    return (
      <SingleReservation
      id={r.id}
        key={r.id}
        fname={r.fname}
        lname={r.lname}
        phoneNumber={r.phoneNumber}
        email={r.email}
        doctor={r.doctor}
        Department={r.Department}
        date={new Date(r.date).toLocaleDateString()}
        res_number={r.res_number}
      />
    );
  });

  const reservationOfferMapping= reserveOfferArray.map((r) => {
    return (
      <SingleReserveOffer
      id={r.id}
      key={r.id}
      fname={r.fname}
      lname={r.lname}
      phoneNumber={r.phoneNumber}
      email={r.email}
      offer={r.offer}
      price={r.price}
      date={new Date(r.date).toLocaleDateString()}
      offer_number={r.offer_number}
      />
    );
  });


  return (
    <div>
      <h1 className="offer-title">الحجوزات</h1>
      <div>
        <div className="offersContainer">{reservationMaping}</div>
        <br></br><br></br>
        <div className="offersContainer">{reservationOfferMapping}</div>
      </div>
    </div>
  );
}

export default Reservations;
