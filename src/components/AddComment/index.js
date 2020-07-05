import React, {useEffect, useState } from 'react';
import useComment from '../Hooks/useComment';

const inputStyle = {
  width: '98%',
  height:'1.5rem',
  background: '#fee9d7',
  boxRadius:'20px',
};

function AddComment() {
  const[name,setName]=useState('');
  const[comment,setComment]=useState('');
  const[PostComments]=useComment(name,comment);





  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(`${comment} @${name}`);
    // alert(`Thanks for ${comment} @${name}!`);
    // reset();
    PostComments();
    console.log(`${comment} @${name}`);
    setComment('');
    setName('');
    console.log(`${comment} @${name}`);
  };

  return (
    <div>
      <h2 className="commentHeading">Add a Comment</h2>
      <form>
        <label><strong>Name:</strong></label>

        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          style={inputStyle}
          type='text'
          value={name}
          placeholder='Type your name...'
        />
  <br/>
<label><strong>Comment:</strong></label>

        <input
          style={inputStyle}
          type='text'
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
          placeholder='Type your comment...'
        />
      </form>
      <button
        style={{ background: 'skyblue' }}
        type='submit'
        onClick={(e) => submitHandler(e)}
      >
        <i className='material-icons'>insert_comment</i>
      </button>
    </div>
  );
}

export default AddComment;
