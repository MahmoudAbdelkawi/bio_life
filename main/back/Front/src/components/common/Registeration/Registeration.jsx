/* eslint-disable no-unused-vars */
import React, { useState} from "react";
import "./Registeration.css";
import { register } from "../../../services/usersServices";
import { getCurrentUser } from "../../../services/loginServices";
import {useNavigate } from "react-router-dom";
import { toast,ToastContainer } from "react-toastify";

function Register() {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await register(username, email, password);

      if (getCurrentUser) {
        navigate("/Login");
        toast.success("تم إنشاء الحساب بنجاح.. يرجى تسجيل الدخول");
      }
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        toast.error(ex.response.data);
      }
    }
  };

  return (
    <>
      <div className="register">
       
        <form className="registerForm" onSubmit={onSubmit}>
        <p className="registerTitle">التسجيل</p>

          <label>اسم المستخدم</label>
          <input
            className="registerInput"
            value={username}
            type="text"
            placeholder="...ادخل اسم المستخدم"
            onChange={(e) => setName(e.target.value)}
          />
          <label>البريد الإلكتروني</label>
          <input
            className="registerInput"
            value={email}
            type="text"
            placeholder="...ادخل البريد الإلكتروني "
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>كلمة المرور</label>
          <input
            className="registerInput"
            value={password}
            type="password"
            placeholder="...ادخل كلمة المرور "
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="registerButton" type="submit">
                إنشاء حساب         
          </button>
         
        </form> 
      
  </div>
  <br/>
   <ToastContainer/>
  </>
);
}

export default Register;
