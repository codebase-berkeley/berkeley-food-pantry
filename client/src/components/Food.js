import React from 'react'
import './Food.css'
import Tags from './Tags.js'
import edit_item from './../images/edit_item.png'
import pen from './../images/pen.svg'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function Food(props) {
    function editItem () {
        console.log("it works");
    }

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
                {/* <Link to="/thankyou" state={{date: selectedDate.label, time: selectedTime.label}} onClick= {submitForm} className = "submit-button" style = {{textDecoration: 'none'}}>Submit</Link> */}
                    <div>
                        {/* <button className="editButton" onClick={editItem}> */}
                        <Link to="/addFood" state = {{name: props.name, tags: props.tags, inStock: true, image: props.image}} className = "editButton">
                            <img src={pen} className="penFormat" alt="pen"/>
                            <div className="editItem">
                                Edit Item
                            </div>
                        </Link>
                    </div>
                    <div style={{paddingLeft: "6%"}} className ="inStock">
                        <span style={{paddingRight: "11%"}}>In Stock</span>
                        <input type="checkbox"/>
                    </div>
                </div>
            </div>
        </div>
    );   
}

export default Food
