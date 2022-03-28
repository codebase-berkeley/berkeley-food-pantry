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
let inputs;
let input;
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
    
    function newFunction() {
        document.getElementById('input-field-label').reset();
            }
    

    function submitForm() {
        console.log("something"); 
    }
    
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
                        <h1 className='pickup-item-heading'>Which of the available items would you like to pick up?</h1>
                        <div className = "left-checklist-container">
                        <div className="pickup-items">
                            <p id="input-field-label">Vegetables & Fruit</p>
                            <div className="pickup-items-selection">
                                
                                <div className="form-check">
                                
                                    <label class="form-check-label" for="exampleRadios1">
                                        <input class="form-check-input-items" type="checkbox" name="exampleRadios" id="exampleRadios1" value="option1" unchecked></input>
                                        Kale
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label class="form-check-label" for="exampleRadios1">
                                        <input class="form-check-input-items" type="checkbox" name="exampleRadios" id="exampleRadios1" value="option1" unchecked></input>
                                        Tomatoes
                                    </label>
                                </div> 
                                <div className="form-check">
                                    <label class="form-check-label" for="exampleRadios1">
                                        <input class="form-check-input-items" type="checkbox" name="exampleRadios" id="exampleRadios1" value="option1" unchecked></input>
                                        Apples
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label class="form-check-label" for="exampleRadios1">
                                        <input class="form-check-input-items" type="checkbox" name="exampleRadios" id="exampleRadios1" value="option1" unchecked></input>
                                        Dragon Fruit
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label class="form-check-label" for="exampleRadios1">
                                        <input class="form-check-input-items" type="checkbox" name="exampleRadios" id="exampleRadios1" value="option1" unchecked></input>
                                        Carrot
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="pickup-items">
                            <p id="input-field-label">Meat</p>
                            <div className="pickup-items-selection">
                                <div className="form-check">
                                    <label class="form-check-label" for="exampleRadios1">
                                        <input class="form-check-input-items" type="checkbox" name="exampleRadios" id="exampleRadios1" value="option1" unchecked></input>
                                        Tuna
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label class="form-check-label" for="exampleRadios1">
                                        <input class="form-check-input-items" type="checkbox" name="exampleRadios" id="exampleRadios1" value="option1" unchecked></input>
                                        Salmon
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label class="form-check-label" for="exampleRadios1">
                                        <input class="form-check-input-items" type="checkbox" name="exampleRadios" id="exampleRadios1" value="option1" unchecked></input>
                                        Ground Beef
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label class="form-check-label" for="exampleRadios1">
                                        <input class="form-check-input-items" type="checkbox" name="exampleRadios" id="exampleRadios1" value="option1" unchecked></input>
                                        Bacon
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label class="form-check-label" for="exampleRadios1">
                                        <input class="form-check-input-items" type="checkbox" name="exampleRadios" id="exampleRadios1" value="option1" unchecked></input>
                                        Other meat?
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="pickup-items">
                            <p id="input-field-label">Non-Perishables</p>
                            <div className="pickup-items-selection">
                                <div className="form-check">
                                    <label class="form-check-label" for="exampleRadios1">
                                        <input class="form-check-input-items" type="checkbox" name="exampleRadios" id="exampleRadios1" value="option1" unchecked></input>
                                        Canned Fruit
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label class="form-check-label" for="exampleRadios1">
                                        <input class="form-check-input-items" type="checkbox" name="exampleRadios" id="exampleRadios1" value="option1" unchecked></input>
                                        Canned Corn
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label class="form-check-label" for="exampleRadios1">
                                        <input class="form-check-input-items" type="checkbox" name="exampleRadios" id="exampleRadios1" value="option1" unchecked></input>
                                        Pasta
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label class="form-check-label" for="exampleRadios1">
                                        <input class="form-check-input-items" type="checkbox" name="exampleRadios" id="exampleRadios1" value="option1" unchecked></input>
                                        Instant Jello
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label class="form-check-label" for="exampleRadios1">
                                        <input class="form-check-input-items" type="checkbox" name="exampleRadios" id="exampleRadios1" value="option1" unchecked></input>
                                        Canned Vegetables
                                    </label>
                                </div>  
                            </div>
                        </div>
                        </div>
                    </div>
                </div> 
                <div className = 'main-appointment-scheduler-right'>
                    <h1 className = 'step-heading-2'>Step 2: Fill in your information.</h1>
                    <div className = "search-inputs">
                            <div className="input-name">
                            
                                <div className="text-field">
                                    <p id="input-field-label">First name</p>
                                    <input className="name-box" type="text" placeholder = "Jane" name="name" />
                                </div>
                                
                                <div className="text-field">
                                    <p id="input-field-label">Last name</p>
                                    <input className="name-box" type="text" placeholder = "Doe" name="name" />
                                </div>
                            </div>
                            <div className="text-field">
                                <p id="input-field-label">Email</p>
                                <input className="contact-box" type="text" placeholder = "janedoe@example.com" name="name" />
                            </div>
                            <div className="text-field">
                                <p id="input-field-label">Phone number</p>
                                <input className="contact-box" type="text" placeholder = "XXX-XXX-XXXX" name="name" />
                            </div>
                          
                    </div>
                    
                    <div className="pick-up-items">
                            <p id="input-field-label">Please select your dietary preferences.</p>
                            <div className="pickup-items-selection">
                                <div className="form-check">
                                    <label class="form-check-label" for="exampleRadios1">
                                        <input class="form-check-input" type="checkbox" name="exampleRadios" id="exampleRadios1" value="option1" unchecked></input>
                                        &nbsp;&nbsp;Vegetarian
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label class="form-check-label" for="exampleRadios1">
                                        <input class="form-check-input" type="checkbox" name="exampleRadios" id="exampleRadios1" value="option1" unchecked></input>
                                        &nbsp;&nbsp;Vegan
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label class="form-check-label" for="exampleRadios1">
                                        <input class="form-check-input" type="checkbox" name="exampleRadios" id="exampleRadios1" value="option1" unchecked></input>
                                        &nbsp;&nbsp;Gluten Free
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label class="form-check-label" for="exampleRadios1">
                                        <input class="form-check-input" type="checkbox" name="exampleRadios" id="exampleRadios1" value="option1" unchecked></input>
                                        &nbsp;&nbsp;Pescetarian
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label class="form-check-label" for="exampleRadios1">
                                        <input class="form-check-input" type="checkbox" name="exampleRadios" id="exampleRadios1" value="option1" unchecked></input>
                                        &nbsp;&nbsp;Include cat food
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label class="form-check-label" for="exampleRadios1">
                                        <input class="form-check-input" type="checkbox" name="exampleRadios" id="exampleRadios1" value="option1" unchecked></input>
                                        &nbsp;&nbsp;Include dog food
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="text-field">
                                <p id="input-field-label">Is there anything else we should know?</p>
                                <input className="contact-box" type="text" name="name" />
                            </div>
                </div>   
            </div>
            <div className = 'button-container'>
                <div className = 'clear-all-button'> 
                    {/* <h1 className = 'clear-all'>Clear all</h1>      */}
                    <input onClick={newFunction} className = "clear-all-button" type="button" value="Clear all"></input>
                    {/* <button className = "clear-all-button" type="button">Clear all</button> */}

            
                </div>
                <div className = 'submit-button'> 
                    {/* <h1 className = 'submit'>Submit</h1>   */}
                    <input className = "submit-button" type="button" onClick= {submitForm} value="Submit"></input>
                   
                </div>
            </div>
        </div>
    )
}
