import React, { useState, useContext } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import TokenContext from '../../../App';

Modal.setAppElement('#root');

function LoginModal(props) {
  const context = useContext(TokenContext);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
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
          <i className='material-icons'>double_arrow</i>login
        </button>
        <Modal isOpen={modalIsOpen}>
          <button onClick={() => setModalIsOpen(false)}>
            <i className='material-icons'>close</i>
          </button>
          <h1>UserLogin</h1>
          <h2>Enter Email</h2>
          <input
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
          />
          <button onClick={(e) => submitHandler(e)}>
            <i className='material-icons'>forward</i>Submit
          </button>
        </Modal>
      </div>
    </React.Fragment>
  );
}

export default LoginModal;
