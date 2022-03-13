import React from "react";
import './stock_listing_user.css';


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
                        <button type = "button" class = "btn">+   Add Item</button>
                        <h3>Set all items to out of stock</h3>
                        
                        
                    </div>
                
                
                </div>
                
                <div className = "bottomContainer">
                    <div className = "filterItemControls">
                        <div className = ""></div>
                        <h1>Filter Items</h1>
                        <h2>Reset Filters</h2>
                        <h3>Search Items</h3>
                        <h4>Filter by Dietary Categories</h4>
                        <h5>Sort by...</h5>
                        <h6>Only </h6>

                    </div>
                    <div className = "filterItemDisplay">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default StockListingUser;
