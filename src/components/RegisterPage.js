import React, { useState } from 'react';
import '../styles/RegisterPage.css';
import {auth} from '../firebase';
import {createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  function createUser() {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      //Signed in
      const user = userCredential.user;
      alert('User is now registered');
      navigate(-1);
    })
    .catch((error) => {
      alert(error);
    })
  }

  return (
    <div className='register-container'>
      <button id='arrowButton' onClick={() => navigate(-1)} type="button">
        <FontAwesomeIcon icon={faArrowLeft} /> 
      </button>
      <form className='register-form'>
        <label>
          E-mail:
          <input type="email" id='email' placeholder='youremail@example.com' value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" id='password' placeholder='Secret pass' value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button onClick={createUser} type="button" id='register'>Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;
