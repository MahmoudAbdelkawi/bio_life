import React, { useState} from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import auth from "../../../services/loginServices";
import { ToastContainer,toast } from "react-toastify";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await auth.login(email, password);

      if (auth.getCurrentUser) {
        let user = auth.getCurrentUser();
        let name = user.username?user.username:user.name;
        if(user.isSuperAdmin||user.isAdmin||user.isSubAdmin){
          toast.success(`مرحبا ${name}`);
          setTimeout(() => {
            window.location = "/dashboard";
          }, 1200);
        }else {
          toast.success(`مرحبا ${name}`);
          setTimeout(() => {
            window.location = "/";
          }, 1200);
        }
       
      }
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        toast.error(ex.response.data);
      }
    }
  };
  return (
    <>
      <div className="login">
        <form className="loginForm" onSubmit={onSubmit}>
          <span className="loginTitle">تسجيل الدخول</span>
          <label>البريد الالكتروني</label>
          <input
            className="loginInput"
            value={email}
            type="text"
            placeholder="...ادخل بريدك الالكتروني"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>كلمة المرور</label>
          <input
            className="loginInput"
            value={password}
            type="password"
            placeholder="...ادخل كلمة المرور"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="loginButton" type="submit">
            تسجيل الدخول
          </button>

          <br />
          <h6 className="signUp-link">
          ليس لديك حساب؟{" "}
            <Link to="/Register" className="Sign-up ">
              إنشاء حساب
            </Link>
          </h6>
        </form>

       
      </div>
      <ToastContainer/>
    </>
  );
}

export default Login;
