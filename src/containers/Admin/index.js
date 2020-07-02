import React from 'react';
import Blog from '../../components/Blogs';
import Header from '../../components/Header/index';
import Comment from '../../components/Comments/index';
import AddComment from '../../components/AddComment/index';
import AddBlog from '../../components/AddBlog';

function Admin() {

  
  return (
    <React.Fragment>
      <div>
        <button><i className='material-icons'>arrow_back</i>Home</button>
        <div>
          <Blog />
        </div>
        <div>
          <Header />
          <Blog />
          <br/>
          <h2>Add a Blog</h2>
          <AddBlog/>
          <h2>Comments</h2>
          <br />
          <Comment />
          <br />
          <hr />
          <AddComment />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Admin;
