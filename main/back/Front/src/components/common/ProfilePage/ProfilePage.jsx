/* eslint-disable react/jsx-pascal-case */
import React  from "react";
import { useState,useEffect } from "react";
import { getMember } from "../../../services/membersServices";
import { useParams } from "react-router-dom";
import "./ProfilePage.css";
import Appointment_Doctor from "../Appointment/Appointment_Doctor";


function  ProfilePage () {
  const [member, setMember] = useState([]);
  let { id } = useParams();
  const PF = "https://biollife.herokuapp.com/uploads/";

  useEffect(() => {
    async function get() {
      const memberResult = await getMember(id);
      setMember(memberResult.data);
    }
    get();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

    return (
      <>
       
        <section className="section profilePage-section gray-bg" id="profilePage">

          <div className="container_profile">
      
            <div className="row-profilePage">
              <div className="col-lg-6">
                <div className="profilePage-avatar">
                <img
                className="blog-img"
                src={PF+member.image}
                alt="#"
                />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="profilePage-text go-to">
                  <h3 className="dark-color">د. {member.name} </h3>
                  <p>
                   {member.position}
                  </p>
                  <p>
                   {member.paragraph} :نبذة
                  </p>

                  <p>
                  {member.email} :البريد الإلكتروني
                  </p>
                    :أوقات العمل
                    <p>
                  {member.fromTime}-{member.toTime}  
                  </p>
                  <p>
                  {member.fromDay}-{member.toDay}  
                  </p>
                  <Appointment_Doctor id={member._id}/>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

export default ProfilePage;
