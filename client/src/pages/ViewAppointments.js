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


const foodCategories = [
    { value: 'chocolate', label: 'Meat' },
    { value: 'strawberry', label: 'Veggies' },
    { value: 'beverages', label: 'Beverages' },
    { value: 'vegetarian', label: 'Vegetarian'}
]

const sortOptions = [
    { value: 'morning', label: 'Morning' },
    { value: 'afternoon', label: 'Afternoon' }, 
    { value: 'evening', label: 'Evening' }
]

const showOptions = [
    { value: 'all items', label: 'All items'},
    { value: 'in stock items', label: 'In stock items only'},
    { value: 'not in stock items', label: 'Not in stock items only'}
]

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

const appt = [ {firstname: 'yojita', lastname: 'sharma', date: "Monday, April 2022", time: "2:30" },
{firstname: 'anthony', lastname: 'sharma', date: "Wednesday, April 2022", time: "3:00"},
{firstname: 'gargi', lastname: 'sharma', date: "Friday, April 2022", time: "3:30" }
];

const food = [ {name: 'Donut', image: donut, instock: true, tags: ["Vegetarian", "Brown"] }, 
{name: 'Banana', image: banana, instock: false, tags: ["Vegetarian", "Vegan", "Gluten-free", "Fruit", "Yellow"] }, 
{name: 'Coconut', image: coconut, instock: true, tags: ["Vegetarian", "Vegan", "Gluten-free", "Fruit", "Brown"] }, 
{name: 'Broccoli', image: broccoli, instock: true, tags: [ "Vegan", "Gluten-free", "Fruit", "Brown"] }, 
{name: 'Canned Beans', image: cannedBeans, instock: false, tags: ["Meat", "Vegan", "Gluten-free", "Brown"] }, 
{name: 'Apple', image: apple, instock: true, tags: ["Vegetarian", "Vegan", "Gluten-free", "Fruit", "Red"]} 
];

export function ViewAppointments() {
    const [selectedSort, setSelectedSort] = useState();
    const [selectedTags, setSelectedTags] = useState([]);
    const [selectedShow, setSelectedShow] = useState(0);
    const [selectedDay, setSelectedDay] = useState();
    const [selectedTime, setSelecedTime] = useState("");
    const [searchInput, setSearchInput] = useState("");

    
    function apptDayFilter(appt) {
        if (selectedDay.value == "all") {
            return;
        } else if (selectedDay.value == "monday") {
            return appt.date.substring(0, 6) == "Monday";    
        } else if (selectedDay.value == "wednesday") {
            return appt.date.substring(0, 9) == "Wednesday";
        } else if (selectedDay.value == "friday") {
            return appt.date.substring(0, 6) == "Friday"; 
        }
    }
    
    function apptTimeFilter(appt) {
        if (selectedTime.value == "all") {
            return true;
        }
        else if (selectedTime.value == "2:00-2:30") {
            return (appt.time.substring(0, 7) == "2:00 PM" || appt.time.substring(0, 7) == "2:15 PM" || appt.time.substring(0, 7) == "2:30 PM")
        } 
        else if (selectedTime.value == "2:30 - 3:00") {
            return (appt.time.substring(0, 7) == "2:30 PM" || appt.time.substring(0, 7) == "2:45 PM" || appt.time.substring(0, 7) == "3:00 PM")
        }
        else if (selectedTime.value == "3:00-3:30") {
            return (appt.time.substring(0, 7) == "3:00 PM" || appt.time.substring(0, 7) == "3:15 PM" || appt.time.substring(0, 7) == "3:30 PM")
        }
        else if (selectedTime.value == "3:30-3:40") {
            return (appt.time.substring(0, 7) == "3:30 PM" || appt.time.substring(0, 7) == "3:45 PM" || appt.time.substring(0, 7) == "4:00 PM")
        }
    }
    
    function clearInputFieldsHelper() {
        setSelectedSort();
        setSelectedTags([]);
        setSelectedShow(0);
        setSearchInput("");
    }

    function sortAZ(a, b) {
        const nameA = a.name.toUpperCase(); // ignore upper and lowercase
        const nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        // names must be equal
        return 0;
    }

    function tagMatchFunction(foodObject) {
        
        for (const tag of selectedTags.map(tagObject => tagObject.label)) {
            if (!foodObject.tags.includes(tag)) {
                return false;
            } 
        }
        return true;
    }

    function mostRecent() {
        return;
    }

    function stockFilterFunction(foodObject) {
        if (selectedShow == 0) {
            return true;
        } else if (selectedShow == 1) {
            return foodObject.instock;
        } else if (selectedShow == 2) {
            return !foodObject.instock;
        }
    }

    function setOutOfStock() {
        console.log("clicked")
        for (const f of food) {
            f.instock = false;
        }

        // TODO: we're forcing a rerender because the array is external, fix this later
        setSelectedSort(selectedShow)
    }

    
    function getSort() {
        if (selectedSort == null) {
            return;
        } else if (selectedSort.value == "recently added") {
            return mostRecent;
        } else if (selectedSort.value == "alphabetical") {
            return sortAZ;
        }
    }

    function searchFunction(foodObject) {
        
        if (foodObject.name.toUpperCase().includes(searchInput.toUpperCase())) {
            return true; 
        } else {
            return false; 
        }
    }
    console.log(food);
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
                                        value={apptOptions.value}
                                        onChange={helper}
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
                                        value={selectedSort}
                                        onChange={setSelectedSort}
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
                        <DummyAppointment date="Monday, April 4 2022" time="11:00 AM"firstname="Anthony" lastname ="Lu" />
                        <DummyAppointment date="Monday, April 4 2022" time="2:00 PM"firstname="Yojita" lastname ="Sharma" />
                        <DummyAppointment date="Monday, April 4 2022" time="4:00 PM"firstname="Gargi" lastname ="Deshpande" />
                        <DummyAppointment date="Monday, April 4 2022" time="4:00 PM"firstname="Mawil" lastname ="Hasan" />
                        <DummyAppointment date="Monday, April 4 2022" time="4:00 PM"firstname="Abby" lastname ="Brooks" />
                        <DummyAppointment date="Monday, April 4 2022" time="4:00 PM"firstname="Aditya" lastname ="Bhandari" />
                        <DummyAppointment date="Monday, April 4 2022" time="4:00 PM"firstname="Aditya" lastname ="Bhandari" />
                    </div>

                    <div className="filterItemDisplay">
                        {appt
                            .sort(apptTimeFilter()).map(apptSlot => (
                                <DummyAppointment 
                                    firstname={apptSlot.firstname} 
                                    lastname={apptSlot.lastname}
                            />))}
                    </div> 
                </div>
            </div>
        </div>
    )
}
