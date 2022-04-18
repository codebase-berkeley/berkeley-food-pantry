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

// import moment from 'moment';
// import { applyPatch } from "prettier";

const apptOptions = [
    { value: 'all', label: 'All appointments this week' },
    { value: 'monday', label: 'All appointments on Monday' }, 
    { value: 'wednesday', label: 'All appointments on Wednesday' }, 
    { value: 'friday', label: 'All appointments on Friday' }
]

const timeOptions = [
    { value: 'all', label: 'All times this week' },
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
{firstname: 'anthony', lastname: 'lu', date: "Wednesday, April 2022", time: "2:15"},
{firstname: 'gargi', lastname: 'deshpande', date: "Friday, April 2022", time: "2:30" },
{firstname: 'isabel', lastname: 'li', date: "Wednesday, April 2022", time: "2:30" },
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
        const splitInt = appt.time.split(":");
        const newSplitInt = parseInt(splitInt[0]) * 100 + parseInt(splitInt[1]);
        console.log(splitInt);
        console.log(newSplitInt);
        if (selectedTime == "all" || selectedTime.value.charAt(0) == 'a') {
            return true; }
        else if (selectedTime.value == "2:00-2:30") {
            return ((newSplitInt >= 200) && (newSplitInt <= 230));
            }
        else if ((selectedTime.value == "2:30-3:00")) {
            return ((newSplitInt >= 230) && (newSplitInt <= 300));
            }
        else if ((selectedTime.value == "3:00-3:30")) {
            return ((newSplitInt >= 300) && (newSplitInt <= 330));
            }
        else if ((selectedTime.value == "3:30-4:00")) {
            return ((newSplitInt >= 330) && (newSplitInt <= 400));
            }           
        }

    return (
        <div className="appt-full-page">

            <div className="stockListingPage">

                <div className="top-container">

                    <div className="show-appointments">
                        <p>Show appointments for:</p>
                        
                        <div className="show-appt-dropdowns">
                            <div className="appt-by-day">
                                <div>
                                    <Select className="appt-custom-dropdown"
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
                            <div className="appt-by-time">
                                <div>
                                    <Select className="appt-custom-dropdown-2"
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
                   
                        <div className="appointment-filter-checkboxes"> 
                            <div className ="appointment-form-check-label">
                                <span className ="appts-text">Show appointments marked visited</span>
                                <input className = "appointment-view-input"type="checkbox"/>
                            </div>
                            <div className ="appointment-form-check-label">
                                <span className ="appts-text">Show past appointments</span>
                                <input className = "appointment-view-input" type="checkbox"/>
                            </div>
                         </div>
                    </div>


                <div className="apptBottomContainer">

                    <div className="appt-card-display">
                        {appt
                            .filter(apptDayFilter).filter(apptTimeFilter).map(filteredAppt => (
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
