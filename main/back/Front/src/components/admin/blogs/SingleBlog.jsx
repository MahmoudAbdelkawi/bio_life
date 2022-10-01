
import "./singleBlog.css";
import { getBlog } from "../../../services/blogServices";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

let department;
const PF = "https://biollife.herokuapp.com/uploads/";
function SingleBlog() {
  let blogId=useParams();
  blogId=blogId.id;
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    async function get() {
      const blogResult = await getBlog(blogId);
      setBlog(blogResult.data);
      department=blogResult.data.department?.name
    }
    get();
  }, [blogId]);

  return (
    <div className="singleBlog">
      <h1>{blog.title}</h1>
      <div className="image">
      <img
      src={PF+blog.image} alt="blog"
    />
      </div>
      <div className="text-container">
        <p>{blog.subject}</p>
      </div>
      <div className="info-container">
        <div className="author">{blog.author}</div>
        <div className="department">{department}</div>
      </div>
    </div>
  );
}

export default SingleBlog;