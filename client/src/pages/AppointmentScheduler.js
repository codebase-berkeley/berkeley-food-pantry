import './AppointmentScheduler.css'
import React, { useState } from 'react';
// import 'rsuite/dist/rsuite.min.css';
import Select, { NonceProvider } from 'react-select';
import makeAnimated from 'react-select/animated';

const dates = [
    { value: 0, label: 'Select date...' },
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
        backgroundColor: state.isFocused ? "#E5E5E5" : 'white',
        color: state.isFocused ? '#464646' : '#464646'
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
        
        border: state.isFocused ? '1px solid #ACB9AC' : '1px solid #ACB9AC',
        boxShadow: state.isFocused ? '1px solid #ACB9AC' : '1px solid #ACB9AC',
        '&:hover': {
            border: state.isFocused ? '1px solid #ACB9AC' : '1px solid #ACB9AC'
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
    const[inputText, clearInputFields] = useState('')
    const[checkBoxInput, clearCheckBox] = useState(true)
    const[dropDownSelection, clearDropDown] = useState(0)
    const [selectedDate, setSelectedDate] = useState([]);
    const [selectedTime, setSelectedTime] = useState([]);
    
    function clearInputFieldsHelper() {
        for (var i = 1; i <= 5; i++) {
            var checkString = "input-values-" + i;
            if (document.getElementById(checkString).value != "") {
                document.getElementById(checkString).value = "";
            } 
        }

        for (var i = 1; i <= 21; i++) {
            var checkBox = "checkbox-" + i;
            if (document.getElementById(checkBox).checked = true) {
                document.getElementById(checkBox).checked = false;
            }
        }

        setSelectedDate([]); 
        setSelectedTime([]);
    }
    function submitForm() {
        console.log("contact information:")
        for (var i = 1; i <= 4; i++) {
            var checkString = "input-values-" + i;
            if (document.getElementById(checkString).value != "") {
                console.log(document.getElementById(checkString).value);
            }
        }
        
        console.log("items to pick up:")
        for (var i = 1; i <= 15; i++) {
            var checkString = "checkbox-" + i;
            if (document.getElementById(checkString).checked == true) {
                console.log(document.getElementById(checkString).value);
            }
        }

        console.log("dietary preferences:")
        for (var i = 16; i <= 21; i++) {
            var checkString = "checkbox-" + i;
            if (document.getElementById(checkString).checked == true) {
                console.log(document.getElementById(checkString).value);
            }
        }

        console.log("additional information:")
        console.log(document.getElementById('input-values-5').value);
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
                    <div className="scheduler-filters">               
                        <div className="appt-sched-dropdown">
                            <p id="input-field-label">Pick a date for your appointment:</p>
                            <div id="filter-dropdown">
                                <Select className="custom-dropdown" 
                                    id = "rat"
                                    styles={customStyles}
                                    closeMenuOnSelect={true}
                                    components={animatedComponents}
                                    placeholder="Select date..."
                                    options={dates}
                                    onChange={setSelectedDate}
                                    value={selectedDate}
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
                                    onChange={setSelectedTime}
                                    value={selectedTime}
                                />
                            </div>
                        </div>
                        <p id='input-field-label'>Which of the available items would you like to pick up?</p>
                        <div className = "left-checklist-container">
                        <div className="pickup-items">
                            <p id="item-checklist-label">Vegetables & Fruit</p>
                            <div className="pickup-items-selection">
                                
                                <div className="form-check">
                                
                                    <label class="form-check-label" for="exampleRadios1">
                                        <input class="form-check-input-items" type="checkbox" name="exampleRadios" id="checkbox-1" value="kale" ></input>
                                        Kale
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label class="form-check-label" for="exampleRadios1">
                                        <input class="form-check-input-items" type="checkbox" name="exampleRadios" id="checkbox-2" value="tomatoes" unchecked></input>
                                        Tomatoes
                                    </label>
                                </div> 
                                <div className="form-check">
                                    <label class="form-check-label" for="exampleRadios1">
                                        <input class="form-check-input-items" type="checkbox" name="exampleRadios" id="checkbox-3" value="apples" unchecked></input>
                                        Apples
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label class="form-check-label" for="exampleRadios1">
                                        <input class="form-check-input-items" type="checkbox" name="exampleRadios" id="checkbox-4" value="dragon fruit" unchecked></input>
                                        Dragon Fruit
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label class="form-check-label" for="exampleRadios1">
                                        <input class="form-check-input-items" type="checkbox" name="exampleRadios" id="checkbox-5" value="carrot" unchecked></input>
                                        Carrot
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="pickup-items">
                            <p id="item-checklist-label">Meat</p>
                            <div className="pickup-items-selection">
                                <div className="form-check">
                                    <label class="form-check-label" for="exampleRadios1">
                                        <input class="form-check-input-items" type="checkbox" name="exampleRadios" id="checkbox-6" value="tuna" unchecked></input>
                                        Tuna
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label class="form-check-label" for="exampleRadios1">
                                        <input class="form-check-input-items" type="checkbox" name="exampleRadios" id="checkbox-7" value="salmon" unchecked></input>
                                        Salmon
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label class="form-check-label" for="exampleRadios1">
                                        <input class="form-check-input-items" type="checkbox" name="exampleRadios" id="checkbox-8" value="ground beef" unchecked></input>
                                        Ground Beef
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label class="form-check-label" for="exampleRadios1">
                                        <input class="form-check-input-items" type="checkbox" name="exampleRadios" id="checkbox-9" value="bacon" unchecked></input>
                                        Bacon
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label class="form-check-label" for="exampleRadios1">
                                        <input class="form-check-input-items" type="checkbox" name="exampleRadios" id="checkbox-10" value="other meat?" unchecked></input>
                                        Other meat?
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="pickup-items">
                            <p id="item-checklist-label">Non-Perishables</p>
                            <div className="pickup-items-selection">
                                <div className="form-check">
                                    <label class="form-check-label" for="exampleRadios1">
                                        <input class="form-check-input-items" type="checkbox" name="exampleRadios" id="checkbox-11" value="canned fruit" unchecked></input>
                                        Canned Fruit
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label class="form-check-label" for="exampleRadios1">
                                        <input class="form-check-input-items" type="checkbox" name="exampleRadios" id="checkbox-12" value="cannced corn" unchecked></input>
                                        Canned Corn
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label class="form-check-label" for="exampleRadios1">
                                        <input class="form-check-input-items" type="checkbox" name="exampleRadios" id="checkbox-13" value="pasta" unchecked></input>
                                        Pasta
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label class="form-check-label" for="exampleRadios1">
                                        <input class="form-check-input-items" type="checkbox" name="exampleRadios" id="checkbox-14" value="instant jello" unchecked></input>
                                        Instant Jello
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label class="form-check-label" for="exampleRadios1">
                                        <input class="form-check-input-items" type="checkbox" name="exampleRadios" id="checkbox-15" value="canned vegetables" unchecked></input>
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
                                    <div id = 'mainContainer'>
                                    <input className="name-box" type="text" placeholder = "Jane" name="name" id = "input-values-1" />
                                    </div>
                                </div>
                                
                                <div className="text-field">
                                    <p id="input-field-label">Last name</p>
                                    <input className="name-box" type="text" placeholder = "Doe" name="name" id = "input-values-2"/>
                                </div>
                            </div>
                            <div className="text-field">
                                <p id="input-field-label">Email</p>
                                <input className="contact-box" type="text" placeholder = "janedoe@example.com" name="name" id = "input-values-3"/>
                            </div>
                            <div className="text-field">
                                <p id="input-field-label">Phone number</p>
                                <input className="contact-box" type="text" placeholder = "XXX-XXX-XXXX" name="name" id = "input-values-4"/>
                            </div>
                    </div>
                    
                    <div className="pick-up-items">
                            <p id="input-field-label">Please select your dietary preferences.</p>
                            <div className="pickup-items-selection">
                                <div className="form-check">
                                    <label className="form-check-label" for="exampleRadios1">
                                        <input className="form-check-input" type="checkbox" name="exampleRadios" id="checkbox-16" value="vegetarian" unchecked></input>
                                        &nbsp;&nbsp;Vegetarian
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label" for="exampleRadios1">
                                        <input className="form-check-input" type="checkbox" name="exampleRadios" id="checkbox-17" value="vegan" unchecked></input>
                                        &nbsp;&nbsp;Vegan
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label" for="exampleRadios1">
                                        <input className="form-check-input" type="checkbox" name="exampleRadios" id="checkbox-18" value="gluten free" unchecked></input>
                                        &nbsp;&nbsp;Gluten Free
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label" for="exampleRadios1">
                                        <input className="form-check-input" type="checkbox" name="exampleRadios" id="checkbox-19" value="pescetarian" unchecked></input>
                                        &nbsp;&nbsp;Pescetarian
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label" for="exampleRadios1">
                                        <input className="form-check-input" type="checkbox" name="exampleRadios" id="checkbox-20" value="include cat food" unchecked></input>
                                        &nbsp;&nbsp;Include cat food
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label" for="exampleRadios1">
                                        <input className="form-check-input" type="checkbox" name="exampleRadios" id="checkbox-21" value="include dog food" unchecked></input>
                                        &nbsp;&nbsp;Include dog food
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="text-field">
                                <p id="input-field-label">Is there anything else we should know?</p>
                                <textarea className="contact-box" type="text" name="name" id = 'input-values-5'/>
                            </div>
                </div>   
            </div>
            <div className = 'button-container'>
                <div className = 'clear-all-button'> 
                    {/* <h1 className = 'clear-all'>Clear all</h1>      */}
                    <input onClick={clearInputFieldsHelper} className = "clear-all-button" type="button" id ="btClear" value="Clear all"></input>
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
