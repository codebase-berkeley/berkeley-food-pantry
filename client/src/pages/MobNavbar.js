import './MobNavbar.css';
import bfpLogo from './../images/bfpLogo.svg';
import xButton from './../images/isbees-x-symbol.svg';
import groceries from './../images/navBarImage.png';
import React, { useState } from 'react';
import dropdownIcon from './../images/dropdown-icon.svg'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function MobNavbar() {
    const [dropdown, setDropdown] = useState(0);
    function setTrue() {
        setDropdown(true)
    }
    function setFalse() {
        setDropdown(false)
    }
    if (dropdown) {
        return (
            <div className='canvas'>
                <div className = "dropNavBar">
                    <img src = {bfpLogo} className = "logo"></img>
                    <button onClick={setFalse}>
                        <img src = {xButton} className = "xButton" />
                    </button>
                </div>
                <div className ='imageAndDropDowns'>
                    <img src = {groceries} className = "dropDownLogo"></img>
                    <div className='dropDownLinks'>
                        <a href="https://www.berkeleyfoodpantry.org/aboutus" 
                        target="_blank" rel="noopener noreferrer" className='dropDownText' onClick = {setFalse}>About the Pantry</a>
                        <Link to = "/edit-stock" onClick={setFalse} className = 'dropDownText'> Edit Today's Stock </Link>
                        <a href="/view-appointments" className='dropDownText'>View Appointments</a>
                        <Link to = "/login" onClick={setFalse} className = 'dropDownText'> Login </Link>
                        {/* <a href="google.com" className='dropDownText'>Edit Today's Stock</a>
                        <a href="google.com" className='dropDownText'>View Appointments</a>
                        <a href="google.com" className='dropDownText'>Logout</a> */}
                    </div>
                </div>
            </div>
        )
    } 
    return (
            <div className='navBar'>
                <img src = {bfpLogo} className = "logo"></img>
                <button onClick={setTrue}>
                    <img src = {dropdownIcon} className = "icon"></img>
                </button>
            </div>
            
    )
    
}

export default MobNavbar;