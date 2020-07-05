import React, { useState, useContext } from 'react';
import axios from 'axios';
import Bootstrap from 'react-bootstrap';
import { AdminContext } from '../../App';
import '../AddBlog/style.css';

function AddBlog() {
  const token = useContext(AdminContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };


 const inputStyle={
    width:"20%",
    marginBottom:20
  }


  const createBlog = (e) => {
    e.preventDefault();
    if (title === '') {
      alert(`Title is required`);
    } else {
      const fd = new FormData();
      fd.append('title', title);
      fd.append('content', content);
      fd.append('likes', 0);
      if (image) {
        fd.append('blogImage', image, image.name);
      }
      console.log(fd, 'New Blog');
      axios
        .post('https://blog-server1.herokuapp.com/blogs', fd, config)
        .then((response) => {
          console.log(response, 'Response from new blog creation');
          alert('Blog added successfully, please refresh the page to check...');
        })
        .catch((err) => {
          console.log(err);
        });
      setContent('');
      setImage(null);
      setTitle('');
    }
  };

  return (
    <div>
       <React.Fragment>
        <div>
          <form onSubmit={(e) => createBlog(e)} className='formSubmit'>
            <label>Title:</label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              type='text'
              placeholder='Enter Blog Title...'
              value={title}
              style={inputStyle}
              
            />
            <label style={{marginLeft:10}}>Image:</label>
            <input style={inputStyle} onChange={(e) => setImage(e.target.files[0])} type='file'/>
            <br/>
            <label style={{marginBottom:20}}>Content:</label>
            <textarea
              onChange={(e) => setContent(e.target.value)}
              type='textarea'
              placeholder='Enter Blog Body...'
              value={content}
              style={{width:"60%",height:50}}
            />
            <br/>
            <button type='submit' className='material-icons'>
            post_add
            </button>
          </form>
        </div>
      </React.Fragment> 

    </div>
  );
}

export default AddBlog;

