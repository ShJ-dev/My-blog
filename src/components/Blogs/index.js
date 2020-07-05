import React, { useState, useEffect,useContext } from 'react';
import axios from 'axios';
import {LoadingContext} from '../../containers/Home/index';
import './style.css';
import SingleBlog from '../SingleBlog';

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const context =useContext(LoadingContext);

  useEffect(() => {
    axios
      .get('https://blog-server1.herokuapp.com/blogs/')
      .then((response) => {
        console.log(response);
        setBlogs(response.data);
        context.setLoading(true);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

  return (
    <React.Fragment>
      <div>
      <h2 className="blogHeading">Blogs</h2>
    <div className="blogCard">
      <div className="blog"> 
        {blogs.map((blog) => {
        return ( <SingleBlog key={blog._id} data={blog} />);
        })}
    </div>
    </div>
    </div>
    </React.Fragment>
  );
}

export default Blog;
