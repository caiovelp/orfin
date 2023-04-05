import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginPage.css';
import {db} from '../firebase';
import { collection, getDocs, query, where } from "firebase/firestore";

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  function handleClick() {
    navigate('/register');
  }

  const handleLogin = async (event) => {
    event.preventDefault();
    
    try {
      const usersRef = collection(db, "users");
      const q = query(usersRef, where("username", "==", username));
      const userSnapshot = await getDocs(q);
      if (userSnapshot.empty) {
        alert('User not found');
        return;
      }

      const userDoc = userSnapshot.docs[0];
      const userData = userDoc.data();

      if(userData.password !== password) {
        alert('Invalid password');
        return;
      }

      console.log('User logged in: ', userDoc.id);
      navigate('/homePage')
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className='login-container'>
        <form className='login-form'>
        <label>
            Username:
            <input type="text" id='username' value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
            Password:
            <input type="password" id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button onClick={handleLogin} type="submit" id='login'>Log In</button>
        <button onClick={handleClick} type="submit" id='register'>Register</button>
        </form>
    </div>
  );
}

export default LoginPage;
