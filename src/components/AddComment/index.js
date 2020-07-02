import React, {useEffect, useState } from 'react';
import useComment from '../Hooks/useComment';

const inputStyle = {
  width: '100%',
  background: 'navyblue',
  height: 'auto',
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
      <form>
        <label>Name:</label>

        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          style={inputStyle}
          type='text'
          value={name}
          placeholder='Type your name...'
        />

        <label>Comment:</label>

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
