import React,{useState} from 'react';
import Header from '../../components/HomeHeader';
import Blog from '../../components/Blogs';
import Comment from '../../components/Comments';
import AddComment from '../../components/AddComment';
import BounceLoader from "react-spinners/BounceLoader";
import person from '../../pics/person.jpg'
import './style.css'

export const LoadingContext=React.createContext();

function Home(props) {

const [loading,setLoading]=useState(false);



  return (
  <div>
  <Header/>
  {/* {loading?(<LoadingContext.Provider value={{setLoading:setLoading}}>  
  <Blog/>
  </LoadingContext.Provider>):(<BounceLoader/>)} */}
  <br/>
  <div className="personHeader">
  <div className="profileBox">
  <img src={person}/>
  <h2 className="personHeading">Shubhang Jha</h2>
  </div>
  <div className="introduction">
    <h2>About Me</h2>
    <p className="intro">Hey! visitor, Welcome to my blog page.I am Shubhang, currently in my first year of BTech.Have a look at some of my intresting writings and feel free to suggest things in the comments section.Thank You!!</p>
  </div>
  </div>
  <br/>
  <Blog/>
  <br/>
  <Comment/>
  <br/>
  <hr/>
  <AddComment/>
  </div>
  );
}

export default Home;
