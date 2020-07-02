import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import useLike from '../Hooks/useLike';

function SingleBlog(props) {
  const [like, setLike] = useState(false);
  const [Likes] = useLike(props, like);

  const likeStyle = {
    color: '#a83f39',
  };

  const mystyle = {
    border: 'solid 2px grey',
    padding: '10px',
    width: '100%',
    height: '100%',
    margin: '4px 0px',
  };

  const cardstyle = {
    border: 'solid 2px lightskyblue',
    margin: '1em',
  };

  return (
    <React.Fragment>
      <div>
        <Card style={cardstyle}>
          <Card.Img
            variant='top'
            alt='Insert Image'
            src={'https://blog-server1.herokuapp.com/' + props.data.blogImage}
            style={mystyle}
          />
          <Card.Body>
            <Card.Title>{props.data.title}</Card.Title>
            <Card.Text>{props.data.content}
            </Card.Text>
          </Card.Body>

          <button
            onClick={(e) => {
              e.preventDefault();
              setLike(!like);
              console.log(`${props.data.likes}`)
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
          <big><strong>{props.data.likes}</strong></big>
        </Card>
      </div>
    </React.Fragment>
  );
}

export default SingleBlog;
