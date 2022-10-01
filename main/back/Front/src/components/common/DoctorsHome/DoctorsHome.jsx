import React from "react";
import "./DoctorsHome.css";
import {Link} from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { useEffect,useState } from "react";
import { getMembers } from "../../../services/membersServices";

function DoctorsHome() {
  const [teams, setTeams] = useState([]);
  // const PF = "https://biollife.herokuapp.com/uploads/";
  useEffect(() => {
    async function get() {
      const teamResult = await getMembers();
      setTeams(teamResult.data);
    }
    get();
  }, []);
  return (
    <>
    

    <h1 className="section-title-DocHome">
    <span style={{ fontFamily:"'Cairo', sans-serif" }}>الأطباء</span>
  </h1>
      <Swiper
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
        700: {
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
       
        centeredSlides={false}
        slidesPerView={5}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
       {teams?.map((m)=>(
        <SwiperSlide key={m._id}>
          <div className="container-DoctorHome">
            <div className="row">

              <div className="Home-card-Dr col-lg-12">
                
              <div className="card-DocHome p-2 py-3 text-center">
                  <div className="img-container-doctorsHome" >
                    <img
                      // src={PF+m.image}
                      src="https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?w=2000"
                      className="img_BodyDoctors"
                      alt="#"
                    />
                  </div>

                  <h5 className="mb-0">{m.name}</h5>{" "}
                  <small className="small-doctors">{m.department?.name}</small>

                      
                  <Link  className="Book__Appointment" to={`/ProfilePage/${m._id}`} >
                  <button className="button-32" type="button"> احجز موعد</button>
                    </Link>

                

                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        ))}
      </Swiper>
    </>
  );
}

export default DoctorsHome;
