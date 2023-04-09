import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginPage.css';
import {auth} from '../firebase';
import {signInWithEmailAndPassword } from "firebase/auth";

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  function goToRegister() {
    navigate('/register');
  }

  function login() {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      navigate('/homePage');
    })
    .catch((error) => {
      alert(error);
    })
  }

  return (
    <div className='login-container'>
        <div className='login-form'>
        <label>
            E-mail:
            <input type="email" id='email' placeholder='youremail@example.com' value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
            Password:
            <input type="password" id='password' placeholder='Secret pass' value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button onClick={login} id='login'>Log In</button>
        <button onClick={goToRegister} type="submit" id='register'>Register</button>
        </div>
    </div>
  );
}

export default LoginPage;
