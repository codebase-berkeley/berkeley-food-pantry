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
            <div className='mobnav-canvas'>
                <div className = "mobnav-dropNavBar">
                    <img src = {bfpLogo} className = "mobnav-logo"></img>
                    <button onClick={setFalse}>
                        <img src = {xButton} className = "mobnav-xButton" />
                    </button>
                </div>
                <div className ='mobnav-imageAndDropDowns'>
                    <img src = {groceries} className = "mobnav-dropDownLogo"></img>
                    <div className='mobnav-dropDownLinks'>
                        <a href="https://www.berkeleyfoodpantry.org/aboutus" 
                        target="_blank" rel="noopener noreferrer" className='mobnav-dropDownText' onClick = {setFalse}>About the Pantry</a>
                        <Link to = "/edit-stock" onClick={setFalse} className = 'mobnav-dropDownText'> Edit Today's Stock </Link>
                        <Link to = "/view-appointments" onClick={setFalse} className = 'mobnav-dropDownText'> View Appointments </Link>
                        <Link to = "/login" onClick={setFalse} className = 'mobnav-dropDownText'> Login </Link>
                        {/* <a href="google.com" className='dropDownText'>Edit Today's Stock</a>
                        <a href="google.com" className='dropDownText'>View Appointments</a>
                        <a href="google.com" className='dropDownText'>Logout</a> */}
                    </div>
                </div>
            </div>
        )
    } 
    return (
            <div className='mobnav-navBar'>
                <img src = {bfpLogo} className = "mobnav-logo"></img>
                <button onClick={setTrue}>
                    <img src = {dropdownIcon} className = "mobnav-icon"></img>
                </button>
            </div>
            
    )
    
}

export default MobNavbar;