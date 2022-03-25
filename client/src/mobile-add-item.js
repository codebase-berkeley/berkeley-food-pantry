import './mobile-add-item.css';
import React from 'react';
import Select, { NonceProvider } from 'react-select';
import makeAnimated from 'react-select/animated';

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
            <div className = "addItem">
                Add Item
            </div>
            <div className = "addItemDesc">
                Add a new item to the stock directory.
            </div>
            <div className = "boxHeaders">
                Item Name
            </div>
            <div className = "boxHeaders">
                Set Stock Availability
            </div>
            <div className = "boxHeaders">
                Select Dietary Categories (Optional)
            </div>
            <div className = "boxHeaders">
                Upload Image (Optional)
            </div>




            <div> 
            <Select className="custom-dropdown"
                styles={customStyles}
                closeMenuOnSelect={true}
                components={animatedComponents}
                placeholder="In stock today"
                options={stockStatus}
                defaultValue={stockStatus[0]}
            />
            </div>
        </div>
    )
}
