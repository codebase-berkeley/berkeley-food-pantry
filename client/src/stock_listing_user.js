import React from "react";
import Search from './searchBar.js';
import './searchBar.css';
import './stock_listing_user.css';
import {PanelGroup, Panel} from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import {Dropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import isbesPlusSign from './images/plusSign.svg';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';


const options = [
    { value: 'chocolate', label: 'Meat' },
    { value: 'strawberry', label: 'Veggies' },
    { value: 'vanilla', label: 'Beverages' }
]

const categories = [
    { value: 'chocolate', label: 'Meat' },
    { value: 'strawberry', label: 'Veggies' },
    { value: 'vanilla', label: 'Beverages' }
]

const animatedComponents = makeAnimated();
const customStyles = {
    option: (provided, state) => ({ // menu dropdown
      ...provided,
      height: '6vh',

    //   borderBottom: '1px dotted pink',
    //   color: state.isSelected ? 'red' : 'blue',
    //   padding: 20,
    }),
    control: (provided, state) => ({
      // none of react-select's styles are passed to <Control />
      ...provided,
      border: state ? '2px solid #ACB9AC' : '2px solid #ACB9AC',
    //   height: '6vh',
      width: '20vw',
    }),
    multiValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
   
      return { ...provided, opacity, transition, borderRadius: '20px', paddingLeft: '5px', paddingRight: '5px'
    };
    }
  }

function StockListingUser() {
    return (
        <div className= "entireContent">
            <div className = "stockListingPage">
                <div className = "topContainer"> 
                    <div className = "leftSide">
                        <h1>Edit Today's Stock</h1>
                        <p>Manage today's stock listing.</p>
                        
                        
                    </div>
                    <div className = "rightSide">
                        {/* <button> +   Add New Item </button> */}
                        <button type = "button" class = "btn">
                            <img src = {isbesPlusSign}></img>
                            <div className="addItem"> Add new item </div>
                            </button>
                        <div className="changeStock"> Set all items to out of stock </div>
                        
                    </div>
                
                
                </div>
                
                <div className = "bottomContainer">
                    <div className = "filterItemControls">
                        {/* Needs to be flex: row side */}
                        <div className="filterReset">
                            <div className="filterItems">Filter Items</div>
                            <div className="resetFilters">Reset Filters</div>
                        </div>
                        <div className="filters">
                       <div className="searchBox">
                           {/* <h1> Search items</h1> */}
                           <text>Search Items</text>
                           <Search placeholder = "Search..."/>
                           
                        </div>

                        <div className = "filter-by">
                            <p id="filterControlLabel">Filter by Dietary Categories</p>
                            <div className = "custom-dropdown" id = "filter-dropdown">
                            {/* <Dropdown>
                                <Dropdown.Toggle className = "custom-toggle" variant="success">
                                    Select...
                                </Dropdown.Toggle>

                                <Dropdown.Menu className = "custom-menu">
                                    <Dropdown.Item>Dairy</Dropdown.Item>
                                    <Dropdown.Item>Fruit</Dropdown.Item>
                                    <Dropdown.Item>Gluten-free</Dropdown.Item>
                                    <Dropdown.Item>Grains</Dropdown.Item>
                                    <Dropdown.Item>Meat</Dropdown.Item>
                                    <Dropdown.Item>Pescatarian</Dropdown.Item>
                                    <Dropdown.Item>Seafood</Dropdown.Item>
                                    <Dropdown.Item>Vegan</Dropdown.Item>
                                    <Dropdown.Item>Vegetarian</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown> */}



                            <Select 
                                styles = {customStyles}
                                closeMenuOnSelect = {false}
                                components = {animatedComponents}
                                isMulti
                                options = {categories}
                            
                            
                            
                            />
                            </div>
                        </div>

                        <div className = "sort-by">
                            <p id="filterControlLabel">Sort By...</p>
                            <div className = "custom-dropdown">
                                <Select
                                    styles = {customStyles}
                                    closeMenuOnSelect={false}
                                    components={animatedComponents}
                                    // defaultValue={[options[0], options[1]]}
                                    isMulti
                                    options={options}
                                
                                />

                            {/* <Dropdown>
                                <Dropdown.Toggle className = "custom-toggle" variant="success" id = "sortby-dropdown">
                                    Alphabetical, A-Z
                                </Dropdown.Toggle>

                                <Dropdown.Menu className = "custom-menu">
                                    <Dropdown.Item>Alphabetical, A-Z</Dropdown.Item>
                                    <Dropdown.Item>Most Recently Added</Dropdown.Item>
                                    <Dropdown.Item>Most Recently Updated</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown> */}
                            </div>
                        </div>
                        {/* <div className = "sort-by">
                            <Select
                                closeMenuOnSelect={false}
                                components={animatedComponents}
                                // defaultValue={[options[0], options[1]]}
                                isMulti
                                options={options}
                            
                            />
                            
                        </div> */}
                        

                        {/* Radio button code - ended up just changing the code. nNo clude what it means tho :))) */}
                        <div className="showFilter">
                            <h6> Show </h6>
                            <div className = "form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked></input>
                                <label class="form-check-label" for="exampleRadios1">
                                    All Items
                                </label>
                            </div>
                            <div className = "form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked></input>
                                <label class="form-check-label" for="exampleRadios1">
                                    In Stocks Items
                                </label>
                            </div>
                            <div className = "form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked></input>
                                <label class="form-check-label" for="exampleRadios1">
                                    Not In Stock Items Only 
                                </label>
                            </div>
                        </div>
                        
                        </div>
                    </div>
                    <div className = "filterItemDisplay">
                        <Panel className = "foodPanel" shaded>fake food 1</Panel>
                        <Panel className = "foodPanel" shaded>fake food 2</Panel>
                        <Panel className = "foodPanel" shaded>fake food 3</Panel>
                        <Panel className = "foodPanel" shaded>fake food 4</Panel>
                        <Panel className = "foodPanel" shaded>fake food 1</Panel>
                        <Panel className = "foodPanel" shaded>fake food 2</Panel>
                        <Panel className = "foodPanel" shaded>fake food 3</Panel>
                        <Panel className = "foodPanel" shaded>fake food 4</Panel>
                        <Panel className = "foodPanel" shaded>fake food 1</Panel>
                        <Panel className = "foodPanel" shaded>fake food 2</Panel>
                        <Panel className = "foodPanel" shaded>fake food 3</Panel>
                        <Panel className = "foodPanel" shaded>fake food 4</Panel>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default StockListingUser;
