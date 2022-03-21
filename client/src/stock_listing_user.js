import React from "react";
import Search from './searchBar.js';
import './searchBar.css';
import './stock_listing_user.css';
import { PanelGroup, Panel } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import isbesPlusSign from './images/plusSign.svg';
import Select, { NonceProvider } from 'react-select';
import makeAnimated from 'react-select/animated';
import { borderColor } from "@mui/system";

const foodCategories = [
    { value: 'chocolate', label: 'Meat' },
    { value: 'strawberry', label: 'Veggies' },
    { value: 'vanilla', label: 'Beverages' }
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
    }),

    dropdownIndicator: base => ({
        ...base,
        color: "#ACB9AC"
    }),

    IndicatorSeparator: () => null,

    control: (provided, state) => ({
        height: '6vh',
        ...provided,
        width: '20vw',
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


function StockListingUser() {
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
                                    <label class="form-check-label" for="exampleRadios1">
                                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" unchecked></input>
                                        All Items
                                    </label>
                                </div>

                                <div className="form-check">
                                    <label class="form-check-label" for="exampleRadios1">
                                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" unchecked></input>
                                        In Stocks Items
                                    </label>
                                </div>
                                
                                <div className="form-check">
                                    <label class="form-check-label" for="exampleRadios1">
                                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" unchecked></input>
                                        Not In Stock Items Only
                                    </label>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="filterItemDisplay">
                        <Panel className="foodPanel" shaded>fake food 1</Panel>
                        <Panel className="foodPanel" shaded>fake food 2</Panel>
                        <Panel className="foodPanel" shaded>fake food 3</Panel>
                        <Panel className="foodPanel" shaded>fake food 4</Panel>
                        <Panel className="foodPanel" shaded>fake food 1</Panel>
                        <Panel className="foodPanel" shaded>fake food 2</Panel>
                        <Panel className="foodPanel" shaded>fake food 3</Panel>
                        <Panel className="foodPanel" shaded>fake food 4</Panel>
                        <Panel className="foodPanel" shaded>fake food 1</Panel>
                        <Panel className="foodPanel" shaded>fake food 2</Panel>
                        <Panel className="foodPanel" shaded>fake food 3</Panel>
                        <Panel className="foodPanel" shaded>fake food 4</Panel>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default StockListingUser;