import React from "react";
import './stock_listing_user.css';
import {PanelGroup, Panel} from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import {Dropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import isbesPlusSign from './plusSign.svg';


function StockListingUser() {
    return (
        <div className= "entireContent">
            <div className = "stockListingPage">
                <div className = "topContainer"> 
                    <div className = "leftSide">
                    {/* style ={{textAlign : 'left', color: 'blue'}} */}
                        <h1>Edit Today's Stock</h1>
                        <p>Manage today's stock listing.</p>
                        
                        
                    </div>
                    <div className = "rightSide">
                        {/* <button> +   Add New Item </button> */}
                        <button type = "button" class = "btn">
                            <text> + </text>
                            <text> Add New Item </text>
                            </button>
                        <div className="changeStock"> Set all items to out of stock </div>
                        
                    </div>
                
                
                </div>
                
                <div className = "bottomContainer">
                    <div className = "filterItemControls">
                        {/* Needs to be flex: row side */}
                        <h1>filter items</h1>
                        <h2>Reset Filters</h2>
                       
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Filter by Dietary Categories
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item>Another action</Dropdown.Item>
                                <Dropdown.Item>Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Sort By
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item>Another action</Dropdown.Item>
                                <Dropdown.Item>Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        
                        <h6>Only </h6>


                        {/* Show header
                            - 3 buttons (import package)
                        */}
                        
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
