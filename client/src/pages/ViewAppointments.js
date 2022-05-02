import React, {useState} from "react";
import './../components/SearchBar.css';
import './ViewAppointments.css';
import 'rsuite/dist/rsuite.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select, { NonceProvider } from 'react-select';
import makeAnimated, { ValueContainer } from 'react-select/animated';
import AppointmentCard from './../components/AppointmentCard';
import Details from './../components/Details';
import apple from "./../images/apple.png";
import banana from "./../images/banana.png";
import coconut from "./../images/cocunut.png";
import donut from './../images/donut.png';
import broccoli from './../images/brocolli.png';
import cannedBeans from './../images/cannedBeans.png';
import { Helmet } from 'react-helmet';

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

const appt = [ {firstname: 'yojita', lastname: 'sharma', instock: true, tags: ["Vegetarian", "Brown"] }, 
];

const food = [ {name: 'Donut', image: donut, instock: true, tags: ["Vegetarian", "Brown"] }, 
{name: 'Banana', image: banana, instock: false, tags: ["Vegetarian", "Vegan", "Gluten-free", "Fruit", "Yellow"] }, 
{name: 'Coconut', image: coconut, instock: true, tags: ["Vegetarian", "Vegan", "Gluten-free", "Fruit", "Brown"] }, 
{name: 'Broccoli', image: broccoli, instock: true, tags: [ "Vegan", "Gluten-free", "Fruit", "Brown"] }, 
{name: 'Canned Beans', image: cannedBeans, instock: false, tags: ["Meat", "Vegan", "Gluten-free", "Brown"] }, 
{name: 'Apple', image: apple, instock: true, tags: ["Vegetarian", "Vegan", "Gluten-free", "Fruit", "Red"]} 
];

const card = [ {date: 'Monday, April 4 2022', time: '2:00 PM', firstName: 'Abby', lastName: 'Brooks', visited:false, email: 'abigail.brooks@berkeley.edu', phoneNumber: '341-766-8021', dietary_data: ["Vegetarian", "Lactose-intolerant"], item_data:["Empanadas", "Olive oil popcorn"], notes:'none, thanks!'},
{date: 'Wednesday, April 6 2022', time: '3:00 PM', firstName: 'Anthony', lastName: 'Lu', visited:false, email: 'abigail.brooks@berkeley.edu', phoneNumber: '341-766-8021', dietary_data: ["Vegetarian", "Lactose-intolerant"], item_data:["Empanadas", "Olive oil popcorn"], notes:'none, thanks!'},
{date: 'Friday, April 5 2022', time: '3:30 PM', firstName: 'Aditya', lastName: 'Bhandari', visited:false, email: 'abigail.brooks@berkeley.edu', phoneNumber: '341-766-8021', dietary_data: ["Vegetarian", "Lactose-intolerant"], item_data:["Empanadas", "Olive oil popcorn"], notes:'none, thanks!'},
{date: 'Friday, April 7 2022', time: '1:00 PM', firstName: 'Gargi', lastName: 'Deshpande', visited:false, email: 'abigail.brooks@berkeley.edu', phoneNumber: '341-766-8021', dietary_data: ["Vegetarian", "Lactose-intolerant"], item_data:["Empanadas", "Olive oil popcorn"], notes:'none, thanks!'},
{date: 'Wednesday, April 6 2022', time: '2:00 PM', firstName: 'Mawil', lastName: 'Hasan', visited:false, email: 'abigail.brooks@berkeley.edu', phoneNumber: '341-766-8021', dietary_data: ["Vegetarian", "Lactose-intolerant"], item_data:["Empanadas", "Olive oil popcorn"], notes:'none, thanks!'},
{date: 'Monday, April 4 2022', time: '1:30 PM', firstName: 'Yojita', lastName: 'Sharma', visited:false, email: 'abigail.brooks@berkeley.edu', phoneNumber: '341-766-8021', dietary_data: ["Vegetarian", "Lactose-intolerant"], item_data:["Empanadas", "Olive oil popcorn"], notes:'none, thanks!'}
];

export function ViewAppointments() {
    const [selectedSort, setSelectedSort] = useState();
    const [selectedTags, setSelectedTags] = useState([]);
    const [selectedShow, setSelectedShow] = useState(0);
    const [searchInput, setSearchInput] = useState("");
    const [selectedDay, setSelectedDay] = useState("all");
    const [selectedTime, setSelectedTime] = useState("all");

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
    
    function apptDayFilter(card) {
        if (selectedDay == "all" || selectedDay.value.charAt(0) == 'a') {
            return true; 
        }
        return card.date.toLowerCase().charAt(0) == selectedDay.value.charAt(0);
    }

    function apptTimeFilter(card) {
        const splitInt = card.time.split(":");
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
        <div className="full-page">

            <div className="stockListingPage">

                <div className="view-appts-top-container">

                    <div className="view-appts-show-appointments">
                        <p>Show appointments for:</p>
                        
                        <div className="view-appts-show-dropdowns">
                            <div className="view-appts-by-day">
                                <div>
                                    <Select className="view-appts-custom-dropdown"
                                        styles={customStyles}
                                        closeMenuOnSelect={true}
                                        components={animatedComponents}
                                        options={apptOptions}
                                        defaultValue={apptOptions[0]}
                                        value={selectedDay}
                                        onChange={setSelectedDay}
                                    />
                                </div>
                            </div>
                            <div className="view-appts-by-time">
                                <div>
                                    <Select className="view-appts-custom-dropdown"
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

                    <div className="view-appts-checkboxes">
                        
                        <div className ="view-appts-form-check-label">
                            <span> Show appointments marked visited</span>
                            <input type="checkbox"/>
                        </div>

                        <div className ="view-appts-form-check-label">
                            <span>Show past appointments</span>
                            <input type="checkbox"/>
                        </div>
                                
                    </div>

                </div>

                <div className="view-appts-bottomContainer">

                    <div className="view-appts-appt-card-display">
                        {card
                            .filter(apptDayFilter)
                            .filter(apptTimeFilter)
                            .map(filteredAppt => (
                                <AppointmentCard
                                    date={filteredAppt.date}
                                    time={filteredAppt.time}
                                    firstName={filteredAppt.firstName}
                                    lastName={filteredAppt.lastName}
                                    visited={filteredAppt.visited}/>
                            ))
                        }
                        {/* <AppointmentCard date="Monday, April 4 2022" time="11:00 AM"firstName="Anthony" lastName ="Lu" visited={false}/>
                        <AppointmentCard date="Monday, April 4 2022" time="2:00 PM"firstName="Yojita" lastName ="Sharma" />
                        <AppointmentCard date="Monday, April 4 2022" time="4:00 PM"firstName="Gargi" lastName ="Deshpande" />
                        <AppointmentCard date="Monday, April 4 2022" time="4:00 PM"firstName="Mawil" lastName ="Hasan" />
                        <AppointmentCard date="Monday, April 4 2022" time="4:00 PM"firstName="Abby" lastName ="Brooks" />
                        <AppointmentCard date="Monday, April 4 2022" time="4:00 PM"firstName="Aditya" lastName ="Bhandari" /> */}
                    </div>

                    <div className="view-appts-appointments-detail-display">
                        <Details date="Monday, April 4 2022" time="4:00 PM"firstName="Abby" lastName ="Brooks" email="abigail.brooks@berkeley.edu" phoneNumber="341-766-8021" dietary_data={["Vegetarian", "Lactose-intolerant"]} item_data={["Empanadas", "Olive oil popcorn"]} notes="none, thanks!"/>
                    </div> 
                </div>
            </div>
            <Helmet>
                <title>View Appointments</title>
            </Helmet>  
        </div>
    )
}
