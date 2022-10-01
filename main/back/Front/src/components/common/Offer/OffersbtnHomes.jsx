import React from "react";
import "./OffersbtnHomes.css";
import { useEffect, useState } from "react";
import { reserve, reserve_user } from "../../../services/resOfferServices";
import { toast,ToastContainer } from "react-toastify";
import { useParams } from "react-router-dom";
import { getCurrentUser } from "../../../services/loginServices";
import { getOffer } from "../../../services/offerServices";
let image;

function OffersbtnHomes() {
  const PF = "https://biollife.herokuapp.com/uploads/";
  let offer = useParams();
  offer=offer.id;
  let [fname, setFName] = useState("");
  let [lname, setLName] = useState("");
  const [singleOffer, setOffer] = useState({});
  let [email, setEmail] = useState("");
  let [phoneNumber, setPhoneNumber] = useState("");
  const user = getCurrentUser();
  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      if (user) {
        await reserve_user(fname, lname, email, phoneNumber, offer);
        toast.success("سيتم التواصل معك قريبا  ");
        setTimeout(() => {
          window.location = "/";
        }, 1200);
      } else {
        await reserve(fname, lname, email, phoneNumber, offer);
        toast.success("سيتم التواصل معك قريبا  ");
        setTimeout(() => {
          window.location = "/";
        }, 1200);

      }
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        toast.error(ex.response.data);
      }
    }
  };

  useEffect(() => {
    async function get() {
      const offerResult = await getOffer(offer);
      setOffer(offerResult.data);
      image=offerResult.data.image;
    }
    get();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  if (user) {
    fname = fname ? fname : user.fname;
    lname = lname ? lname : user.lname;
    email = email ? email : user.email;
    phoneNumber = phoneNumber ? phoneNumber : user.phoneNumber;
  }
  return (
    <>
      <div className="container">
        <div className="left">
          <div className="header">
            <h2 className="animation a1">{singleOffer.title}</h2>
            <h4 className="animation a2">
              ينتهي بتاريخ{new Date(singleOffer.expiredate).toLocaleDateString()}
            </h4>
          </div>
         
            <form className="offerForm" method="post" action="#" onSubmit={onSubmit}>
              <input
                type="text"
                className="form-field animation a3"
                placeholder="الاسم الأول"
                value={fname}
                onChange={(e) => setFName(e.target.value)}
              />
              <input
                type="text"
                className="form-field animation a4"
                placeholder="الاسم الأخير"
                value={lname}
                onChange={(e) => setLName(e.target.value)}
              />
              <input
                type="email"
                className="form-field animation a4"
                placeholder="البريد الإلكتروني"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="tel"
                className="form-field animation a4"
                placeholder="رقم الجوال"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />

              <button className="animation-a6">اطلب الان</button>
            </form>
        </div>
        <div className="right">
          <img className="Offer-img"
            src={PF+image}
            alt='offer'
          />
        </div>
        <ToastContainer/>
      </div>
      
    </>
  );
}

export default OffersbtnHomes;
