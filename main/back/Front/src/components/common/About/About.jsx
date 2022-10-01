import React from "react";
import "./About.css";
import { useEffect, useState } from "react";
import { reserve, reserve_user } from "../../../services/reserveServices";
import { getDepartments } from "../../../services/membersServices";
import { toast } from "react-toastify";
import { getCurrentUser } from "../../../services/loginServices";

function About() {
  let [fname, setFName] = useState("");
  let [lname, setLName] = useState("");
  let [departments, setDeparts] = useState([]);
  let [department, setDepart] = useState("");
  let [email, setEmail] = useState("");
  let [phoneNumber, setPhoneNumber] = useState("");
  let [date_reserve, setDate] = useState("");

  const user = getCurrentUser();
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (user) {
        await reserve_user(
          fname,
          lname,
          email,
          phoneNumber,
          new Date(date_reserve),
          department
        );
        toast.success(' سيتم التواصل معك قريبا ');
        setTimeout(() => {
          window.location = "/";
        }, 1200);
      } else {
        await reserve(
          fname,
          lname,
          email,
          phoneNumber,
          new Date(date_reserve),
          department
        );
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
   

    async function getDeparts() {
      const departResult = await getDepartments();
      setDeparts(departResult.data);
    }
    getDeparts();

  }, []);
  if(user){
    fname=fname?fname:user.fname;
    lname=lname?lname:user.lname;
    email=email?email:user.email;
    phoneNumber=phoneNumber?phoneNumber:user.phoneNumber;
  }
  return (
    <>
      {/* Start of .about-4 */}
      <section className="about-4" id="about">
        <div className="latest-news__bg">
          <div className="icon"></div>
        </div>
        <div className="container">
          <div className="content">
            <div className="video">
              <div className="img">
                <img
                  src='./images/png/D.khalid.png'
                  alt="#"
                />
              </div>
            </div>
            <div className="content-right ar">
              <h1 className="section-title-About">
                <br />
                <p
                  style={{
                    fontFamily: "'Cairo', sans-serif",
                    fontSize: "2rem",
                  }}
                  className="Jeddah"
                >
                جدة-المملكة العربية السعودية
                </p>
              </h1>
              <h2 style={{ fontFamily: "'Cairo', sans-serif" }}>
              نحن نقدم خطط رعاية صحية بأسعار معقولة وحزم تأمين للعملاء.
              </h2>
              <p style={{ fontFamily: "'Cairo', sans-serif" }}>
              تضم عيادة بايو لايف العديد من التخصصات التي تأسست عام 2017 يقدم خدمات تشخيصية وعلاجية في عدة مجالات. بلغت نسبة المراجعين 32٪ بنهاية عام 2017 ، وبالمقارنة ارتفع عدد المراجعين بنسبة 81٪ حتى عام 2021. 
              مثل طب الأسنان والأمراض الجلدية والتجميل وطب الأسرة والتغذية والطب النفسي وجراحة العظام كما استقطبت عيادة بايو لايف عددًا أكبر من الاستشاريين والمتخصصين من الطاقم الطبي ، وكانت إدارة بايو لايف حريصة على توفير أحدث التقنيات في جميع التخصصات.
               تم تقديم أفضل الخدمات الصحية والعلاجية وفقًا للمعايير الدولية ، وتم العمل على العديد من البرامج التوعوية التي كان لها أثر كبير في رفع مستوى الوعي.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <div className='formBody'>
      <div className='container-about-aoointement'>
        <div className='contactBox'>
          <div className='left-about'></div>
          <div className='right-about'>
            <h2 className="h2q">احجز الان</h2>
            <form className="form-about"  onSubmit={onSubmit}>
            <input type="text" className='field' placeholder="الاسم الأول"  required
            value={fname} onChange={(e) => setFName(e.target.value)} />
            <input type="text" className='field' placeholder="الاسم الأخير" value={lname} onChange={(e) => setLName(e.target.value)}  />
            <input type="email" className='field' placeholder="البريد الإلكتروني" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="tel" className='field' placeholder="رقم الجوال" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
            <input
            type="date"
            className="field"
            value={date_reserve} onChange={(e) => setDate(e.target.value)}
          />
                
                <select name="section" id="section" className='field'   onChange={(e) => setDepart(e.target.value)}
                value={department}>
                <option>select</option>
                {departments.map((d) => (
                  <option key={d._id} value={d._id}>
                    {d.name}
                  </option>
                ))}
              </select>
            
            <button className='btn-appoin-about'>احجز الآن</button>
            </form>
          </div>
        </div>
      </div>
    </div>

      {/* End of .about-4 */}
    </>
  );
}

export default About;
