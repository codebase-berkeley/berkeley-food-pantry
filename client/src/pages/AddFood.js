import './AddFood.css';
import Select, { NonceProvider } from 'react-select';
import makeAnimated from 'react-select/animated';
import React, { useState, useEffect } from 'react';
import UploadImageButton from './../components/UploadImageButton.js';
import axios from 'axios';
import Modal from 'react-modal';
import { caretTrimReplace } from 'prettier';
import { Helmet } from 'react-helmet';
import AdminLoginNavbar from './AdminLoginNavbar';

import { useLocation } from "react-router-dom";
import Tags from '../components/Tags.js'
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

const todayStock = [
    { value: true, label: 'In stock today' },
    { value: false, label: 'Out of stock today' }
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
        // height: '6vh',
        // ...provided,
        // width: '30vw',
        // borderRadius: '.5vw',
        // border: state.isFocused ? '1.5px solid #ACB9AC' : '1.5px solid #ACB9AC',
        // boxShadow: state.isFocused ? '1.5px solid #ACB9AC' : '1.5px solid #ACB9AC',
        // '&:hover': {
        //     border: state.isFocused ? '1.5px solid #ACB9AC' : '1.5px solid #ACB9AC'
        // },
        ...provided,
        width: '30vw',
        borderRadius: '.5vw',
        textOverflow: "hidden",
        whiteSpace: "nowrap",
        overflow: "hidden",
        flexWrap: 'nowrap',
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
    const [stockAvailability, setStockAvailability] = useState("");
    const [tags, setTags] = useState([]);
    const [image, setImage] = useState("");



    function save() {
        console.log(itemName, stockAvailability, tags, image, location.state.inStock);
    }

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

    function displayTags() {
        <div className = "addTagsFormat">
                        {tags.map((tag) => {
                            return (
                            <Tags name={tag} />
                        );})}
                </div>
    }
        


    useEffect(() => {
        axios.get('http://localhost:4000/check_authenticated', { withCredentials: true})
           .catch((error) => {
               if (error.response.status === 403) {
                   window.location.href = "/login"

               }
           });

        if (location.state === null){
            setItemName(null);
            setTags(null);
            setImage(null);
            setStockAvailability("In Stock Today");
            setEdit(false);

        } else {
            setItemName(location.state.name);
            setTags(location.state.tags);
            setImage(location.state.image);
            setEdit(true);
    
    
            if (location.state.inStock) {
                setStockAvailability("In Stock Today");
            }
            else {setStockAvailability("Out of Stock Today");}
        }

       
    }, [])


    function deleteItem(nameFood) {
        // Simple DELETE request with axios
        axios.delete('http://localhost:4000/food', { data: { name: nameFood } })
            .then(() => console.log("something"));
    }

    function addItem(nameFood) {
        console.log(document.getElementById("addItem-food-name").value);
        // console.log(document.getElementById("filter-dropdown"));
        axios.post('http://localhost:4000/food', {name: document.getElementById("addItem-food-name").value, instock: stockValue.value, tags: categoriesList(categoriesValue), image_path: "codebase.com"})
            .then(() => console.log("add item works"));
    }
    function categoriesList(categoriesValue) {
        console.log(categoriesValue);
        console.log(categoriesValue.map((category) => category.value));
        
        return categoriesValue.map((category) => category.value);

    }

    

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [stockValue, setStockValue] = useState(true);
    const [categoriesValue, setCategoriesValue] = useState([""]);

   
    return (
        <>
        <AdminLoginNavbar isAdmin={true}/>
        
        <div className = 'add-food-component-container'>
            <div className = 'add-food-component-header'>
                {headerDisplay()}
            </div>
                <div className = 'main-add-food-component-container'>
                    <div className = 'add-item-selections'> 
                            <form style={{marginTop: "8%"}}>
                                <label className = "add-item-name-input">
                                    Item Name 
                                    </label>
                                    <input className = "add-item-name-textbox" defaultValue={itemName} type="text" name="name" />
                            </form>

                        <div className="add-item-stock-dropdown">
                            <label className = "add-item-name-input">Set Stock Availability</label>
                            <div>
                                <Select className="add-item-custom-dropdown"
                                    placeholder="select..."
                                    styles={customStyles}
                                    closeMenuOnSelect={true}
                                    components={animatedComponents}
                                    defaultValue={location.state === null? {label: "In Stock Today", value: true} : location.state.inStock? {label: "In Stock Today", value: true} : {label: "Out of Stock", value: false}}
                                    options={todayStock}
                                />
                               
                        </div> 

                        <div className="add-item-categories-dropdown">
                            <label className = "add-item-name-input">Select Dietary Categories (Optional)</label>
                            <div>
                                <Select className="add-item-custom-dropdown"
                                    closeMenuOnSelect={true}
                                    styles={customStyles}
                                    components={animatedComponents}
                                    defaultValue={location.state === null? [] : location.state.tags.map((tag) => 
                                        ({label: tag, value: tag.toLowerCase()})
                                    )}
                                    
                                    isMulti
                                    options={dietaryCategories}
                                />
                            </div>
                        </div>
                    </div>   
                    
                </div>
               
                <div className = "main-add-food-component-container-right">
                    <div className = "upload-image-container">
                        <div className = 'upload-image-header'>Upload Image <span className='optional-text'>(Optional)</span></div>

                            <UploadImageButton/>
                    </div>
                </div>
            <div className = "save-item-button-container-final">
                    <input className = "add-food-delete-item-button" type="button" onClick={() => setModalIsOpen(true)} value="Delete Item"></input>
                    <div className = "modal-container">
                    <Modal isOpen = {modalIsOpen} id = "modal" 
                    style={{content: {
                            display: "flex", 
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "25vw",
                            height: "40vh",
                            border: '1px solid #ccc',
                            background: '#fff',
                            overflow: 'auto',
                            WebkitOverflowScrolling: 'touch',
                            borderRadius: '10px',
                            outline: 'none',
                            outlineColor: "#588157",
                            padding: '20px',
                            backgroundColor: "white",
                            position: "absolute",
                            float: "left",
                            left: "50%",
                            top: "50%",
                            transform: "translate(-50%, -50%)"
                    }}}>
                        <h1>Confirm delete item?</h1>
                        <input className = "add-food-delete-item-final-button" type="button" onClick={() => {
                            setModalIsOpen(true);
                            deleteItem("anthony");
                        }} value="Delete Item"></input>
                        <input className = "add-food-cancel-item-button" type="button" onClick={() => setModalIsOpen(false)} value="Cancel"></input>
                        
                    </Modal>
                    </div>
                    <input className = "add-food-save-item-button" type="button" onClick={() => addItem("isbee")} value="Save Item"></input>
                </div>
                </div>
                <Helmet>
                    <title>Add Item</title>
                </Helmet>

                   

                    
                </div>

                
            </>
      
        
    )
    
}
