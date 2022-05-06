import './AddFood.css';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import React, { useEffect, useState } from 'react';
import UploadImageButton from './../components/UploadImageButton.js';
import axios from 'axios';
import Modal from 'react-modal';
import { Helmet } from 'react-helmet';
import AdminLoginNavbar from './AdminLoginNavbar';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { useLocation } from "react-router-dom";
import Tags from '../components/Tags.js'

const todayStock = [
    { value: true, label: 'In stock today' },
    { value: false, label: 'Out of stock today' }
]

const dietaryCategories = [
    { value: 'vegan', label: 'Vegan' },
    { value: 'vegetarian', label: 'Vegetarian' },
    { value: 'pescatarian', label: 'Pescatarian' },
    { value: 'gluten-free', label: 'Gluten-free' },
    { value: 'fruit', label: 'Fruit' },
    { value: 'vegetable', label: 'Vegetable' },
    { value: 'grains', label: 'Grains' },
    { value: 'dairy', label: 'Dairy' },
    { value: 'seafood', label: 'Seafood' }
]

const animatedComponents = makeAnimated();
const customStyles = {
    
    placeholder: (defaultStyles) => ({
        ...defaultStyles,
        color: 'black',
    }),
    
    option: (provided, state) => ({
        ...provided,
        height: '6vh',
        backgroundColor: state.isFocused ? "#E5E5E5" : null,
        color: 'black',
        focus: 'black'
    }),

    dropdownIndicator: base => ({
        ...base,
        color: "#ACB9AC"
    }),

    indicatorSeparator: () => null,

    control: (provided, state) => ({
        
        ...provided,
        height: '6vh',
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
            ...provided, opacity, transition, borderRadius: '20px', paddingLeft: '5px', paddingRight: '5px', '&:hover': {
                borderRadius: '20px !important',
                paddingLeft: '5px !important', paddingRight: '5px !important'
             }
            };
        }
    }


        


export default function AddFood() {
    const location = useLocation();
    const [edit, setEdit] = useState(true);
    const [itemName, setItemName] = useState("");
    const [stockAvailability, setStockAvailability] = useState( {label: "In Stock Today", value: true});
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
        axios.delete('http://localhost:5000/food', { data: { name: nameFood } })
            .then(() => console.log("something"));
    }

    async function onSelectFile(event) {
        const file = event.target.files[0];
        const convertedFile = await convertToBase64(file);
        let tempPath = (URL.createObjectURL(event.target.files[0]));
        console.log(tempPath)
        setFileName(file.name);
        setPreviewImage(tempPath)
        setFoodImg(convertedFile);
    }

    const convertToBase64 = (file) => {
        return new Promise(resolve => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                resolve(reader.result);
            }
        })
    }

    function addItem(nameFood) {
        console.log(document.getElementById("addItem-food-name").value);
        if (edit) {
            axios.put('http://localhost:4000/food', {
            name: document.getElementById("addItem-food-name").value, 
            instock: stockAvailability.value, 
            tags: categoriesList(categoriesValue), 
            image_name: fileName,
            image: foodImg
        })
        } else {
            axios.post('http://localhost:4000/food', {
                name: document.getElementById("addItem-food-name").value, 
                instock: stockAvailability.value, 
                tags: categoriesList(categoriesValue), 
                image_name: fileName,
                image: foodImg
            })
        }
        
    }

    function categoriesList(categoriesValue) {
        console.log(categoriesValue);
        console.log(categoriesValue.map((category) => category.value));
        
        return categoriesValue.map((category) => category.value).join(",");

    }

    

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [categoriesValue, setCategoriesValue] = useState([""]);
    const [foodImg, setFoodImg] = useState();
    const [fileName, setFileName] = useState();
    const [previewImage, setPreviewImage] = useState();

   
    return (
        <>
        <AdminLoginNavbar isAdmin={true}/>
        
        <div className = 'add-food-component-container'>
            <div className = 'add-food-component-header'>
                {headerDisplay()}
            </div>
                <div className = 'main-add-food-component-container'>
                    <div className = "main-add-food-component-container-left">
                        <div className = 'add-item-selections'> 
                            <div className = "item-name">
                              <form style={{marginTop: "8%"}}>
                                 <label className = "add-item-name-input">
                                    Item Name 
                                    </label>
                                    <input id="addItem-food-name" className = "add-item-name-textbox" defaultValue={itemName} type="text" name="name" />
                                </form>
                            </div>
                            <div className="add-item-stock-dropdown">
                                <label className = "add-item-name-input">Set Stock Availability</label>
                                
                                <Select className="add-item-custom-dropdown"
                                    placeholder="select..."
                                    styles={customStyles}
                                    closeMenuOnSelect={true}
                                    components={animatedComponents}
                                    defaultValue={location.state === null? {label: "In Stock Today", value: true} : location.state.inStock? {label: "In Stock Today", value: true} : {label: "Out of Stock", value: false}}
                                    options={todayStock}
                                    value={stockAvailability}
                                    onChange={setStockAvailability}
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
                                    value={categoriesValue}
                                    onChange={setCategoriesValue}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>   
                <div className = "main-add-food-component-container-right">

                        <div className = 'upload-image-header'>Upload Image <span class='optional-text'>(Optional)</span></div>
                     <div className = "addFood-upload-bttn"> <UploadImageButton onSelectFile = {onSelectFile} previewPath={previewImage}/> </div>
                </div>
            </div>
            <div className = "save-item-button-container-final">
                    <input className = "add-food-delete-item-button" style={edit ? {} : {display: "none"}} type="button" onClick={() => setModalIsOpen(true)} value="Delete Item"></input>
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
                        <input className = "add-food-delete-item-final-button"  type="button" onClick={() => {
                            setModalIsOpen(true);
                            deleteItem("anthony");
                        }} value="Delete Item"></input>
                        <input className = "add-food-cancel-item-button" type="button" onClick={() => setModalIsOpen(false)} value="Cancel"></input>
                        
                    </Modal>
                    </div>
                    <Link to="/edit-stock" className = "add-food-save-item-button" type="button" onClick={() => {addItem("isbee"); this.forceUpdate(); } } value="Save Item">Save Item</Link>
                    
                </div>
                </div>
                
                <Helmet>
                    <title>Add Item</title>
                </Helmet>

                   

                    

               
           

                
            </>
      
        
    )
    
}
