import React, { useState, useContext } from 'react';
import { AdminContext } from '../../App';
import axios from 'axios';
import Modal from 'react-modal';
import Card from 'react-bootstrap/Card';
import useLike from '../Hooks/useLike';
import './style.css';

function SingleBlog(props) {
  const [like, setLike] = useState(false);
  const [title, setTitle] = useState(`${props.data.title}`);
  const [content, setContent] = useState(`${props.data.content}`);
  const [Likes] = useLike(props, like);
  const id = props.data._id;
  const token = useContext(AdminContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const likeStyle = {
    color: '#a83f39',
  };


  const editstyle = {
    marginLeft: '40%',
    display: 'inline-flex',
  };

  //Deleting the Blog
  const Delete = (e) => {
    e.preventDefault();
    axios
      .delete(`https://blog-server1.herokuapp.com/blogs/${id}`, {
        headers: { Authorization: 'Bearer ' + token },
      })
      .then((response) => {
        console.log(response, 'Deleted Blog');
        document.activeElement.parentElement.parentElement.remove();
      })
      .catch((err) => {
        console.log(
          err,
          'error in deleting by id',
          'token',
          'token from delete'
        );
      });
  };



  //Editing the blog

  const editBlog = (e) => {
    e.preventDefault();
    axios
      .patch(
        `https://blog-server1.herokuapp.com/blogs/${id}`,
        {
          title: title,
          content: content,
        },
        {
          headers: { Authorization: 'Bearer ' + token },
        }
      )
      .then((response) => {
        console.log(response, 'Response from the Edit request');
        alert(`Blog edited, Please refresh to see the edited blog`);
      })
      .catch((err) => {
        console.log(err, 'Error in editing');
      });
      setModalIsOpen(false);
  };





  return (
    <React.Fragment>
      <div>
        <Card className="cardStyle">
          <Card.Img
            variant='top'
            alt='Insert Image'
            src={'https://blog-server1.herokuapp.com/' + props.data.blogImage}
            className="myStyle"
          />
          <Card.Body>
            <Card.Title className="blogTitle"><strong>{props.data.title}</strong></Card.Title>
            <Card.Text className="blogContent">{props.data.content}</Card.Text>
          </Card.Body>

          <button
            style={{
              backgroundImage:'linear-gradient(to right, rgb(242, 153, 74), rgb(242, 201, 76))',
              border: 'none',
              marginBottom: '2.35em',
            }}
            onClick={(e) => {
              e.preventDefault();
              setLike(!like);
              Likes();
            }}
          >
            {like ? (
              <i className='material-icons' style={likeStyle}>
                favorite
              </i>
            ) : (
              <i className='material-icons'>favorite_border</i>
            )}
          </button>
          <text style={{fontSize:"1.8rem",marginLeft:"4px"}}>{props.data.likes}</text>
          {token ? (
            <React.Fragment>
              <div style={editstyle}>
                <button onClick={(e) => Delete(e)} className='material-icons'>
                  delete
                </button>

                <button
                  onClick={() => setModalIsOpen(true)}
                  className='material-icons'
                >
                  edit
                </button>
              </div>
            </React.Fragment>
          ) : null}
        </Card>

        {/* Setting up the Edit Modal */}

        <Modal isOpen={modalIsOpen}>
          {/* <button
            className='material-icons'
            onClick={() => setModalIsOpen(false)}
          >
            close
          </button> */}
          <h1>Edit Blog</h1>
          <h2>Enter New Title</h2>
          <input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type='text'
            value={title}
          />
          <h2>Enter New Content</h2>
          <textarea
            onChange={(e) => {
              setContent(e.target.value);
            }}
            value={content}
           />
          <button className='material-icons' onClick={(e) => editBlog(e)}>
            save
          </button>
        </Modal>
      </div>
    </React.Fragment>
  );
}

export default SingleBlog;
