import React from 'react';
import '../styles/HomePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faWallet } from '@fortawesome/free-solid-svg-icons';


function HomePage() {
  return (
    <div className='container'>
      <div className='header'>
        <div className='title'>My App</div>
      </div>
      <div className='content'>
        <div id='card-container'>
          <div className='wallet-info'>
            <div id='wallet-data-row'>
              <div id='card-icon'><FontAwesomeIcon icon={faWallet} /></div>
              <div className='card-info-credit'>
                <div id='credit-value'>R$ 00.00</div> 
              </div>
              <div className='card-info-balance'>
                <div id='balance-value'>R$ 00.00</div> 
              </div>
              <div className='card-info-expenses'>
                <div id='expenses-value'>R$ 00.00</div> 
              </div>
            </div>
            <div id='wallet-info-row'>
              <div className='card-text'>
              <div id='credit'>Credit</div>
              <div id='balance'>Balance</div>
              <div id='expenses'>Expenses</div>
              </div>   
            </div>
          </div>
        </div>
        <div id='info-container'></div>
        <div id='bottom-menu'>
          <FontAwesomeIcon icon={faPlusCircle} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;