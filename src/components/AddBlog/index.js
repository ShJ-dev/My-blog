import React, { useState,useContext } from 'react';
import axios from 'axios';
import TokenContext from '../Modals/LoginModal/index';

function AddBlog() {

  const token=useContext(TokenContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const config = {
    headers: { Authorization: `Bearer ${token}` }
};


  const createBlog=(e)=>{
    axios.post('https://blog-server1.herokuapp.com/blogs',{
      title:title,
      content:content
    },config).then(response=>{
      console.log(response.data);
      alert('Blog added successfully, please refresh the page to check...');
    }).catch(err=>{
      console.log(err);
    })
  }



  return (
    <div>
      <React.Fragment>
        <div>
          <form>
            <label>Title:</label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              type='text'
              placeholder='Enter Blog Title...'
              value={title}
            />
            <label>Content:</label>
            <input
              onChange={(e) => setContent(e.target.value)}
              type='text'
              placeholder='Enter Blog Body...'
              value={content}
            />
            <label>Image:</label>
            <input type="file"/>
            <button onClick={(e)=>createBlog(e)}><i className='material-icons'>add</i>Add Note</button>
          </form>
        </div>
      </React.Fragment>
    </div>
  );
}

export default AddBlog;
