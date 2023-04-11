import React from 'react';
import '../styles/HomePage.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBillTransfer, faMoneyBillTrendUp, faMoneyBills, faPlusCircle, faWallet } from '@fortawesome/free-solid-svg-icons';


function HomePage() {
  const navigate = useNavigate();

  function goToAddExpense() {
    navigate('/addExpenses');
  }

  return (
    <div className='container'>
      <div className='header'>
        <div className='title'>My App</div>
      </div>
      <div className='content'>
        <div id='card-container'>
          <div className='wallet-info'>
            <h1>Balance information</h1>
            <div id='wallet-info-row'>
              <div className='card-icons'>
                <div id='credit-icon'><FontAwesomeIcon icon={faMoneyBills} /></div>
                <div id='balance-icon'><FontAwesomeIcon icon={faMoneyBillTrendUp} /></div>
                <div id='expenses-icon'><FontAwesomeIcon icon={faMoneyBillTransfer} /></div>
              </div>   
            </div>
            <div id='wallet-data-row'>
              <div id='card-wallet-icon'><FontAwesomeIcon icon={faWallet} /></div>
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
        <div id='bottom-menu' onClick={goToAddExpense}>
          <FontAwesomeIcon icon={faPlusCircle} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;