import React, { useState } from 'react';
import axios from 'axios';

function useLike(props, like) {
  
  const id=props.data._id;
  console.log(`${props.data.likes}`);

  const Likes = () => {
    if (like) {
      axios
        .patch(`https://blog-server1.herokuapp.com/likes/${id}`, {
          likes: props.data.likes +1 ,
        })
        .then((result) => {
          console.log(result, 'result from Like patch');
          console.log(`${props.data.likes}`,'actual');
        })
        .catch((err) => {
          console.log(err, 'error in fetching by id');
        });
    } else {
      axios
        .patch(`https://blog-server1.herokuapp.com/likes/${id}`, {
          likes: props.data.likes +1,
        })
        .then((result) => {
          console.log(result, 'result from like patch');
          console.log(`${props.data.likes}`,'actual');
        })
        .catch((err) => {
          console.log(err, 'error in fetching by id');
        });
    }
  };
  return [Likes];
}

export default useLike;
