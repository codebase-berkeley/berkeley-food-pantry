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
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

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



export function StockListingAdmin() {
    return (
        <div className="stocklisting-entireContent">

            <div className="stocklisting-stockListingPage">

                <div className="stocklisting-topContainer">

                    <div className="stocklisting-leftSide">
                        <h1>Edit Today's Stock</h1>
                        <p>Manage today's stock listing.</p>
                    </div>

                    <div className="stocklisting-rightSide">
                        <button type="button" class="btn" className="stocklisting-addButton">
                            <img src={isbesPlusSign}></img>
                            <div className="stocklisting-addItem"> Add new item </div>

                        </button>
                        <button className="stocklisting-changeStock"> Set all items to out of stock </button>
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
                                <Search placeholder="Search..." />
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
                                    />
                                </div>
                            </div>

                            <div className="stocklisting-showFilter">
                                <div className="sstocklisting-howText"> Show </div>
                                <div className="stocklisting-form-check">
                                    <label class="stocklisting-form-check-label" for="exampleRadios1">
                                        <input class="stocklisting-form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" unchecked></input>
                                        All items
                                    </label>
                                </div>

                                <div className="stocklisting-form-check">
                                    <label class="stocklisting-form-check-label" for="exampleRadios1">
                                        <input class="stocklisting-form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" unchecked></input>
                                        In stock items only
                                    </label>
                                </div>
                                
                                <div className="stocklisting-form-check">
                                    <label class="stocklisting-form-check-label" for="exampleRadios1">
                                        <input class="stocklisting-form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" unchecked></input>
                                        Not in stock items only
                                    </label>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="stocklisting-filterItemDisplay">
                    <Food name="Apple" image={apple} in_stock={true} tags={["Vegetarian", "Vegan", "Gluten-free", "Fruit", "Fruit" ]} admin={true}/>
                    <Food name="Banana" image={banana} in_stock={true} tags={["Vegetarian", "Vegan", "Gluten-free", "Fruit", "Fruit" ]} admin={true}/>
                    <Food name="Coconut" image={cocunut} in_stock={false} tags={["Vegetarian", "Vegan", "Gluten-free", "Fruit", "Fruit" ]} admin={true}/>
                    <Food name="Donut" image={donut} in_stock={true} tags={["Vegetarian", "Vegan", "Gluten-free", "Fruit", "Fruit" ]} admin={true}/>
                    <Food name="Broccoli" image={brocolli} in_stock={true} tags={["Vegetarian", "Vegan", "Gluten-free", "Fruit", "Fruit" ]} admin={true}/>
                    <Food name="Canned Beans" image={cannedBeans} in_stock={true} tags={["Vegetarian", "Vegan", "Gluten-free", "Fruit", "Fruit" ]} admin={true}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function StockListingUser() {
    return (
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
                                <Search placeholder="Search..." />
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
                    <Food name="Apple" image={apple} in_stock={true} tags={["Vegetarian", "Vegan", "Gluten-free", "Fruit", "Fruit" ]} admin={true}/>
                    <Food name="Banana" image={banana} in_stock={true} tags={["Vegetarian", "Vegan", "Gluten-free", "Fruit", "Fruit" ]} admin={false} />
                    <Food name="Coconut" image={cocunut} in_stock={true} tags={["Vegetarian", "Vegan", "Gluten-free", "Fruit", "Fruit" ]} admin={false}/>
                    <Food name="Donut" image={donut} in_stock={true} tags={["Vegetarian", "Vegan", "Gluten-free", "Fruit", "Fruit" ]} admin={false}/>
                    <Food name="Broccoli" image={brocolli} in_stock={true} tags={["Vegetarian", "Vegan", "Gluten-free", "Fruit", "Fruit" ]} admin={false}/>
                    <Food name="Canned Beans" image={cannedBeans} in_stock={true} tags={["Vegetarian", "Vegan", "Gluten-free", "Fruit", "Fruit" ]} admin={false}/>
                    </div>
                </div>
            </div>
        </div>
    )

    }