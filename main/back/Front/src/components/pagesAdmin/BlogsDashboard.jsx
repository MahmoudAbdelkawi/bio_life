import React, { useEffect, useState } from "react";
import "./blogs.css";
import BlogCard from "../admin/blogs/BlogCard";
import EventCard from "../admin/blogs/EventCard";
import { Link } from "react-router-dom";
import { getBlogs } from "../../services/blogServices";
import { getEvents } from "../../services/eventServices";
const BlogsDashboard = () => {
  const [blogs, setBlog] = useState([]);
  const [events, setEvent] = useState([]);
  useEffect(() => {
    async function get() {
      const result = await getBlogs();
      setBlog(result.data);
    }
    get();

    async function getEvent() {
      const result = await getEvents();
      setEvent(result.data);
    }
    getEvent();
  }, []);
  const blogsArray = blogs.map((blog) => ({
    id: blog?._id,
    title: blog?.title,
    image:blog?.image,
    subject: blog?.subject,
    author: blog?.author,
    department: blog?.department.name,
    likes:blog?.likes.length,
  }));

  const eventsArray = events.map((event) => ({
    id:event?._id,
    title: event?.title,
    image:event?.image,
    subject: event?.subject,
    author: event?.author,
    department: event?.department.name,
    likes:event?.likes.length,
  }));

  const blogsMapping = blogsArray.map((blog) => {
    return (
      <BlogCard
        key={blog.id}
        id={blog.id}
        image={blog.image}
        author={blog.author}
        title={blog.title}
        subject={blog.subject}
        department={blog.department}
        likes={blog.likes}
      />
    );
  });

  const eventsMapping = eventsArray.map((events) => {
    return (
      <EventCard
        key={events.id}
        id={events.id}
        image={events.image}
        author={events.author}
        title={events.title}
        subject={events.subject}
        department={events.department}
        likes={events.likes}
      />
    );
  });

  return (
    <div>
      <div className="blog-title">
        <h3 className="BLOG-title">المدونات والفعاليات</h3>
      </div>
      <div>
        <div className="blogsContainer">{blogsMapping}</div>
        <div className="blogsContainer">{eventsMapping}</div>
      </div>
      <div className="adding-blogs">
        <Link className="link" to="/dashboard/AddBlogs">
          <button className="container">
            <p className="add-icon">+</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogsDashboard;