import './AddFood.css';
import saveitembutton from './../images/saveitembutton.png';
import Select, { NonceProvider } from 'react-select';
import makeAnimated from 'react-select/animated';
import React, { useState, useEffect } from 'react';
import UploadImageButton from './../components/UploadImageButton.js';
import { useLocation } from "react-router-dom";
import Tags from '../components/Tags.js'

const todayStock = [
    { value: 'in stock', label: 'In stock today' },
    { value: 'out of stock', label: 'Out of stock today' }
]

const dietaryCategories = [
    { value: 'vegan', label: 'Vegan' },
    { value: 'vegetarian', label: 'Vegetarian' }
]

const animatedComponents = makeAnimated();
const customStyles = {
    placeholder: (defaultStyles) => ({
        ...defaultStyles,
        color: '#C4C4C4',
    }),

    option: (provided, state) => ({
        ...provided,
        height: '6vh',
        backgroundColor: state.isFocused ? "#E5E5E5" : null,
    }),

    dropdownIndicator: base => ({
        ...base,
        color: "#ACB9AC"
    }),

    indicatorSeparator: () => null,

    control: (provided, state) => ({
        height: '6vh',
        ...provided,
        width: '30vw',
        borderRadius: '.5vw',
        border: state.isFocused ? '1.5px solid #ACB9AC' : '1.5px solid #ACB9AC',
        boxShadow: state.isFocused ? '1.5px solid #ACB9AC' : '1.5px solid #ACB9AC',
        '&:hover': {
            border: state.isFocused ? '1.5px solid #ACB9AC' : '1.5px solid #ACB9AC'
        },
        "@media screen and (orientation: portrait)": {
            width: '80vw', 
            borderRadius: '2vw'
        }
    }),

    multiValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';

        return {
            ...provided, opacity, transition, borderRadius: '20px', paddingLeft: '5px', paddingRight: '5px'
        };
    }
}

export default function AddFood() {

    const location = useLocation();
    const [edit, setEdit] = useState(true);
    const [itemName, setItemName] = useState("");
    // const [stockAvailability, setStockAvailability] = useState("");
    const [tags, setTags] = useState([]);

    useEffect(() => {
        setItemName(location.state.name);
        setTags(location.state.tags);
        
        // setStockAvailability(location.state.name);
        console.log(tags);
        //console.log(stockAvailability);
      });

    function headerDisplay() {
        if (edit) {
            return (
                <div>
                <h1>Edit Item</h1>
                <p>Edit an existing item in the stock directory.</p>
                </div>   
            )
            }
        return (
            <div>
                <h1>Add Item</h1>
                <p>Add a new item to the stock directory.</p>
            </div>
            )
        }

    // const colourStyles = {
    //     placeholder: (defaultStyles) => {
    //         return {
    //             ...defaultStyles,
    //             display: flex,
    //             flexDirection: row,
    //         }
    //     }
    // }

    return(
        <div className = 'add-food-component-container'>
            <div className = 'add-food-component-header'>
                {headerDisplay()}
            </div>
                <div className = 'main-add-food-component-container'>
                    <div className = 'item-selections'> 
                        <div className = "item-name">
                            <form>
                                <label className = "item-name-input">
                                    Item Name 
                                    </label>
                                    <input className = "item-name-textbox" placeholder={itemName} type="text" name="name" />
                            </form>
                        </div>

                        <div className="stock-dropdown">
                            <label className = "item-name-input">Set Stock Availability</label>
                            <div id="filter-dropdown">
                                <Select className="custom-dropdown"
                                    menuPlacement='auto'
                                    menuPosition='fixed'
                                    styles={customStyles}
                                    closeMenuOnSelect={true}
                                    components={animatedComponents}
                                    defaultValue="select..."
                                    options={todayStock}
                                />
                            </div>
                        </div>

                        <div className="categories-dropdown">
                            <label className = "item-name-input">Select Dietary Categories (Optional)</label>
                            <div>
                                <Select className="custom-dropdown"
                                    
                                    closeMenuOnSelect={true}
                                    components={animatedComponents}
                                    placeholder = {tags.map((tag) => {
                                        return (
                                        <Tags name={tag} />
                                    );})}
                                    isMulti
                                    options={dietaryCategories}
                                />
                            </div>
                        </div>
                    </div>
 
                    <div className = 'right-side-container'>
                        <div className = 'upload-image-header'>Upload Image <span class='optional-text'>(Optional)</span></div>
                        <UploadImageButton/>
                    </div>
                </div>
            
                <input className = "save-item-button-container" type="button" value="Save Item"></input>
        
        </div>
    )
}
