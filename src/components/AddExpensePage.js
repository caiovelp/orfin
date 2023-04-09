import { React, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {faArrowLeft, faCalendarDays, faCommentDollar, faCreditCard, faDollar, faFileText, faListOl, faPlusCircle, faTag } from "@fortawesome/free-solid-svg-icons";
import '../styles/AddExpensePage.css';

//https://reactdatepicker.com/ react datepicker doc

function AddExpensePage() {
    const [expenseDate, setExpenseDate] = useState(new Date());
    const [tag, setTag] = useState('');
    const [parcel, setParcel] = useState(0);
    const [description, setDescription] = useState('');
    const [chargeDesc, setChargDesc] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [value, setValue] = useState(0);

    const navigate = useNavigate();

    async function addExpense() {
        await addDoc(collection(db, "expenses"), {
            date: expenseDate,
            tag: tag,
            parcel: parcel,
            description: description,
            chargeDesc: chargeDesc,
            card: paymentMethod,
            value: value
        });
    }

    return (
        <div className="add-expense-container">
            <button id='arrowButton' onClick={() => navigate(-1)} type="button">
                <FontAwesomeIcon icon={faArrowLeft} /> 
            </button>
            <div className="add-expense-form">
                <div className="data-row">
                    <FontAwesomeIcon className="font-awesone-icon" icon={faCalendarDays} />
                    <DatePicker id="expense-date" selected={expenseDate} onChange={(date) => setExpenseDate(date)} />                    
                </div>
                <div className="data-row">
                    <FontAwesomeIcon className="font-awesone-icon" icon={faTag} />
                    <input type="text" placeholder="Tag" id="tag" value={tag} onChange={(e) => setTag(e.target.value)}/>
                </div>
                <div className="data-row">
                    <FontAwesomeIcon className="font-awesone-icon" icon={faListOl} />
                    <input type="text" placeholder="Number of parcels" id="parcel" value={parcel} onChange={(e) => setParcel(e.target.value)}/>
                </div>
                <div className="data-row">
                    <FontAwesomeIcon className="font-awesone-icon2" icon={faFileText} />
                    <input type="text" placeholder="Description" id="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
                </div>
                <div className="data-row">
                    <FontAwesomeIcon className="font-awesone-icon" icon={faCommentDollar} />
                    <input type="text" placeholder="Charge description" id="chargeDesc" value={chargeDesc} onChange={(e) => setChargDesc(e.target.value)}/>
                </div>
                <div className="data-row">
                    <FontAwesomeIcon className="font-awesone-icon" icon={faCreditCard} />
                    <input type="text" placeholder="Payment method" id="card" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}/>
                </div>
                <div className="data-row">
                    <FontAwesomeIcon className="font-awesone-icon3" icon={faDollar} />
                    <input type="number" placeholder="Value" id="value" value={value} onChange={(e) => setValue(e.target.value)}/>
                </div>
                <div className='add-button' onClick={addExpense}>
                    <FontAwesomeIcon icon={faPlusCircle} />
                </div>
            </div>
        </div>
    );
}

export default AddExpensePage;