import React from "react";
import { useEffect, useState } from "react";
import { getDepartments } from "../../../services/membersServices";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel";
import "./Departments.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper";

function Departments() {
  const [departments, setDepartments] = useState([]);
  useEffect(() => {
    async function get() {
      const departmentResult = await getDepartments();
      setDepartments(departmentResult.data);
    }
    get();
  }, []);
  return (
    <>
      {/* <!-- Start of .header-bottom .services --> */}
      <div className="departmentWrapperSwiper">
      <Swiper
        centeredSlides={false}
        slidesPerView={"auto"}
        breakpoints={{
          375: {
            // width: 428,
            slidesPerView: 2,
          },
          481: {
            // phone
            // width: 1024,
            slidesPerView: 2,
          },
          768: {
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
       
        navigation={false}
        modules={[Autoplay, Navigation]}
        className="mySwiper1"
      >
     
     
        {departments?.map((department) => (
          <SwiperSlide key={department._id}>
            <div className="departments">
              <div className="container">
                <div className="departments__items owl-carousel owl-theme owl-loaded owl-drag">
                  <div className="owl-stage-outer">
                    <div
                      className="owl-stage"
                      style={{
                        transForm: "translate3d(-1425px, 0px, 0px)",
                        transition: "all 1s ease 0s",
                        width: "4560px",
                      }}
                    >
                      <div
                        className="owl-item cloned"
                        style={{ width: "285px" }}
                      >
                        <div className="departments__outer-item">
                          <div className="departments__item">
                            <div className="departments__item-icon">
                              <img
                                style={{ height: "100%" }}
                                src="./images/png/Psychological-health.png"
                                alt="الطب النفسي"
                              />
                            </div>
                            <h1 className="departments__item-title">
                              {department.name}
                            </h1>
                          <p className="departments__item-text"></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End of .departments --> */}
          </SwiperSlide>
        ))}
      </Swiper>
      </div>

    </>
  );
}
export default Departments;
