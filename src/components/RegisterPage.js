import React, { useState } from 'react';
import '../styles/RegisterPage.css';
import { doc, setDoc } from "firebase/firestore";
import {db} from '../firebase';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

function RegisterPage() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const insertUser = async (event) => {
    event.preventDefault();

    // Insert the new user into the Firebase users collection
    try {
      await setDoc(doc(db, "users", username), {
        email: email,
        username: username,
        password: password
      }).catch(alert);
    } catch(error) {
      console.error(alert(error));
    }
  }

  return (
    <div className='register-container'>
      <button id='arrowButton' onClick={() => navigate(-1)} type="button">
        <FontAwesomeIcon icon={faArrowLeft} /> 
      </button>
      <form className='register-form'>
        <label>
          E-mail:
          <input type="text" id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Username:
          <input type="text" id='username' value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button onClick={insertUser} type="button" id='register'>Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;
