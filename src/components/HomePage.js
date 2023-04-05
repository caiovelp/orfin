import React from 'react';
import '../styles/HomePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet } from '@fortawesome/free-solid-svg-icons';

function HomePage() {
  return (
    <div className='container'>
      <div className='header'>
        <div className='title'>My App</div>
      </div>
      <div className='content'>
        <div className='card-container'>
          <div className='card-header'>
            <i><FontAwesomeIcon icon={faWallet} /></i>
          </div>
          <div className='card-info'>
            R$ 00.00
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;