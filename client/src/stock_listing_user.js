import React from "react";
import Search from './searchBar.js';
import './stock_listing_user.css';
import {PanelGroup, Panel} from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import {Dropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import isbesPlusSign from './images/plusSign.svg';


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
                       <div className="searchBox">
                           <text>Search Items</text>
                           <Search/>
                        </div>

                        <div className = "filter-by">
                            <p id="filterControlLabel">Filter by Dietary Categories</p>
                            <div className = "custom-dropdown" id = "filter-dropdown">
                            <Dropdown>
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
                            </Dropdown>
                            </div>
                        </div>

                        <div className = "sort-by">
                            <p id="filterControlLabel">Sort By...</p>
                            <div className = "custom-dropdown">
                            <Dropdown>
                                <Dropdown.Toggle className = "custom-toggle" variant="success" id = "sortby-dropdown">
                                    Alphabetical, A-Z
                                </Dropdown.Toggle>

                                <Dropdown.Menu className = "custom-menu">
                                    <Dropdown.Item>Alphabetical, A-Z</Dropdown.Item>
                                    <Dropdown.Item>Most Recently Added</Dropdown.Item>
                                    <Dropdown.Item>Most Recently Updated</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            </div>
                        </div>
                        

                        
                        <h6> Show </h6>
                        <div className = "firstRow">
                            <button className = "allItemBtn"></button>
                            <h1>All Items</h1>
                        </div>
                        <div className = "secondRow">
                            <button className = "stockBtn"> </button>
                            <h1>In Stock Items Only</h1>
                        </div>
                        <div className = "thirdRow">
                            <button className = "noStockBtn"></button>
                            <h1>Not In Stock Items Only</h1>
                        </div>
                        
                        
                    </div>
                    <div className = "filterItemDisplay">
                        {/* need to make this div scrollable */}
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
