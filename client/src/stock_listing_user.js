import React from "react";
import './stock_listing_user.css';

function StockListingUser() {
    return (
        <div className = "stockListingPage">
            <div className = "topContainer"> 
                <div className = "leftSide">
                    <h1>Edit Today's Stock</h1>
                    <h2>Manage today's stock listing.</h2>
                    
                    
                </div>
                <div className = "rightSide">
                    <button> Add New Item </button>
                    <h2>Set all items to out of stock</h2>
                    
                    
                </div>
            
            
            </div>
            
            <div className = "bottomContainer">
                <div className = "filterItemControls">
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
    )
}
export default StockListingUser;
