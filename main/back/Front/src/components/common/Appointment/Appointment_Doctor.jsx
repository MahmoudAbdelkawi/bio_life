import React  from 'react';
import './Appointment_Doctor.css'
import {useState} from 'react';
import {reserve_doctor,reserve_doctor_user} from '../../../services/reserveServices';
import { toast,ToastContainer } from "react-toastify";
import {getCurrentUser} from '../../../services/loginServices';



function Appointment_Doctor  (props) {
  let doctor  = props.id;
  let [fname, setFName] = useState("");
  let [lname, setLName] = useState("");
  let [email,setEmail] = useState('');
  let [phoneNumber,setPhoneNumber]=useState('');
  const [date_reserve,setDate]=useState('');
  const user = getCurrentUser();

  const onSubmit = async (e) => {
    e.preventDefault();
    
    try {
      if(user){
        await reserve_doctor_user(fname,lname,email,phoneNumber,new Date(date_reserve),doctor);
        toast.success(' سيتم التواصل معك قريبا ');
        setTimeout(() => {
          window.location = "/";
        }, 1200);

      }
        else{
        await reserve_doctor(fname,lname,email,phoneNumber, new Date(date_reserve),doctor);
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
  if(user){
    fname=fname?fname:user.fname;
    lname=lname?lname:user.lname;
    email=email?email:user.email;
    phoneNumber=phoneNumber?phoneNumber:user.phoneNumber;
  }

  return (
    <>
      <div className="container_Appointment_hero_doctor">
        <button
          type="button"
          className="btn btn-info"
          data-toggle="modal"
          data-target="#myModal2"
        >
          احجز الان
        </button>

        <div className="modal fade" id="myModal2" role="dialog">
  
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">احجز موعدك </h4>
              </div>
              <div className="modal-body">
                <form  method="post" action="#" onSubmit={onSubmit} className="reserve-form">
                  <label className='label-appointment' htmlFor="fName">الاسم الأول</label>
                  <input
                    type="text"
                    className="form-control"
                    id="fName"
                    required
                    value={fname} onChange={(e) => setFName(e.target.value)}
                  />
                  <br />
                  <label htmlFor="lName" className='label-appointment'>الاسم الأخير</label>
                  <input type="text" className="form-control" id="lName" value={lname} onChange={(e) => setLName(e.target.value)} />
                  <br />
                  <label htmlFor="emailId" className='label-appointment'>البريد الإلكتروني</label>
                  <input type="email" className="form-control" id="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                  <br />
                  <label htmlFor="mobileNo" className='label-appointment'>رقم الجوال</label>
                  <input
                    type="mobileNo"
                    className="form-control"
                    id="phoneNumber"
                    required
                    value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                  <br />
                  <label htmlFor="datetimepicker11" className='label-appointment'>
                    تاريخ الموعد
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="doctorName"
                    required
                    value={date_reserve} onChange={(e) => setDate(e.target.value)}
                  />
                

             

                  <br /> <br />
                  <button type="submit" id="submit" className="btn btn-info" >
                    احجز الان
                  </button>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer/>
      </div>
    
    </>
  );
}

export default Appointment_Doctor;
