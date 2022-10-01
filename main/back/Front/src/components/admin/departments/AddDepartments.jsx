import "./addDepartments.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addDepartment } from "../../../services/departmentsServices";
import { toast, ToastContainer } from "react-toastify";

function AddDepartments() {
  // state for data
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDepartment(name);
      navigate("/dashboard/departments");
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        toast.error(ex.response.data);
      }
    }
  };

  return (
    <div className="addDepartments-container">
      <ToastContainer />
      <form className="form" onSubmit={onSubmit}>
        <h2 className="form-title">اضف قسم جديد</h2>
        <label>العنوان</label>
        <input
          type="text"
          required
          className="title-input"
          placeholder="عنوان القسم"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button className="supmit-button">اضف القسم</button>
      </form>
    </div>
  );
}

export default AddDepartments;
