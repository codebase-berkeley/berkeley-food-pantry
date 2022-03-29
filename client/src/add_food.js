import './add_food.css';
import saveitembutton from './assets/saveitembutton.png';
import Select, { NonceProvider } from 'react-select';
import makeAnimated from 'react-select/animated';
import React, { useState } from 'react';
import UploadImageButton from './upload_image_button.js';

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

    IndicatorSeparator: () => null,

    control: (provided, state) => ({
        height: '6vh',
        ...provided,
        width: '30vw',
        borderRadius: '.5vw',
        border: state.isFocused ? '1.5px solid #ACB9AC' : '1.5px solid #ACB9AC',
        boxShadow: state.isFocused ? '1.5px solid #ACB9AC' : '1.5px solid #ACB9AC',
        '&:hover': {
            border: state.isFocused ? '1.5px solid #ACB9AC' : '1.5px solid #ACB9AC'
        }
        container
        // "@media only screen and (max-width: 1200px)": {
        //     ...provided["@media only screen and (max-width: 1200px)"],
        //     marginRight: "1.5rem",
        // }
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
    return(
        <div className = 'add-food-component-container'>
            <div className = 'add-food-component-header'>
                <div>
                    <h1>Add Item</h1>
                    <p>Add a new item to the stock directory.</p>
                </div>
            </div>
                <div className = 'main-add-food-component-container'>
                    <div className = 'item-selections'> 
                        <div className = "item-name">
                            <form>
                                <label className = "item-name-input">
                                    Item Name 
                                    <input className = "item-name-textbox" type="text" name="name" />
                                </label>
                            </form>
                        </div>

                        <div className="stock-dropdown">
                            <p id="filterControlLabel">Set Stock Availability</p>
                            <div id="filter-dropdown">
                                <Select className="custom-dropdown"
                                    styles={customStyles}
                                    closeMenuOnSelect={false}
                                    components={animatedComponents}
                                    placeholder="Select..."
                                    options={todayStock}
                                />
                            </div>
                        </div>

                        <div className="categories-dropdown">
                            <p id="filterControlLabel">Select Dietary Categories (Optional)</p>
                            <div>
                                <Select className="custom-dropdown"
                                    styles={customStyles}
                                    closeMenuOnSelect={true}
                                    components={animatedComponents}
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
            <div className = 'save-item-button-container'>
                <img src ={saveitembutton} className = "save-item-button" alt = "save item button"></img>
            </div>
        </div>
    )
}
