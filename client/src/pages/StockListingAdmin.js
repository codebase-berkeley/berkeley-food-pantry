import React, {useState, useEffect} from "react";
import Search from './../components/SearchBar.js';
import './../components/SearchBar.css';
import './StockListingAdmin.css';
import 'rsuite/dist/rsuite.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import isbesPlusSign from './../images/plusSign.svg';
import Select, { NonceProvider } from 'react-select';
import makeAnimated, { ValueContainer } from 'react-select/animated';
import Food from './../components/Food.js';
import apples from "./../images/apple.png";
import banana from "./../images/banana.png";
import coconut from "./../images/cocunut.png";
import donut from './../images/donut.png';
import broccoli from './../images/brocolli.png';
import cannedBeans from './../images/cannedBeans.png';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import axios from "axios";
import AdminLoginNavbar from "./AdminLoginNavbar.js";



const foodCategories = [
    { value: 'chocolate', label: 'Meat' },
    { value: 'strawberry', label: 'Veggies' },
    { value: 'beverages', label: 'Beverages' },
    { value: 'pescatarian', label: 'Pescatarian' },
    { value: 'fruit', label: 'Fruit' },
    { value: 'dairy', label: 'Dairy' },
    { value: 'seafood', label: 'Seafood' },
    { value: 'pet food', label: 'Pet food' },
    { value: 'brown', label: 'Brown'},
    { value: 'vegetarian', label: 'Vegetarian'}
]

const sortOptions = [
    { value: 'recently added', label: 'Most Recently Added' },
    { value: 'alphabetical', label: 'Alphabetical, A-Z' }
    
]

const showOptions = [
    { value: 'all items', label: 'All items'},
    { value: 'in stock items', label: 'In stock items only'},
    { value: 'not in stock items', label: 'Not in stock items only'}
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
        width: '20vw',
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

const food = [ {name: 'Donut', image: donut, instock: true, tags: ["Vegetarian", "Brown"] }, 
{name: 'Banana', image: banana, instock: false, tags: ["Vegetarian", "Vegan", "Gluten-free", "Fruit", "Yellow"] }, 
{name: 'Coconut', image: coconut, instock: true, tags: ["Vegetarian", "Vegan", "Gluten-free", "Fruit", "Brown"] }, 
{name: 'Broccoli', image: broccoli, instock: true, tags: [ "Vegan", "Gluten-free", "Fruit", "Brown"] }, 
{name: 'Canned Beans', image: cannedBeans, instock: false, tags: ["Meat", "Vegan", "Gluten-free", "Brown"] }, 
{name: 'Apple', image: apples, instock: true, tags: ["Vegetarian", "Vegan", "Gluten-free", "Fruit", "Red"]} 

];


export function StockListingAdmin() {
    const [selectedSort, setSelectedSort] = useState();
    const [selectedTags, setSelectedTags] = useState([]);
    const [selectedShow, setSelectedShow] = useState(0);
    const [searchInput, setSearchInput] = useState("");
    useEffect(() => {
        axios.get('http://localhost:4000/check_authenticated', { withCredentials: true})
           .catch((error) => {
               if (error.response.status === 403) {
                   window.location.href = "/login"

               }
           });
        
    }, [])

    function clearInputFieldsHelper() {
        setSelectedSort(sortOptions[0]);
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


    return (
        <>
        <AdminLoginNavbar isAdmin={true}/>
        <div className="stocklisting-entireContent">

            <div className="stocklisting-stockListingPage">

                <div className="stocklisting-topContainer">

                    <div className="stocklisting-leftSide">
                        <h1>Edit Today's Stock</h1>
                        <p>Manage today's stock listing.</p>
                    </div>


                    <div className="stocklisting-rightSide">
                         <Link to="/add-food" className = "stocklisting-addButton" style = {{textDecoration: 'none'}}>
                            <img src={isbesPlusSign}></img>
                            <div className="stocklisting-addItem"> Add new item </div>
                    </Link>
                        <button className="stocklisting-changeStock" onClick={() => setOutOfStock()}> Set all items to out of stock </button>

                    </div>

                </div>

                <div className="stocklisting-bottomContainer">

                    <div className="stocklisting-filterItemControls">

                        <div className="stocklisting-filterReset">
                            <div className="stocklisting-filterItems">Filter Items</div>
                            <button className="stocklisting-resetFilters" onClick={clearInputFieldsHelper}>Reset Filters</button>

                        </div>

                        <div className="stocklisting-filters">
                            <div className="stocklisting-searchBox">
                                <text>Search Items</text>
                                <Search placeholder="Search..." searchInput={searchInput} setSearchInput={setSearchInput}/>
                            </div>

                            <div className="stocklisting-filter-by">
                                <p id="stocklisting-filterControlLabel">Filter by Dietary Categories</p>
                                <div id="stocklisting-filter-dropdown">
                                    <Select className="stocklisting-custom-dropdown"
                                        styles={customStyles}
                                        closeMenuOnSelect={false}
                                        components={animatedComponents}
                                        placeholder="Select..."
                                        isMulti
                                        options={foodCategories}
                                        value={selectedTags}
                                        onChange={setSelectedTags}
                                    />
                                </div>
                            </div>

                            <div className="stocklisting-sort-by">
                                <p id="stocklisting-filterControlLabel">Sort By...</p>
                                <div>
                                    <Select className="stocklisting-custom-dropdown"
                                        styles={customStyles}
                                        closeMenuOnSelect={true}
                                        components={animatedComponents}
                                        placeholder="Alphabetical, A-Z"
                                        options={sortOptions}
                                        defaultValue={sortOptions[0]}
                                        value={selectedSort}
                                        onChange={setSelectedSort}
                                    />
                                </div>
                            </div>


                            <div className="stocklisting-showFilter">
                                <div className="stocklisting-howText"> Show </div>
                                <div className="stocklisting-form-check">
                                    <label class="stocklisting-form-check-label" for="exampleRadios1">
                                        <input class="form-check-input" type="radio" checked={selectedShow == 0} onChange={e => {
                                            if (e.target.checked) {
                                                setSelectedShow(0);
                                            }
                                        }}></input>
                                        All items
                            
                                    </label>
                                </div>

                                <div className="stocklisting-form-check">
                                    <label class="stocklisting-form-check-label" for="exampleRadios1">
                                        <input class="form-check-input" type="radio" checked={selectedShow == 1} onChange={e => {
                                            if (e.target.checked) {
                                                setSelectedShow(1);
                                            }
                                        } }></input>

                                        In stock items only
                                    </label>
                                </div>
                                

                                <div className="stocklisting-form-check">
                                    <label class="stocklisting-form-check-label" for="exampleRadios1">
                                        <input class="form-check-input" type="radio" checked={selectedShow == 2} onChange={e => {
                                            if (e.target.checked) {
                                                setSelectedShow(2);
                                            }
                                        }} ></input>

                                        Not in stock items only
                                    </label>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="stocklisting-filterItemDisplay">
                        {food
                            .filter(searchFunction)
                            .filter(tagMatchFunction)
                            .filter(stockFilterFunction)
                            // .filter(tagMatchFunction)
                            .sort(getSort()).map(foodItem => (
                                <Food 
                                    name={foodItem.name} 
                                    image={foodItem.image} 
                                    in_stock={foodItem.instock} 
                                    tags={foodItem.tags} 
                                    admin={true}
                                    
                                    />))}

                    </div>
                </div>
            </div>

            <Helmet>
                <title>Edit Today's Stock</title>
            </Helmet>
        </div>
        </>
    )
}

export function StockListingUser() {
    const [selectedSort, setSelectedSort] = useState();
    const [selectedTags, setSelectedTags] = useState([]);
    const [selectedShow, setSelectedShow] = useState(0);
    const [searchInput, setSearchInput] = useState("");

    function clearInputFieldsHelper() {
        setSelectedSort(sortOptions[0]);
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
    
    return (
        <>
        <AdminLoginNavbar isAdmin={false}/>


        <div className="stocklisting-entireContent">

            <div className="stocklisting-stockListingPage">

                <div className="stocklisting-topContainer">

                    <div className="stocklisting-leftSide">
                        <h1>Check out what we have in stock today.</h1>
                        <p>Last updated: March 25, 7:47am.<br></br>
                        Stock availability varies day by day. If something you’re looking for is out of stock, it might be available on another day.</p>
                    </div>

                </div>

                <div className="stocklisting-bottomContainer">

                    <div className="stocklisting-filterItemControls">

                        <div className="stocklisting-filterReset">
                            <div className="stocklisting-filterItems">Filter Items</div>
                            <button className="stocklisting-resetFilters">Reset Filters</button>
                        </div>

                        <div className="stocklisting-filters">
                            <div className="stocklisting-searchBox">
                                <text>Search Items</text>
                                <Search placeholder="Search..." searchInput={searchInput} setSearchInput={setSearchInput}/>
                            </div>

                            <div className="stocklisting-filter-by">
                                <p id="stocklisting-filterControlLabel">Filter by Dietary Categories</p>
                                <div id="stocklisting-filter-dropdown">
                                    <Select className="stocklisting-custom-dropdown"
                                            styles={customStyles}
                                            closeMenuOnSelect={false}
                                            components={animatedComponents}
                                            placeholder="Select..."
                                            isMulti
                                            options={foodCategories}
                                            value={selectedTags}
                                            onChange={setSelectedTags}
                                    />
                                </div>
                            </div>

                            <div className="stocklisting-sort-by">
                                <p id="stocklisting-filterControlLabel">Sort By...</p>
                                <div>
                                    <Select className="stocklisting-custom-dropdown"
                                        styles={customStyles}
                                        closeMenuOnSelect={true}
                                        components={animatedComponents}
                                        placeholder="Alphabetical, A-Z"
                                        options={sortOptions}
                                        defaultValue={sortOptions[0]}
                                        value={selectedSort}
                                        onChange={setSelectedSort}
                                    />
                                </div>
                            </div>

                            <div className="stocklisting-showFilter">
                                <div className="stocklisting-form-check">
                                    <label class="stocklisting-form-check-label" for="exampleRadios1">
                                        <input class="form-check-input" type="checkbox" name="exampleRadios" id="exampleRadios1" value="option1" unchecked></input>
                                        Only show items in stock today.
                                    </label>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="stocklisting-filterItemDisplay">
                        {food
                            .filter(searchFunction)
                            .filter(tagMatchFunction)
                            .filter(stockFilterFunction)
                            // .filter(tagMatchFunction)
                            .sort(getSort()).map(foodItem => (
                                <Food 
                                    name={foodItem.name} 
                                    image={foodItem.image} 
                                    in_stock={foodItem.instock} 
                                    tags={foodItem.tags}                                      
                                    />))}

                    </div>
                </div>
            </div>

            <Helmet>
                <title>View Today's Stock</title>
            </Helmet>
        </div>
        </>
    )

    }