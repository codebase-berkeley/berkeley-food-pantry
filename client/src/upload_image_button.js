import importimagecloud from './assets/import-image-cloud.svg';
import './add_food.css';
import saveitembutton from './assets/saveitembutton.png';
import Select, { NonceProvider } from 'react-select';
import makeAnimated from 'react-select/animated';
import React, { useState } from 'react';

export default function UploadImageButton() {
    const [buttonType, setButtonType] = useState(false);

    function setButtonHelper() {
        setButtonType(true)
    }
    
    if (buttonType == false) {
        return(
            <div className = "save-item-button-container-final">
            <div className = 'import-image-button' role="button" onClick= {setButtonHelper}> 
                    <img src = {importimagecloud} className = 'cloud-format' alt = "upload image cloud"></img>
                    <h1 className = 'upload-image-text-h1'>Import Image</h1>
            </div>
            </div>
        )
    } else if (buttonType == true) {
        return (
            <div className = 'change-image-button'> 
                <img src = {importimagecloud} className = 'cloud-format' alt = "upload image cloud"></img>
                <h1 className = 'upload-image-text-h1'>Change Image</h1>
            </div>
        )
    }
}
    