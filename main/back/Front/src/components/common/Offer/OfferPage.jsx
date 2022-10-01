import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getOffers } from "../../../services/offerServices";
import "./OfferPage.css";


function OfferPage() {
  const [offers, setOffers] = useState([]);
  const PF = "https://biollife.herokuapp.com/uploads/";
   useEffect(() => {
    async function get() {
      const offerResult = await getOffers();
      setOffers(offerResult.data);
      
    }
    get();
  }, []);
  return (
    <>
      {/* Start of .other-servises */}
      {offers.length !==0 &&(
        <React.Fragment>
        <div className="shell">
         
            <div className="col-md-3">
            {offers?.map((o)=>(
  
              <ul className="wsk-cp-product" key={o._id}>
                <li className="wsk-cp-img">
                  <img
                    src={PF+o.image}
                    alt="Product"
                    className="img-responsive"
                  />
                </li>
                <div className="wsk-cp-text">
                  <div className="category">
                    <span>{new Date(o.expiredate).toLocaleDateString()}</span>
                  </div>
                  <div className="title-product">
                    <h3>{o.title}</h3>
                  </div>
                  <div className="description-prod">
                    {o.points?.map((p) => (
                      <p key={Math.floor(100000 + Math.random() * 900000)}>{p}</p>
                    ))}
                  </div>
                  <div className="card-footer">
                    <span className="price">{o.price} SR</span>
  
                    <Link to={`/booking-offer/${o._id}`}>
                            <button
                            type="button"
                            className="btn  btn-OfferPage"
                          >
                            اطلب الان
                         
                          </button>
                          </Link>
                  </div>
                </div>
              </ul>
              ))}
            </div>
          </div>
        </React.Fragment>
      )}

      {offers.length===0&&(
        <React.Fragment>
        <div className="shell">
        <div className="container">
        <div className="no-offers-page">
        <h1 className="label-no-offers-page">انتظروا عروضنا قريبا</h1>
        </div>
        </div>
        </div>
        </React.Fragment>
               
        )}
     
      {/* End of .other-servises */}
    </>
  );
}

export default OfferPage;
