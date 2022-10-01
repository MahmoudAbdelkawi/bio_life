/* eslint-disable no-unused-vars */
import "./addFormService.css";
import React, { useState } from "react";
import { toast,ToastContainer } from "react-toastify";
import axios from "axios";

function AddFormService(props) {
  // state for offer title
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  // state for points in offer form
  const [arr, setpoints] = useState([]);
  const [newpoints, setNewpoints] = useState("");
   let points=[];
  // methods for points in offer form
  const handleChangepoints = (event) => {
    setNewpoints(event.target.value);
  };

  const handleAddpoints = () => {
    setpoints([newpoints, ...arr]);
  };
  

  const onSubmit =async (e) => {
    e.preventDefault();
    for(let i=0;i<arr.length;i++){
      points[i] = arr[i]
    }
    const newPost = {
      title,
      points
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
  const res = await axios.post("https://biollife.herokuapp.com/api/services", newPost);
 window.location='/dashboard/services';
}catch (ex) {
  if (ex.response && ex.response.status === 400) {
    toast.error(ex.response.data);
  }
}
}
  return (
    <div className="AddServices-container">
      <form className="form" >
        <h2 className="form-title">اضف خدمة جديد</h2>
        <label>العنوان</label>
        <input
          type="text"
          required
          className="title-input"
          placeholder="عنوان الخدمة"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
         <p>اضف صورة الخدمة</p>
        <div className="image-container">
          <label htmlFor="fileInput">+</label>
          <input
            style={{ display: "none" }}
            type="file"
            id="fileInput"
            name="image"
            required
            className="title-input"
            placeholder="عنوان الخدمة"
            onChange={(e)=>setImage(e.target.files[0])}
          />
        </div> 
        <label>محتويات الخدمة</label>
        <input
          id="rset"
          type="text"
          required
          placeholder="الخدمة تشمل ...."
          onChange={handleChangepoints}
        />
        {arr.map((li) => (
          <li key={Date.now() + Math.random()}>{li}</li>
        ))}
        <div className="add-button-container">
          <p>أضف </p>
          <button onClick={handleAddpoints} type='button' className="add-button">
            +
          </button>
        </div>
   
          <button className="supmit-button" type="submit" onClick={onSubmit}>
            اضف الخدمة
          </button>
      </form>
  <ToastContainer/>
    </div>
    
  );
}

export default AddFormService;