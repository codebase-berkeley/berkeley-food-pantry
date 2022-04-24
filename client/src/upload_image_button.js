import importimagecloud from './../images/import-image-cloud.svg';
import './add_food.css';
import React, { useState } from 'react';

export default function UploadImageButton() {
    const [buttonType, setButtonType] = useState(false);

    function setButtonHelper() {
        setButtonType(true)
    }
    
    if (buttonType == false) {
        return(
            <div className = "upload-image-container">
            <div className = 'import-image-button' role="button" onClick= {setButtonHelper}> 
                    <img src = {importimagecloud} className = 'cloud-format' alt = "upload image cloud"></img>
                    <h1 className = 'upload-image-text-h1'>Import Image</h1>
            </div>
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
    