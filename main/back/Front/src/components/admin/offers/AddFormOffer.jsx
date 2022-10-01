import "./addFormOffer.css"
import React, { useState,useEffect } from 'react';
import { Link } from "react-router-dom";
import {getDepartments} from '../../../services/departmentsServices';
import axios from 'axios';
import { toast,ToastContainer } from "react-toastify";

function AddFormOffer ()  {
   let [image,setImage]=useState(null);
    const [departments, setDepartments] = useState([]);
    useEffect(() => {
      async function get() {
        const departmentResult = await getDepartments();
        setDepartments(departmentResult.data);
      }
      get();
    }, []);
    // state for offer title
    const [ title , setTitle ] = useState([]);
    // methods for title in offer form 
    const handleTitleChange = e => {
        setTitle(e.target.value)
    }


    // state for offer Price
    const [ price , setPrice ] = useState([]);
    // methods for Price in offer form 
    const handlePriceChange = e => {
        setPrice(e.target.value)
    }


    // state for offer Date
    const [ expiredate , setDate ] = useState([]);
    // methods for Date in offer form 
    const handleDateChange = e => {
        setDate((e.target.value))
    }


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

    // state for offer Department
    const [ department , setDepartment ] = useState('');
    // methods for Department in offer form 
    const handleDepartmentChange = e => {
        setDepartment(e.target.value)
    }


    const onSubmit = async(e) => {
        e.preventDefault();
        for(let i=0;i<arr.length;i++){
          points[i] = arr[i]
        }
        const newPost = {
            title,
            points,
            department,
            expiredate,
            price
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
        // eslint-disable-next-line no-unused-vars
        const res = await axios.post("https://biollife.herokuapp.com/api/offers", newPost);
       window.location='/dashboard/offers';
      }catch (ex) {
        if (ex.response && ex.response.status === 400) {
          toast.error(ex.response.data);
        }
      }
    }
   return (
    <div className="Addoffer-container">
        <form className="form">
        <h2 className="form-title">اضف عرض جديد</h2>
                <label>العنوان</label>
                <input 
                    type="text"
                    required
                    className="title-input"
                    placeholder='عنوان العرض'
                    onChange={handleTitleChange}
                />
                <p>اضف صورة العرض
                </p>
                <div className="image-container">
                
                <label htmlFor="fileInput">+
                </label>
                <input 
                    style={{display: 'none'}}
                    type="file"
                    id="fileInput"
                  
                    className="title-input"
                    placeholder='عنوان العرض'
                    onChange={(e)=>setImage(e.target.files[0])}
                />
                
                </div>
            <label>السعر</label>
            <input 
                type="text"
                required
                placeholder='سعر العرض'
                onChange={handlePriceChange}
            />
            <label>محتويات العرض</label>
            <input 
                id='rset'
                type="text"
                required
                placeholder='العرض يشمل ....'
                onChange={handleChangepoints}
            />
            {arr.map((li) => (
                <li>{li}</li>
            ))}
            <div className="add-button-container">
                <p>أضف </p><button onClick={handleAddpoints} type='button' className="add-button">+</button>  
            </div>
            <label>التاريخ</label>
            <input 
                type="date"
                required
                placeholder='سعر العرض'
                onChange={handleDateChange}
            />
            <label>القسم</label>
            <select onChange={handleDepartmentChange}>
            <option >اختر القسم</option>
                {departments.map((depart)=>(
                    <option value={depart._id} key={depart._id}>{depart.name}</option>
                ))}
            </select>
            <Link className="link" to="/dashboard/Offers">
                <button className="supmit-button" type="submit"  onClick={onSubmit}>اضف العرض</button>
            </Link>
        </form>
        <ToastContainer/>
    </div>
   )
}

export default AddFormOffer;