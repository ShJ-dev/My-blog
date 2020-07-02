import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import CardGroup from 'react-bootstrap/CardGroup';
import './style.css';
import SingleBlog from '../SingleBlog';

function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get('https://blog-server1.herokuapp.com/blogs/')
      .then((response) => {
        console.log(response);
        setBlogs(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="blogCard">
      <div className="blog"> 
        {blogs.map((blog) => {
        return ( <SingleBlog key={blog._id} data={blog} />);
        })}
    </div>
    </div>
  );
}

export default Blog;
