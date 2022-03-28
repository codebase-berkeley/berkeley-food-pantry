import './mobile-add-item.css';
import saveitembutton from './assets/saveitembutton.svg';
// import Select, { NonceProvider } from 'react-select';
import makeAnimated from 'react-select/animated';
import React, { Component } from 'react'
// import chroma from 'chroma-js';
// import { ColourOption, colourOptions } from '../data';
import Select, { StylesConfig } from 'react-select';
import { red } from 'react-color/lib/helpers/color';
import importimagecloud from './assets/import-image-cloud.svg';

const dietaryCategories = [
    { value: 'meat', label: 'Meat' },
    { value: 'vegetarian', label: 'Vegetarian' },
    { value: 'vegan', label: 'Vegan' },
    {value: 'gluten free', label: 'Gluten Free'}
]

const stockStatus = [
    {value: 'out of stock', label: 'Out of stock today', color: "#A71E34"},
    { value: 'in stock', label: 'In stock today', color: "#588157"}
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

    indicatorSeparator: () => null,

    control: (provided, state) => ({
        height: '5vh',
        ...provided,
        width: '80%',
        borderRadius: '3vw',
        border: state.isFocused ? '1px solid #ACB9AC' : '1px solid #ACB9AC',
        boxShadow: state.isFocused ? '1px solid #ACB9AC' : '1px solid #ACB9AC',
        '&:hover': {
            border: state.isFocused ? '1px solid #ACB9AC' : '1px solid #ACB9AC'
        }
    }),

    multiValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';

        return {
            ...provided, opacity, transition, borderRadius: '20%', paddingLeft: '1%', paddingRight: '1%'
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
                <input type="text" name="name" />
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
                isSearchable={false}
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
                isMulti={true}
                isSearchable={true}
                defaultValue={"Select..."}
                />
            </div>
            <br></br>
            <br></br>
            <div className = "boxHeaders">
                Upload Image (Optional)
                <div className = 'center-import-image-button'>
                    <div className = 'import-image-button'> 
                        <img src = {importimagecloud} className = 'cloud-format' alt = "upload image cloud"></img>
                        <h1 className = 'upload-image-text-h1'>Import Image</h1>     
                    </div>
                </div>  
            </div>
            <div>
                <img src ={saveitembutton} className = "save-item-button" alt = "save item button"></img>
            </div>
            
        </div>
    )
}   
