import importimagecloud from './../images/import-image-cloud.svg';
import './../pages/AddFood.css';
import React, { useState } from 'react';

export default function UploadImageButton(props) {
    const [buttonType, setButtonType] = useState(false);

    function setButtonHelper() {
        setButtonType(true)
    }
    
    if (buttonType == false) {
        return(
            <div className = "upload-image-container">
            <input type = "file" accept="image/*" className = 'import-image-button' onChange={props.onSelectFile}/> 
            </div>
        )
    } else if (buttonType == true) {
        return (
            <div className = "upload-image-container">
            <div className = 'change-image-button'> 
                <img src = {importimagecloud} className = 'cloud-format' alt = "upload image cloud"></img>
                <h1 className = 'upload-image-text-h1'>Change Image</h1>
            </div>
            </div>
        )
    }
}
    