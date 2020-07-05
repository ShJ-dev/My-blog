import React,{useContext} from 'react';
import Nav from 'react-bootstrap/Nav';
import './style.css';
import {TokenContext} from '../../App';
import { FaFacebookSquare,FaGithubSquare,FaInstagram,FaLinkedin,FaGoodreads } from "react-icons/fa";



function AdminHeader(props) {

  const context=useContext(TokenContext);


  return (
    <Nav className='navBar '>
      <Nav.Link className='navLinks' href='#'>
       <FaFacebookSquare color="#3b5998" size="1.5rem" />
      </Nav.Link>
    <Nav.Item>
      <Nav.Link className='navLinks' href='#'>
       <FaInstagram color="8a3ab9" size="1.5rem" />
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link className='navLinks' href='#'>
      <FaLinkedin color="0e76a8" size="1.5rem" />
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link className='navLinks' href='#'>
        <FaGithubSquare color="#xf092" size="1.5rem" />
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link className='navLinks' href='#'>
      <FaGoodreads color="553b08" size="1.5rem" />
      </Nav.Link>
    </Nav.Item>
      <Nav.Item>
       <button onClick={(e)=>{context.setToken(null)}} className='material-icons'><i className='material-icons'>arrow_back</i></button>
      </Nav.Item>
    </Nav>
  );
}

export default AdminHeader;
