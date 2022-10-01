import "./addEmployee.css";
import React, { useState, useEffect } from "react";
import { getDepartments } from "../../../services/departmentsServices";
import { toast,ToastContainer } from "react-toastify";
import axios from 'axios';

function AddFormEmployee() {
  // state for offer title
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [departments, setDepartments] = useState([]);
  const [position, setPosition] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [fromTime, setFromTime] = useState("");
  const [toTime, setToTime] = useState("");
  const [fromDay, setFromDay] = useState("");
  const [toDay, setToDay] = useState("");
let[image,setImage]=useState(null);

  const onSubmit = async(e) => {
    e.preventDefault();
    const newPost = {
      name,
      email,
      department,
      fromTime,
      toTime,
      fromDay,
      toDay,
      paragraph,
      position
    }
    if (image) {
      const data =new FormData();
      const filename =new Date().toISOString()+image.name;
      data.append("name", filename);
      data.append("image", image);
    newPost.image=filename;
    try {
      await axios.post("https://biollife.herokuapp.com/api/upload", data);
      
    } catch (err) {}
  };
try{
  const res = await axios.post("https://biollife.herokuapp.com/api/members", newPost);
 window.location='/dashboard/employees';
}catch (ex) {
  if (ex.response && ex.response.status === 400) {
    toast.error(ex.response.data);
  }
}
  };
  useEffect(() => {
    async function get() {
      const departmentResult = await getDepartments();
      setDepartments(departmentResult.data);
    }
    get();
  }, []);
  return (
    <div className="AddEmp-container">
      <form className="form" onSubmit={onSubmit} noValidate>
        <h2 className="form-title">اضف موظف جديد</h2>
        <label>الاسم</label>
        <input
          type="text"
          required
          className="title-input"
          placeholder="الاسم "
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>البريد الالكتروني</label>
        <input
          type="email"
          required
          className="title-input"
          placeholder="الاسم "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p>اضف صورة الطبيب</p>
        <div className="image-container">
          <label htmlFor="fileInput">+</label>
          <input
            style={{ display: "none" }}
            type="file"
            id="fileInput"
            className="title-input"
           name="image"
            onChange={(e)=>setImage(e.target.files[0])}
          />
        </div>
        <label>القسم</label>
        <select onChange={(e) => setDepartment(e.target.value)}>
        <option>اختر القسم</option>
          {departments.map((department) => ( 
            <option key={department._id} value={department._id}>
              {department.name}
            </option>
          
          ))}
        </select>
        <label>المنصب</label>
        <input
          type="text"
          required
          placeholder="المنصب"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
        <label>نبذة عن الطبيب </label>
        <textarea
          id="rset"
          type="text"
          required
          value={paragraph}
          placeholder="اكتب هنا...."
          onChange={(e) => setParagraph(e.target.value)}
        />
        <label>من</label>
        <input
          type="time"
          required
          placeholder=" "
          value={fromTime}
          onChange={(e) => setFromTime(e.target.value)}
        />
        <label>الى</label>
        <input
          type="time"
          required
          placeholder=" "
          value={toTime}
          onChange={(e) => setToTime(e.target.value)}
        />

        <label>من</label>
        <select
          onChange={(e) => setFromDay(e.target.value)}
          required
          style={{ color: "black" }}
        >
       <option>اختر اليوم</option>
          <option value="الأحد">الأحد</option>
          <option value="الاثنين">الإثنين</option>
          <option value="الثلاثاء">الثلاثاء</option>
          <option value="الأربعاء">الأربعاء</option>
          <option value="الخميس">الخميس</option>
          <option value="السبت">السبت</option>
        </select>
        <label>الى</label>
        <select
          onChange={(e) => setToDay(e.target.value)}
          required
          style={{ color: "black" }}
        >
        <option>اختر اليوم</option>
          <option value="الأحد">الأحد</option>
          <option value="الاثنين">الإثنين</option>
          <option value="الثلاثاء">الثلاثاء</option>
          <option value="الأربعاء">الأربعاء</option>
          <option value="الخميس">الخميس</option>
          <option value="السبت">السبت</option>
        </select>

        <button className="supmit-button" onClick={onSubmit}>
          اضف الموظف
        </button>
      </form>
      <ToastContainer/>
    </div>
  );
}

export default AddFormEmployee;
