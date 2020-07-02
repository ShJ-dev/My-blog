import React from 'react';
import Header from '../../components/Header';
import Blog from '../../components/Blogs';
import Comment from '../../components/Comments';
import AddComment from '../../components/AddComment';


function Home(props) {
  return (
  <div>
  <Header/>
  <Blog/>
  <h2>Comments</h2>
      <br/>
  <Comment/>
  <br/>
  <hr/>
  <AddComment/>
  </div>
  );
}

export default Home;
