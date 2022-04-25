import React from 'react'
import './Food.css'
import Tags from './Tags.js'
import pen from './../images/pen.svg'
import checkmark from './../images/instockMark.svg'
import xmark from '../images/notinstock.svg'


function Food(props) {
    function editItem () {
        console.log("it works");
    }
    
    function stockOption() {
        if ((props.in_stock) == true) {
            return (
                <div className = "food-editIn" style={{paddingRight: "2%", width: "35%"}}>
                            <img src={checkmark} className="food-stockImage" alt="checkmark" />
                        <div className ="food-in-stock-text" style={{width: "100%"}}>
                            <span >In Stock Today</span>
                        </div>
                    </div>
            );
        }
        return (
            <div className = "food-editIn" style={{paddingRight: "4%", width: "35%"}}>
                    <img src={xmark} className="food-stockImage" alt="checkmark" />
                    <div className ="food-out-of-stock-text" style={{width: "100%"}}>
                        <span>Not In Stock Today</span>
                    </div>
                </div>
        );
    }

    if ((props.admin) == true) {
        return(
            <div className = "food-componentContainer">
                <img src={props.image} class="food-foodImage" alt={props.name}/>
                <div className = "food-infoContainer">
                    <div className = "food-nameTags">
                        <div className = "food-foodName">
                            {props.name}
                        </div>
                        <div className = "food-tagsFormat">
                            {props.tags.map((tag) => {
                                return (
                                <Tags name={tag} />
                            );})}
                        </div>
                    </div>
                    <div className = "food-editIn">
                    <div>
                        <button className="food-editButton" onClick={editItem}>
                            <img src={pen} className="food-penFormat" alt="pen"/>
                            <div className="food-editItem">
                                Edit Item
                                </div>
                                </button>
                            </div>
                        
                        
                        {/* style={{paddingRight: "11%"}} style={{paddingLeft: "6%"}} */}
                        <div className ="food-inStockCheck">
                            In Stock
                            <input type="checkbox"></input>
                        </div>
                    </div>

                </div>
            </div>                
        );   
    } else {
       return(
            <div className = "food-componentContainer">
                <img src={props.image} class="food-foodImage" alt={props.name}/>
                <div className = "food-infoContainer">
                    <div className = "food-nameTags">
                        <div className = "food-foodName">
                            {props.name}
                        </div>
                        <div className = "food-tagsFormat">
                            {props.tags.map((tag) => {
                                return (
                                <Tags name={tag} />
                            );})}
                        </div>

                    </div>
                    {stockOption()}
                </div>
            </div>                
        );
    }
}

export default Food
