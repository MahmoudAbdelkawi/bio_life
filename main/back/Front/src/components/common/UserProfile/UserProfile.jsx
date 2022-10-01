import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./UserProfile.css";
import { putUser, getUser } from "../../../services/usersServices";
import { myReserve } from "../../../services/reserveServices";
import { myReserveOffer } from "../../../services/resOfferServices";
import { toast,ToastContainer } from "react-toastify";

let appointment,createdAt;
function UserProfile() {
 let id = useParams();
 id=id.id;
  const [user, setUser] = useState([]);
  const [reserve, setReserve] = useState([]);
  const [myOffers, setOffers] = useState([]);
  const navigate = useNavigate();
  let [fname, setFName] = useState("");
  let [lname, setLName] = useState("");
  let [email, setEmail] = useState("");
  let [phoneNumber, setPhoneNumber] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await putUser(fname, lname, email, phoneNumber);
      navigate("/");
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        toast.error(ex.response.data);
      }
    }
  };

  useEffect(() => {
    async function get() {
      const userResult = await getUser(id);
      setUser(userResult.data);
      const reserveResult = await myReserve();
      setReserve(reserveResult.data);
      const myOfferResult = await myReserveOffer();
      setOffers(myOfferResult.data);
    }
    get();

 
  }, [id]);
  fname = fname ? fname : user.fname;
  lname = lname ? lname : user.lname;
  email = email ? email : user.email;
  phoneNumber = phoneNumber ? phoneNumber : user.phoneNumber;

  return (
    <>
      <section>
        <h1 className="hero_Account">الحساب الشخصي</h1>

        <div className="grid-container">
          <div className="grid-item1">
            <form method="post" action="#" onSubmit={onSubmit}>
              <div className="grid-item2-row1">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>الاسم الأول</label>
                    <input
                      type="text"
                      className="form-control-user"
                      value={fname}
                      onChange={(e) => setFName(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label>الاسم الأخير</label>
                    <input
                      type="text"
                      className="form-control-user"
                      value={lname}
                      onChange={(e) => setLName(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="grid-item2-row2">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>البريد الإلكتروني</label>
                    <input
                      type="text"
                      className="form-control-user"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label>رقم الجوال</label>
                    <input
                      type="text"
                      className="form-control-user"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                </div>

                <button className="btn btn-primary">تحديث</button>
              </div>
            </form>
          </div>
          <div className="grid-item2">
            <section className="page-contain">
              <h2 className="Reservations">المواعيد المسبقة</h2>

              {reserve&&
                reserve?.map((m) => (
                  <div className="data-card" key={m._id}>
                    <p>{m.res_number}</p>
                    <h6>
                      {
                        (createdAt = new Date(
                          m.createdAt ? m.createdAt : ""
                        ).toLocaleDateString())
                      }
                    </h6>
                    {
                      (appointment = m.department ? (
                        <p className="data-card-h6">{m.department?.name}</p>
                      ) : (
                        <p className="data-card-h6">Dr. {m.doctor?.name}</p>
                      ))
                    }
                  </div>
                
                ))}
            </section>
            <br />
            <section className="page-contain">
              <h2 className="Reservations">العروض المسبقة</h2>
              {myOffers &&
                myOffers?.map((myOffer) => (
                  <div className="data-card" key={myOffer._id}>
                  <p>{myOffer.offer_number}</p>
                  <h6>
                    {
                      (createdAt = new Date(
                        myOffer.offer?.expiredate ? myOffer.offer?.expiredate : ""
                      ).toLocaleDateString())
                    }
                  </h6>
                  
                  
                      <p className="data-card-h6">{myOffer.offer?.title}</p>
                    
                  
                    
                  </div>
                ))}
            </section>
          </div>
        </div>
      </section>
      <ToastContainer/>
    </>
  );
}

export default UserProfile;
