import './mobile-add-item.css';
import saveitembutton from './assets/saveitembutton.svg';
// import React from 'react';
import Select, { NonceProvider } from 'react-select';
import makeAnimated from 'react-select/animated';
import React, { Component } from 'react'
// import Select from 'react-select'

const dietaryCategories = [
    { value: 'meat', label: 'Meat' },
    { value: 'vegetarian', label: 'Vegetarian' },
    { value: 'vegan', label: 'Vegan' },
    {value: 'gluten free', label: 'Gluten Free'}
]

const stockStatus = [
    {value: 'out of stock', label: 'Out of stock today'},
    { value: 'in stock', label: 'In stock today'}
]
 
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
        width: '20vw',
        borderRadius: '.5vw',
        border: state.isFocused ? '1.5px solid #ACB9AC' : '1.5px solid #ACB9AC',
        boxShadow: state.isFocused ? '1.5px solid #ACB9AC' : '1.5px solid #ACB9AC',
        '&:hover': {
            border: state.isFocused ? '1.5px solid #ACB9AC' : '1.5px solid #ACB9AC'
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

const animatedComponents = makeAnimated();

export default function MobileAddItem() {
    return (
        <div className = "mob-add-item-component-container">
            <div className = "addItemAndDesc">
                <div className = "addItem">
                    Add Item
                </div>
                <div className = "addItemDesc">
                    Add a new item to the stock directory.
                </div> 
            </div>
            <br></br>
            <div className = "boxHeaders">
                Item Name
                <Select className="custom-dropdown"
                styles={customStyles}
                closeMenuOnSelect={true}
                components={animatedComponents}
                placeholder="In stock today"
                options={stockStatus}
                defaultValue={stockStatus[0]}
                />
            </div>
            <br></br>
            <br></br>
            <div className = "boxHeaders">
                Set Stock Availability
                <Select className="custom-dropdown"
                styles={customStyles}
                closeMenuOnSelect={true}
                components={animatedComponents}
                placeholder="In stock today"
                options={stockStatus}
                defaultValue={stockStatus[1]}
                />
            </div>
            <br></br>
            <br></br>
            <div className = "boxHeaders">
                Select Dietary Categories (Optional)
                <Select className="custom-dropdown"
                styles={customStyles}
                closeMenuOnSelect={true}
                components={animatedComponents}
                placeholder="Select..."
                options={dietaryCategories}
                defaultValue={"Select..."}
                />
            </div>
            <br></br>
            <br></br>
            <div className = "boxHeaders">
                Upload Image (Optional)
            </div>
            <div>
                <img src ={saveitembutton} className = "save-item-button" alt = "save item button"></img>
            </div>
            {/* <div className = 'import-image-button'> 
                <img src = {importimagecloud} className = 'cloud-format' alt = "upload image cloud"></img>
                <h1 className = 'upload-image-text-h1'>Import Image</h1>     
            </div> */}
        </div>
    )
}   
