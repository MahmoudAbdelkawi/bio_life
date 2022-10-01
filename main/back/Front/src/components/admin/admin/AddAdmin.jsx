import "./addAdmin.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../../services/adminsServices";
import { toast, ToastContainer } from "react-toastify";
function AddAdmin() {
  // state for data
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [isSubAdmin, setIsSubAdmin] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(name, email, password, isAdmin, isSubAdmin);
      navigate("/dashboard/admins");
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        toast.error(ex.response.data);
      }
    }
  };
 
  return (
    <div className="addAdmin-container">
      <ToastContainer />
      <form className="form" onSubmit={onSubmit}>
        <h2 className="form-title">اضف جديد</h2>
        <label>الاسم</label>
        <input
          type="text"
          required
          value={name}
          className="title-input"
          placeholder="الاسم "
          onChange={(e) => setName(e.target.value)}
        />
        <label>المنصب</label>
        <select
          onChange={(e) => {
          if(e.target.value==='admin'){
            setIsAdmin(true);
            setIsSubAdmin(false);
          }else{
            setIsAdmin(false);
            setIsSubAdmin(true);
          }
          }}
        >
           <option>
            اختر
          </option>
          <option value='admin'>
            Admin
          </option>
          <option value='subadmin'>
            Sub admin
          </option>
        </select>
        <label>البريد الالكتروني</label>
        <input
          type="text"
          required
          value={email}
          className="title-input"
          placeholder="البريد الالكتروني "
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>الرمز السري</label>
        <input
          type="text"
          required
          value={password}
          className="title-input"
          placeholder="الرمز السري "
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="supmit-button">اضف </button>
      </form>
    </div>
  );
}

export default AddAdmin;
