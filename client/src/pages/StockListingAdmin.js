import React, {useState} from "react";
import Search from './../components/SearchBar.js';
import './../components/SearchBar.css';
import './StockListingAdmin.css';
import 'rsuite/dist/rsuite.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import isbesPlusSign from './../images/plusSign.svg';
import Select, { NonceProvider } from 'react-select';
import makeAnimated, { ValueContainer } from 'react-select/animated';
import { borderColor } from "@mui/system";
import Food from './../components/Food.js';
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
{name: 'Apple', image: apple, instock: true, tags: ["Vegetarian", "Vegan", "Gluten-free", "Fruit", "Red"]} 

];




export function StockListingAdmin() {
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
    console.log(food);
    return (
        <div className="entireContent">

            <div className="stockListingPage">

                <div className="topContainer">

                    <div className="leftSide">
                        <h1>Edit Today's Stock</h1>
                        <p>Manage today's stock listing.</p>
                    </div>

                    <div className="rightSide">
                        <button type="button" class="btn" className="addButton">
                            <img src={isbesPlusSign}></img>
                            <div className="addItem"> Add new item </div>

                        {/* <Routes>
                            <Route path="./AddFood" element={<AddFood/>}/>
                        </Routes> */}

                        </button>
                        <button className="changeStock" onClick={setOutOfStock}> Set all items to out of stock </button>
                    </div>

                </div>

                <div className="bottomContainer">

                    <div className="filterItemControls">

                        <div className="filterReset">
                            <div className="filterItems">Filter Items</div>
                            <button className="resetFilters" onClick={clearInputFieldsHelper}>Reset Filters</button>
                        </div>

                        <div className="filters">
                            <div className="searchBox">
                                <text>Search Items</text>
                                <Search placeholder="Search..." searchInput={searchInput} setSearchInput={setSearchInput}/>
                            </div>

                            <div className="filter-by">
                                <p id="filterControlLabel">Filter by Dietary Categories</p>
                                <div id="filter-dropdown">
                                    <Select className="custom-dropdown"
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

                            <div className="sort-by">
                                <p id="filterControlLabel">Sort By...</p>
                                <div>
                                    <Select className="custom-dropdown"
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

                            <div className="showFilter">
                                <div className="showText"> Show </div>
                                <div className="form-check">
                                    <label class="form-check-label" for="exampleRadios1">
                                        <input class="form-check-input" type="radio" checked={selectedShow == 0} onChange={e => {
                                            if (e.target.checked) {
                                                setSelectedShow(0);
                                            }
                                        } }></input>               
                                        All items
                                    </label>
                                </div>

                                <div className="form-check">
                                    <label class="form-check-label" for="exampleRadios1">
                                        <input class="form-check-input" type="radio" checked={selectedShow == 1} onChange={e => {
                                            if (e.target.checked) {
                                                setSelectedShow(1);
                                            }
                                        } }></input>
                                        In stock items only
                                    </label>
                                </div>
                                
                                <div className="form-check">
                                    <label class="form-check-label" for="exampleRadios1">
                                        <input class="form-check-input" type="radio" checked={selectedShow == 2} onChange={e => {
                                            if (e.target.checked) {
                                                setSelectedShow(2);
                                            }
                                        } }></input>
                                        Not in stock items only
                                    </label>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="filterItemDisplay">
                        {food
                            .filter(searchFunction)
                            .filter(tagMatchFunction)
                            .filter(stockFilterFunction)
                            .filter(tagMatchFunction)
                            .sort(getSort()).map(foodItem => (
                                <Food 
                                    name={foodItem.name} 
                                    image={foodItem.image} 
                                    in_stock={foodItem.instock} 
                                    tags={foodItem.tags} 
                                    onChange={() => {
                                        foodItem.instock = !foodItem.instock
                                    }}
                                    
                                    
                                    />))}

                    {/* food.filter(matchesTags) */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export function StockListingUser() {
    const [selectedSort, setSelectedSort] = useState();


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

    function mostRecent() {
        return;

    }


    function getSort() {
        
        if (selectedSort == null) {
            return;
        } else if (selectedSort == "recently added") {
            return mostRecent;
        } else if (selectedSort == "alphabetical") {
            return sortAZ;
        }
    }
    return (
        <div className="entireContent">

            <div className="stockListingPage">

                <div className="topContainer">

                    <div className="leftSide">
                        <h1>Check out what we have in stock today.</h1>
                        <p>Last updated: March 25, 7:47am.<br></br>
                        Stock availability varies day by day. If something you’re looking for is out of stock, it might be available on another day.</p>
                    </div>

                </div>

                <div className="bottomContainer">

                    <div className="filterItemControls">

                        <div className="filterReset">
                            <div className="filterItems">Filter Items</div>
                            <button className="resetFilters">Reset Filters</button>
                        </div>

                        <div className="filters">
                            <div className="searchBox">
                                <text>Search Items</text>
                                <Search placeholder="Search..." />
                            </div>

                            <div className="filter-by">
                                <p id="filterControlLabel">Filter by Dietary Categories</p>
                                <div id="filter-dropdown">
                                    <Select className="custom-dropdown"
                                        styles={customStyles}
                                        closeMenuOnSelect={false}
                                        components={animatedComponents}
                                        placeholder="Select..."
                                        isMulti
                                        options={foodCategories}
                                    />
                                </div>
                            </div>

                            <div className="sort-by">
                                <p id="filterControlLabel">Sort By...</p>
                                <div>
                                    <Select className="custom-dropdown"
                                        styles={customStyles}
                                        closeMenuOnSelect={true}
                                        components={animatedComponents}
                                        placeholder="Alphabetical, A-Z"
                                        options={sortOptions}
                                        defaultValue={sortOptions[0]}
                                    />
                                </div>
                            </div>

                            <div className="showFilter">
                                <div className="form-check">
                                    <label class="form-check-label" for="exampleRadios1">
                                        <input class="form-check-input" type="checkbox" name="exampleRadios" id="exampleRadios1" value="option1" unchecked></input>
                                        Only show items in stock today.
                                    </label>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="filterItemDisplay">
                    <Food name="Apple" image={apple} in_stock={true} tags={["Vegetarian", "Vegan", "Gluten-free", "Fruit", "Fruit" ]} />
                    <Food name="Banana" image={banana} in_stock={true} tags={["Vegetarian", "Vegan", "Gluten-free", "Fruit", "Fruit" ]} />
                    <Food name="Coconut" image={coconut} in_stock={true} tags={["Vegetarian", "Vegan", "Gluten-free", "Fruit", "Fruit" ]} />
                    <Food name="Donut" image={donut} in_stock={true} tags={["Vegetarian", "Vegan", "Gluten-free", "Fruit", "Fruit" ]} />
                    <Food name="Broccoli" image={broccoli} in_stock={true} tags={["Vegetarian", "Vegan", "Gluten-free", "Fruit", "Fruit" ]} />
                    <Food name="Canned Beans" image={cannedBeans} in_stock={true} tags={["Vegetarian", "Vegan", "Gluten-free", "Fruit", "Fruit" ]} />
                    </div>
                </div>
            </div>
        </div>
    )

    }