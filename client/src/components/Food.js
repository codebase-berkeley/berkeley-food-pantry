import React from 'react'
import './Food.css'
import Tags from './Tags.js'
import edit_item from './../images/edit_item.png'
import pen from './../images/pen.svg'
import checkmark from './../images/checkmark.svg'
import xmark from '../images/notinstock.svg'


function Food(props) {
    
    function stockOption() {
        if ((props.in_stock) == true) {
            return (
                <div className = "editIn" style={{paddingRight: "2%", width: "35%"}}>
                            <img src={checkmark} className="stockImage" alt="checkmark" />
                        <div className ="inStock" style={{width: "100%"}}>
                            <span >In Stock Today</span>
                        </div>
                    </div>
            );
        }
        return (
            <div className = "editIn" style={{paddingRight: "4%", width: "35%"}}>
                    <img src={xmark} className="stockImage" alt="checkmark" />
                    <div className ="inStock" style={{width: "100%"}}>
                        <span>Not In Stock Today</span>
                    </div>
                </div>
        );
    }

    if ((props.admin) == true) {
        return(
            <div className = "componentContainer">
                <img src={props.image} class="foodImage" alt={props.name}/>
                <div className = "infoContainer">
                    <div className = "nameTags">
                        <div className = "foodName">
                            {props.name}
                        </div>
                        <div className = "tagsFormat">
                            {props.tags.map((tag) => {
                                return (
                                <Tags name={tag} />
                            );})}
                        </div>
                    </div>
                    <div className = "editIn">
                        <div>
                            <div className="editButton">
                                <img src={pen} className="penFormat" alt="pen"/>
                                <div className="editItem">
                                    Edit Item
                                </div>
                            </div>
                        </div>
                        {/* style={{paddingRight: "11%"}} style={{paddingLeft: "6%"}} */}
                        <div className ="inStockCheck">
                            <span >In Stock</span>
                            <input type="checkbox"></input>
                        </div>
                    </div>
                </div>
            </div>                
        );   
    } else {
       return(
            <div className = "componentContainer">
                <img src={props.image} class="foodImage" alt={props.name}/>
                <div className = "infoContainer">
                    <div className = "nameTags">
                        <div className = "foodName">
                            {props.name}
                        </div>
                        <div className = "tagsFormat">
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
