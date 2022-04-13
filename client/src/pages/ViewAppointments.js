import React, {useState} from "react";
import Search from './../components/SearchBar.js';
import './../components/SearchBar.css';
import './ViewAppointments.css';
import 'rsuite/dist/rsuite.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import isbesPlusSign from './../images/plusSign.svg';
import Select, { NonceProvider } from 'react-select';
import makeAnimated, { ValueContainer } from 'react-select/animated';
import { borderColor } from "@mui/system";
import Food from './../components/Food.js';
import DummyAppointment from './../components/DummyAppointment';
import apple from "./../images/apple.png";
import banana from "./../images/banana.png";
import coconut from "./../images/cocunut.png";
import meat from "./../images/meat.png";
import donut from './../images/donut.png';
import broccoli from './../images/brocolli.png';
import cannedBeans from './../images/cannedBeans.png';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import moment from 'moment';

const apptOptions = [
    { value: 'all', label: 'All appointments this week' },
    { value: 'monday', label: 'All appointments on Monday' }, 
    { value: 'wednesday', label: 'All appointments on Wednesday' }, 
    { value: 'friday', label: 'All appointments on Friday' }
]

const timeOptions = [
    { value: '2:00-2:30', label: '2:00 PM - 2:30 PM' },
    { value: '2:30-3:00', label: '2:30 PM - 3:00 PM' }, 
    { value: '3:00-3:30', label: '3:00 PM - 3:30 PM' },
    { value: '3:30-4:00', label: '3:30 PM - 4:00 PM' }
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
        color: "#000000"
    }),

    dropdownIndicator: base => ({
        ...base,
        color: "#ACB9AC"
    }),

    IndicatorSeparator: () => null,

    control: (provided, state) => ({
        ...provided,
        width: '15vw',
        borderRadius: '.5vw',
        textOverflow: "hidden",
        whiteSpace: "nowrap",
        overflow: "hidden",
        flexWrap: 'nowrap',
        border: state.isFocused ? '1.5px solid #ACB9AC' : '1.5px solid #ACB9AC',
        boxShadow: state.isFocused ? '1.5px solid #ACB9AC' : '1.5px solid #ACB9AC',
        '&:hover': {
            border: state.isFocused ? '1.5px solid #ACB9AC' : '1.5px solid #ACB9AC'
        },
    }),

    multiValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';

        return {
            ...provided, 
            opacity, 
            transition, 
            borderRadius: '20px', 
            paddingLeft: '5px', 
            paddingRight: '5px',
        };
    },
}

const appt = [ {firstname: 'yojita', lastname: 'sharma', date: "Monday, April 2022", time: "2:00" },
{firstname: 'anthony', lastname: 'lu', date: "Wednesday, April 2022", time: "2:15" ,timeValue: 215},
{firstname: 'gargi', lastname: 'deshpande', date: "Friday, April 2022", time: "2:30" },
{firstname: 'isabel', lastname: 'li', date: "Friday, April 2022", time: "2:45" },
{firstname: 'isabel', lastname: 'li', date: "Friday, April 2022", time: "3:00" },
{firstname: 'isabel', lastname: 'li', date: "Friday, April 2022", time: "3:15" },
{firstname: 'isabel', lastname: 'li', date: "Friday, April 2022", time: "3:30" },
{firstname: 'isabel', lastname: 'li', date: "Friday, April 2022", time: "3:45" },
{firstname: 'isabel', lastname: 'li', date: "Friday, April 2022", time: "4:00" },

];

export function ViewAppointments() {
    const [selectedSort, setSelectedSort] = useState();
    const [selectedTags, setSelectedTags] = useState([]);
    const [selectedShow, setSelectedShow] = useState(0);
    const [selectedDay, setSelectedDay] = useState("all");
    const [selectedTime, setSelectedTime] = useState("all");
    const [searchInput, setSearchInput] = useState("");
    // var moment = require('moment');
    // moment("123", "hmm").format("HH:mm")


    function apptDayFilter(appt) {
        if (selectedDay == "all" || selectedDay.value.charAt(0) == 'a') {
            return true; }

        return appt.date.toLowerCase().charAt(0) == selectedDay.value.charAt(0);
    }
    
    function apptTimeFilter(appt) {
        if (selectedTime == "all" || selectedTime.value.charAt(0) == 'a') {
            return true; }
    
        if (((appt.time.charAt(0) == selectedTime.value.charAt(0)) && ((appt.time.substring(2,3) == selectedTime.value.substring(2,3)))) || (selectedTime.value.charAt(11) == appt.time.charAt(0)) || 
            ((appt.time.charAt(0) == selectedTime.value.charAt(0)) && (((appt.time.charAt(2) == "1") || (appt.time.charAt(2) == "3") || appt.time.charAt(2) == "4")))) {
            return true;
        }
    }
    return (
        <div className="full-page">

            <div className="stockListingPage">

                <div className="top-container">

                    <div className="show-appointments">
                        <p>Show appointments for:</p>
                        
                        <div className="show-dropdowns">
                            <div className="by-day">
                                <div>
                                    <Select className="custom-dropdown"
                                        styles={customStyles}
                                        closeMenuOnSelect={true}
                                        components={animatedComponents}
                                        options={apptOptions}
                                        defaultValue={apptOptions[0]}
                                        value={selectedDay}
                                        // onChange={e => setSelectedDay(e.target.value)}
                                        onChange={setSelectedDay}
                                    />
                                </div>
                            </div>
                            <div className="by-time">
                                <div>
                                    <Select className="custom-dropdown-2"
                                        styles={customStyles}
                                        closeMenuOnSelect={true}
                                        components={animatedComponents}
                                        options={timeOptions}
                                        defaultValue={timeOptions[0]}
                                        value={selectedTime}
                                        onChange={setSelectedTime}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="checkboxes"> */}
                        
                    {/* <li>
                        <label for="checkid"  style="word-wrap:break-word" className ="form-check-label">
                            <input id="checkid"  type="checkbox" value="test" /> Show appointments marked visited
                        </label>
                    </li> */}
                        {/* <div className ="form-check-label">
                            <span>Show appointments marked visited</span>
                            <input style={{}} type="checkbox"/>
                        </div> 
                        style={{width: "10px", paddingLeft: "5%"}*/}

                        <div className ="form-check-label">
                            <span className ="appts-text">Show appointments marked visited</span>
                            <input className="checkers" type="checkbox"/>
                        </div>
                                
                    </div>

                {/* </div> */}

                <div className="bottomContainer">

                    <div className="appt-card-display">
                        {appt
                            .filter(apptTimeFilter).map(filteredAppt => (
                                <DummyAppointment
                                    date={filteredAppt.date}
                                    time={filteredAppt.time}
                                    firstname={filteredAppt.firstname}
                                    lastname={filteredAppt.lastname}/>
                            ))
                        }
                    </div>

                    <div className="filterItemDisplay">
                        
                    </div> 
                </div>
            </div>
        </div>
    )
}
