import React from 'react';
import Blog from '../../components/Blogs';
import Comment from '../../components/Comments/index';
import AddComment from '../../components/AddComment/index';
import AddBlog from '../../components/AddBlog';
import AdminHeader from '../../components/AdminHeader/index'
import './style.css';

function Admin() {

  
  return (
    <React.Fragment>
      <div>
          <AdminHeader/>
          <br/>
          <Blog />
          <br/>
          <h2 className='newBlogHeading'>Add a Blog</h2>
          <AddBlog/>
          <br />
          <Comment />
          <br />
          <hr />
          <AddComment />
        </div>
    </React.Fragment>
  );
}

export default Admin;
