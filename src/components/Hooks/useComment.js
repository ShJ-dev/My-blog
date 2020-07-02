import { useState } from 'react';
import axios from 'axios';

function useComment(name, comment) {
 // const[value,setValue]=useState({name:'',comment:''});


  const PostComments = () => {
    // e.preventDefault();
    if (name === '' && comment === '') {
      alert('Both fields are required');
    } else {
      axios
        .post(`https://blog-server1.herokuapp.com/comments`, {
          name: name,
          comment: comment,
        })
        .then((response) => {
          console.log(response, 'response from comment post');
          // setNewComment({ _id: 0, name: '', newcmt: '' });
          // setComments([...comments, response.data]);
        })
        .catch((err) => {
          console.log(err, 'error from comment post');
        });
    }
  };
  return [PostComments];
}

export default useComment;
