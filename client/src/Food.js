import React from 'react'
import './Food.css'
import Tags from './Tags.js'
import edit_item from './edit_item.png'
import in_stock from './in_stock.png'

function Food(props) {
    return(
        <div className = "componentContainer">
            <img src={props.image} class="foodImage" alt="apple"/>
            <div className = "infoContainer">
                <div className = "nameTags">
                    <div className = "foodName">
                        {props.name}
                    </div>
                    <br></br>
                    <div className = "tagsFormat">
                        {props.tags.map((tag) => {
                            return (
                            <Tags name={tag} />
                        );})}
                    </div>
                </div>
                <div className = "editIn">
                    <img src={edit_item} class="editItem" alt="edit item"/>
                    <div className = "inStock">
                        In stock
                        <input type="checkbox" />
                         {/* <input type="checkbox" value="bubbles" checked="checked"/> */}

                    </div>
                </div>
            </div>
        </div>
    );   
}

export default Food