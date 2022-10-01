import React from "react";
import { getOffers } from "../../../services/offerServices";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import "./Offer.css";
import { Link } from "react-router-dom";

function Offer() {
  const [offers, setOffers] = useState([]);
  // const PF = "https://biollife.herokuapp.com/uploads/";
  useEffect(() => {
    async function get() {
      const offerResult = await getOffers();
      setOffers(offerResult.data);
    
    }
    get();
  }, []);
 
  return (
    <>
      <h1 className="section-title-OfferHome">
        <span style={{ fontFamily: "'Cairo', sans-serif" }}>العروض</span>
      </h1>
      {offers.length !==0 &&(
        <React.Fragment>
        <Swiper
        centeredSlides={false}
        slidesPerView={"auto"}
        breakpoints={{
          320: {
            // width: 428,
            slidesPerView: 1,
          },
          481: {
            // phone
            // width: 1024,
            slidesPerView: 2,
          },
          769: {
            // ipad
            // width: 1440,
            slidesPerView: 3,
          },
          1025: {
            // laptop
            // width: 1440,
            slidesPerView: 4,
          },
          1201: {
            // laptop , desktop
            // width: 1440,
            slidesPerView: 4,
          },
        }}
        spaceBetween={1}
        autoplay={{
          delay: 2333500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiperOffer"
      >
     
        {offers?.map((offer)=>(

          <SwiperSlide key={offer._id}>

            <div className="shell-offerHome"> 
                <div className="row-offers">
                  <div className="col-md-3-offer">
                    <div className="wsk-cp-product-offer">
                      <div className="wsk-cp-img-offer">
                        <img
                          // src={PF+offer.image}
                          src="https://pyxis.nymag.com/v1/imgs/458/840/ff55e471f1820f25d709327f92c8d6b54e-27-teeth.rsquare.w700.jpg"
                          alt="Product"
                          className="img-responsive"
                        />
                      </div>
                      <div className="wsk-cp-text-offer">
                        <div className="category-offer">
                          <span>{new Date(offer.expiredate).toLocaleDateString()}</span>
                        </div>
                        <div className="title-product-offer">
                          <h3>{offer.title}</h3>
                        </div>
                        <div className="description-prod-offer">
                        {offer.points?.map((p) => (
                          <p key={Math.floor(100000 + Math.random() * 900000)}>{p}</p>
                        ))}
                      </div>
                        <div className="card-footer-offer">
                          <span className="price-offer">{offer.price} SR</span>
                          <Link to={`/booking-offer/${offer._id}`} offer={offer._id}>
                          <button
                          type="button"
                          className="btn  btn-OfferHome"
                        >
                          اطلب الان
                        </button>
                        </Link>
                        </div>
                        </div>
                     </div>
                  </div>
              </div>

            </div>
          </SwiperSlide>
          ))}

      </Swiper>
        </React.Fragment>
      )}
     
      {offers.length===0&&
      <React.Fragment>
      <div className="no-offers">
      <h1 className="label-no-offers">انتظروا عروضنا قريبا</h1>
      </div>
      </React.Fragment>
      }
    </>
  );
}

export default Offer;
