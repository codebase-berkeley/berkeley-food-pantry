import React from 'react'
import './Food.css'
import Tags from './Tags.js'
import edit_item from './../Images/edit_item.png'
import pen from './../Images/pen.svg'

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
                    <div>
                        <button className="editButton" onClick={editItem}>
                            <img src={pen} className="penFormat" alt="pen"/>
                            <div className="editItem">
                                Edit Item
                            </div>
                        </button>
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
