import React from "react";
import { useEffect, useState } from "react";
import { getServices } from "../../../services/serviceServices";
import "./Services.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css/navigation";


function Servicess() {
  // const PF = "https://biollife.herokuapp.com/uploads/";
  const [services, setServices] = useState([]);
  useEffect(() => {
    async function get() {
      const serviceResult = await getServices();
      setServices(serviceResult.data);
      console.log(serviceResult.data)
    }
    get();
  }, []);
  return (
    <>
    <div className="servicesHome-container">
    <h1 className="section-title-ServicesHome">
    <span style={{ fontFamily: "'Cairo', sans-serif" }}>الخدمات</span>
  </h1>
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
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper-servises"
      >
        {/* Start of .other-servises */}

        {services?.map((service) => (
          <SwiperSlide key={service._id}>
            <div className="other-services-home" id="services">
          
              {/* <div className="container-servicesHome"> */}
                <div className="other-services__cardsHome">
                  <div className="card-item" key={service._id}>
                    <div className="icon">
                    <img
                    // src={PF+service.image}
                    src="https://pyxis.nymag.com/v1/imgs/458/840/ff55e471f1820f25d709327f92c8d6b54e-27-teeth.rsquare.w700.jpg"
                    alt="Product"
                    className="img-responsive"
                  />
                    </div>
                    <h2
                      className="title"
                      style={{ fontFamily: "'Cairo', sans-serif" }}
                    >
                      {service.title}
                    </h2>
                    {service.points?.map((p) => (
                      <ul className="lists"  key={Math.floor(100000 + Math.random() * 900000)}>
                        <li style={{ fontFamily: "'Cairo', sans-serif" }}>
                        
                          {p}
                        </li>
                      </ul>
                    ))}
                    <br />
                  </div>
                </div>
              </div>
            {/* </div> */}
          </SwiperSlide>
        ))}

        {/* End of .other-servises */}
      </Swiper>
      </div>
    </>
  );
}
export default Servicess;
