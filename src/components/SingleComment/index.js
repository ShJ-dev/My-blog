import React from 'react';
import Bootstrap from 'react-bootstrap';
import './style.css';
import person from '../MaterialIcons/person.png';

function SingleComment(props) {
  return (
    <React.Fragment>
      <div className="container_flex">
      <div className='commentBox'>
       <p className='comment'>{props.data.comment}</p>
        <footer className='person'><img src={person} alt="X"/><em>{props.data.name}</em>
        </footer>
       </div>
      </div>
    </React.Fragment>
  );
}

export default SingleComment;
