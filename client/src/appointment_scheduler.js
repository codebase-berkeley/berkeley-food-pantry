import './appointment_scheduler.css'
import React from "react";
// import Search from './searchBar.js';
// import './searchBar.css';
// import { PanelGroup, Panel } from 'rsuite';
// import 'rsuite/dist/rsuite.min.css';
// import { Dropdown } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import isbesPlusSign from './images/plusSign.svg';
import Select, { NonceProvider } from 'react-select';
import makeAnimated from 'react-select/animated';
// import { borderColor } from "@mui/system";

const dates = [
    { value: '03/30', label: 'Wednesday, March 30th' },
    { value: '03/31', label: 'Thursday, March 31st' },
    { value: '04/01', label: 'Friday, April 1st' }
]

const times = [
    { value: '11:30', label: '11:30 AM' },
    { value: '12:00', label: '12:00 PM' },
    { value: '12:30', label: '12:30 PM'}
]

const animatedComponents = makeAnimated();
const customStyles = {
    placeholder: (defaultStyles) => ({
        ...defaultStyles,
        color: '#C4C4C4',
    }),

    option: (provided, state) => ({
        ...provided,
        height: '6vh',
        backgroundColor: state.isFocused ? "#E5E5E5" : null,
    }),

    dropdownIndicator: base => ({
        ...base,
        color: "#ACB9AC"
    }),

    IndicatorSeparator: () => null,

    control: (provided, state) => ({
        height: '6vh',
        ...provided,
        width: '33vw',
        borderRadius: '.5vw',
        
        border: state.isFocused ? '1.5px solid #ACB9AC' : '1.5px solid #ACB9AC',
        boxShadow: state.isFocused ? '1.5px solid #ACB9AC' : '1.5px solid #ACB9AC',
        '&:hover': {
            border: state.isFocused ? '1.5px solid #ACB9AC' : '1.5px solid #ACB9AC'
        }
    }),

    multiValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';

        return {
            ...provided, opacity, transition, borderRadius: '20px', paddingLeft: '5px', paddingRight: '5px'
        };
    }
}

export default function AppointmentScheduler() {
    return (
        <div>
            <div className = 'intro-text-container'>
                <h1 className = 'intro-text'>Welcome to the Berkeley Food Pantry! 
                    <span class='intro-text-pt2'><br></br>Please fill out the following form to schedule an appointment.</span>
                </h1>    
            </div>
            <div className = 'main-appointment-scheduler-container'>
                <div className = 'main-appointment-scheduler-left'>
                    <h1 className = 'step-heading'>Step 1: Choose your appointment time.</h1>
                    
                    <div className="filters">
                            {/* <div className="searchBox">
                                <text>Search Items</text>
                                <Search placeholder="Search..." />
                            </div> */}

                        <div className="appt-sched-dropdown">
                            <p id="input-field-label">Pick a date for your appointment:</p>
                            <div id="filter-dropdown">
                                <Select className="custom-dropdown"
                                    styles={customStyles}
                                    closeMenuOnSelect={true}
                                    components={animatedComponents}
                                    placeholder="Select date..."
                                    options={dates}
                                />
                            </div>
                        </div>

                        <div className="appt-sched-dropdown">
                            <p id="input-field-label">Pick a time for your appointment:</p>
                            <div id="filter-dropdown">
                                <Select className="custom-dropdown"
                                    styles={customStyles}
                                    closeMenuOnSelect={true}
                                    components={animatedComponents}
                                    placeholder="Select time..."
                                    options={times}
                                />
                            </div>
                        </div>

                        <div className="pickup-items">
                            <p id="input-field-label">Which of the available items would you like to pick up?</p>
                            <div className="pickup-items-selection">
                                <div className="form-check">
                                    <label class="form-check-label" for="exampleRadios1">
                                        <input class="form-check-input" type="checkbox" name="exampleRadios" id="exampleRadios1" value="option1" unchecked></input>
                                        All Items
                                    </label>
                                </div>

                                <div className="form-check">
                                    <label class="form-check-label" for="exampleRadios1">
                                        <input class="form-check-input" type="checkbox" name="exampleRadios" id="exampleRadios1" value="option1" unchecked></input>
                                        In Stocks Items
                                    </label>
                                </div>
                                
                                <div className="form-check">
                                    <label class="form-check-label" for="exampleRadios1">
                                        <input class="form-check-input" type="checkbox" name="exampleRadios" id="exampleRadios1" value="option1" unchecked></input>
                                        Not In Stock Items Only
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className = 'main-appointment-scheduler-right'>
                    <h1 className = 'step-heading'>Step 2: Fill in your information.</h1>


                </div>   
            </div>
            <div className = 'button-container'>
                <div className = 'clear-all-button'> 
                    <h1 className = 'clear-all'>Clear all</h1>     
                </div>
                <div className = 'submit-button'> 
                    <h1 className = 'submit'>Submit</h1>     
                </div>
            </div>
        </div>
    )
}

