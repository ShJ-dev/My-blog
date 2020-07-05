import React from 'react';
import Nav from 'react-bootstrap/Nav';
import './style.css';
import LoginModal from '../Modals/LoginModal';
import { FaFacebookSquare,FaGithubSquare,FaInstagram,FaLinkedin,FaGoodreads } from "react-icons/fa";

function Header(props) {
  return (
    <Nav className='navBar'>
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
      <Nav.Item className="loginModal">
        <LoginModal/>
      </Nav.Item>
    </Nav>
  );
}

export default Header;
