import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SingleComment from '../SingleComment';
import './style.css'

function Comment() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get('https://blog-server1.herokuapp.com/comments')
      .then((response) => {
        console.log(response);
        setComments(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
     <React.Fragment>
        <div>
        <h2 className="commentHeading">Comments</h2>
        <div className="grid">
        {comments.map((comment) => {
          return <SingleComment key={comment.id} data={comment} />;
        })}
      </div>
      </div>
     </React.Fragment>
     
  );
}

export default Comment;
