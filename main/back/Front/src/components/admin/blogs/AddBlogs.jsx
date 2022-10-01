import "./addBlogs.css";
import { useState, useEffect } from "react";
import { getDepartments } from "../../../services/departmentsServices";
import { toast,ToastContainer } from "react-toastify";
import axios from 'axios';

function AddBlogs() {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [author, setAuthor] = useState("");
  const [departments, setDepartments] = useState([]);
  const [department, setDepartment] = useState("");
  const [image,setImage]=useState(null);
  const [type,setType]=useState('');

  const onSubmit = async(e) => {
    e.preventDefault();
    const newPost = {
      title,
      subject,
      author,
      department,
      type
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
  if(type==='blog'){
    const res = await axios.post("https://biollife.herokuapp.com/api/blogs", newPost);
    window.location='/dashboard/blogs';
  }else if(type==='event'){
    const res = await axios.post("https://biollife.herokuapp.com/api/events", newPost);
    window.location='/dashboard/blogs';
  }
 
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
    <div className="AddBlog-container">
      <form className="form" onSubmit={onSubmit}>
        <h2 className="form-title">اضف مدونة</h2>
        <label>العنوان</label>
        <input
          type="text"
          required
          className="title-input"
          placeholder="عنوان المدونة"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>المؤلف</label>
        <input
          type="text"
          required
          className="title-input"
          placeholder="مؤلف المدونة"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <p>اضف صورة</p>
        <div className="image-container">
          <label htmlFor="fileInput">+</label>
          <input
            style={{ display: "none" }}
            type="file"
            id="fileInput"
            required
            className="title-input"
           
            onChange={(e)=>setImage(e.target.files[0])}
          />
        </div> 
        <label>اضف المدونة</label>
        <textarea
          type="text"
          required
          className="title-input"
          placeholder="محتوى المدونة"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <label>القسم</label>
        <select onChange={(e) => setDepartment(e.target.value)}>
        <option>اختر القسم</option>
          {departments.map((department) => (
            <option key={department._id} value={department._id}>
              {department.name}
            </option>
          ))}
        </select>
        <label>النوع</label>
        <select onChange={(e) => setType(e.target.value)}>
          <option>اختر النوع</option>
          <option value='blog'>مدونة </option>
          <option value='event'>فعالية </option>
        </select>
        
          <button className="supmit-button" type="submit" onSubmit={onSubmit}>
            اضف المدونة
          </button>
      </form>
      <ToastContainer/>
    </div>
  );
}

export default AddBlogs;