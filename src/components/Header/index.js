import React from 'react';
import Nav from 'react-bootstrap/Nav';
import './style.css';
import LoginModal from '../Modals/LoginModal';

function Header(props) {
  return (
    <Nav className='navBar '>
      <Nav.Item>
        <Nav.Link className='navLinks' href='#'>
          Facebook
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className='navLinks' href='#'>
          Instagram
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className='navLinks' href='#'>
          LinkedIn
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className='navLinks' href='#'>
          Github
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className="loginModal">
        <LoginModal/>
      </Nav.Item>
    </Nav>
  );
}

export default Header;
