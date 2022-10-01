import React from "react";
import { useState,useEffect } from "react";
import { Link } from 'react-router-dom';
import './Blog.css';
import { blogLimit } from "../../../services/blogServices";

function Blog  () {
  // const PF = "https://biollife.herokuapp.com/uploads/";
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    async function get() {
      const blogResult = await blogLimit();
      setBlogs(blogResult.data); 
    }
    get();

  },[]);


    return (
      <>
        {/* START BLOG */}
<div className="container-blog">
{blogs?.map((blog)=>(


  <div className="card-blog" key={blog._id}>
    <figure className="card__thumb-blog">
      <img 
      // src={PF+blog.image}
      src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
       alt="event" className="card__image-blog" />
      <figcaption className="card__caption-blog">
        <h2 className="card__title-blog">{blog.title}</h2>
        <p className="card__snippet-blog">{blog.subject.slice(0,50)}</p>
        <Link   to={`/InsideBlog/${blog._id}`} className="card__button-blog" >اقرأ المزيد</Link>
      </figcaption>
    </figure>
          
    <span className="card__date__blog">{new Date(blog.createdAt).toLocaleDateString()}</span>
            <span className="card__author__blog">{blog.author}</span>
  </div>
  ))}
</div>

        {/* END BLOG */}
      </>
    );
  }

export default Blog;