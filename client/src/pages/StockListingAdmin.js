import React from "react";
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
import cocunut from "./../images/cocunut.png";
import meat from "./../images/meat.png";
import donut from './../images/donut.png';
import brocolli from './../images/brocolli.png';
import cannedBeans from './../images/cannedBeans.png';

const foodCategories = [
    { value: 'chocolate', label: 'Meat' },
    { value: 'strawberry', label: 'Veggies' },
    { value: 'beverages', label: 'Beverages' },
    { value: 'pescatarian', label: 'Pescatarian' },
    { value: 'fruit', label: 'Fruit' },
    { value: 'dairy', label: 'Dairy' },
    { value: 'seafood', label: 'Seafood' },
    { value: 'pet food', label: 'Pet food' }
]

const sortOptions = [
    { value: 'alphabetical', label: 'Alphabetical, A-Z' },
    { value: 'recently added', label: 'Most Recently Added' }
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

function dictionaryHelper(foodTags) {
    const listOfTags = [];
    // for (let i = 0; i < location.state.tags.length; i++) {
    //     listOfTags.push({label: location.state.tags[i], value: i})
    // }
    const newArr = [] 
    for (let i = 0; i < foodTags.length; i++) { 
        const temp = {label: foodTags[i], value: i}; 
        newArr.push(temp);
    }

    console.log(newArr);

    return newArr;
}


export function StockListingAdmin() {

    return (
        <div className="entireContent">

            <div className="stockListingPage">

                <div className="topContainer">

                    <div className="leftSide">
                        <h1>Edit Today's Stock</h1>
                        <p>Manage today's stock listing.</p>
                    </div>

                    <div className="rightSide">
                        <button type="button" className="btn">
                            <img src={isbesPlusSign}></img>
                            <div className="addItem"> Add new item </div>
                        </button>
                        <button className="changeStock"> Set all items to out of stock </button>
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
                                <div className="showText"> Show </div>
                                <div className="form-check">
                                    <label className="form-check-label" for="exampleRadios1">
                                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" unchecked></input>
                                        All items
                                    </label>
                                </div>

                                <div className="form-check">
                                    <label className="form-check-label" for="exampleRadios1">
                                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" unchecked></input>
                                        In stock items only
                                    </label>
                                </div>
                                
                                <div className="form-check">
                                    <label className="form-check-label" for="exampleRadios1">
                                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" unchecked></input>
                                        Not in stock items only
                                    </label>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="filterItemDisplay">
                    <Food name="Apple" image={apple} in_stock={true} tags={dictionaryHelper(["Vegetarian", "Vegan", "Gluten-free", "Fruit", "Fruit" ])} />
                    <Food name="Banana" image={banana} in_stock={true} tags={["Vegetarian", "Vegan", "Gluten-free", "Fruit", "Fruit" ]} />
                    <Food name="Coconut" image={cocunut} in_stock={true} tags={["Vegetarian", "Vegan", "Gluten-free", "Fruit", "Fruit" ]} />
                    <Food name="Donut" image={donut} in_stock={true} tags={["Vegetarian", "Vegan", "Gluten-free", "Fruit", "Fruit" ]} />
                    <Food name="Broccoli" image={brocolli} in_stock={true} tags={["Vegetarian", "Vegan", "Gluten-free", "Fruit", "Fruit" ]} />
                    <Food name="Canned Beans" image={cannedBeans} in_stock={true} tags={["Vegetarian", "Vegan", "Gluten-free", "Fruit", "Fruit" ]} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export function StockListingUser() {
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
                                    <label className="form-check-label" for="exampleRadios1">
                                        <input className="form-check-input" type="checkbox" name="exampleRadios" id="exampleRadios1" value="option1" unchecked></input>
                                        Only show items in stock today.
                                    </label>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="filterItemDisplay">
                    <Food name="Apple" image={apple} in_stock={true} tags={["Vegetarian", "Vegan", "Gluten-free", "Fruit", "Fruit" ]} />
                    <Food name="Banana" image={banana} in_stock={true} tags={["Vegetarian", "Vegan", "Gluten-free", "Fruit", "Fruit" ]} />
                    <Food name="Coconut" image={cocunut} in_stock={true} tags={["Vegetarian", "Vegan", "Gluten-free", "Fruit", "Fruit" ]} />
                    <Food name="Donut" image={donut} in_stock={true} tags={["Vegetarian", "Vegan", "Gluten-free", "Fruit", "Fruit" ]} />
                    <Food name="Broccoli" image={brocolli} in_stock={true} tags={["Vegetarian", "Vegan", "Gluten-free", "Fruit", "Fruit" ]} />
                    <Food name="Canned Beans" image={cannedBeans} in_stock={true} tags={["Vegetarian", "Vegan", "Gluten-free", "Fruit", "Fruit" ]} />
                    </div>
                </div>
            </div>
        </div>
    )

    }
    