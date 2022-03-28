import './mobile-navbar-dropdown.css';
import bfpLogo from './assets/bfpLogo.svg';
import xButton from './assets/isbees-x-symbol.svg';
import groceries from './assets/navBarImage.svg';
import MobNav from './mobile-navbar';
import React, { useState } from 'react';
import dropdownIcon from './assets/dropdown-icon.svg'

function Dropdown() {
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
                        <a href="https://www.berkeleyfoodpantry.org/aboutus" className='dropDownText'>About the Pantry</a>
                        <a href="google.com" className='dropDownText'>Edit Today's Stock</a>
                        <a href="google.com" className='dropDownText'>View Appointments</a>
                        <a href="google.com" className='dropDownText'>Logout</a>
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

export default Dropdown;