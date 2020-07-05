import React, { useState, useContext } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import {TokenContext} from '../../../App';
import './style.css';



const buttonStyle = {
  margin: '0px'
}
const inputTitleStyle = {
  position: 'relative',
  width: '80%',
  font: '20px sans-serif',
  border: '2px solid black',
  outline: 'none',
  resize: 'none'
}




Modal.setAppElement('#root');

function LoginModal() {
  const context = useContext(TokenContext);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    if (email === '' && password === '') {
      alert('Both the fields are required');
    } else {
      axios
        .post('https://blog-server1.herokuapp.com/user/login', {
          email: email,
          password: password,
        })
        .then((response) => {
          console.log(response.data.token);
          context.setToken(response.data.token);
        })
        .catch((err) => {
          alert(`Not Authorized`);
          console.log(err);
        });
    }
  };

  return (
    <React.Fragment>
      <div>
        <button onClick={() => setModalIsOpen(true)}>
          <i style={{border:"none",backgroundColor:"white"}} className='material-icons'>login</i>login
        </button>
        <Modal isOpen={modalIsOpen} style={{overlay:{backgroundColor:'#be6a15'}}}>
        <button className='material-icons'style={{backgroundColor:'#6e3b3b',color:'white'}} onClick={() => setModalIsOpen(false)}>
            close
          </button>
          <h1>UserLogin</h1>
          <h2>Enter Email</h2>
          <input
            style={inputTitleStyle}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type='text'
            value={email} 
            placeholder='Type your email...'
          />
          <h2>Enter Password</h2>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type='password'
            value={password}
            placeholder='Type your password...'
            style={inputTitleStyle}
          />
          <br/>
          <button style={{backgroundColor:'#22d1ee',marginTop:4}} onClick={(e) => submitHandler(e)}>
            <i className='material-icons'>forward</i>
          </button>
        </Modal>
      </div>
    </React.Fragment>
  );
}

export default LoginModal;
