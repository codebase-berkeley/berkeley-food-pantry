import importimagecloud from './../images/import-image-cloud.svg';
import './../pages/AddFood.css';
import './UploadImageButton.css'
import React, { useState } from 'react';

export default function UploadImageButton(props) {
    const [buttonType, setButtonType] = useState(false);
    const [uploadedFile, setUploadedFile] = useState(null);
    const hiddenFileInput = React.useRef(null);


    function setButtonHelper() {
        setButtonType(true)
        hiddenFileInput.current.click()
        setUploadedFile(props.tempPath)
        return (
            <img src={uploadedFile}/>
            //here it should return a div with the uploaded img and the "img uploaded succesfully thing"
        )
    }
    
    if (buttonType == false) {
        return(
            <div className = "upload-image-container">
                <div className='import-image-button' role = 'button' onClick = {setButtonHelper}>
                    <img src = {importimagecloud} className = 'cloud-format' alt = "upload image cloud"></img>
                    <h1 className = 'upload-image-text-h1'>Import Image</h1>
                </div>
                <input type = "file" 
                    accept="image/*" 
                    ref={hiddenFileInput} 
                    onChange={props.onSelectFile} 
                    style ={{display: 'none'}}/> 
            </div>
        )
    } else if (buttonType == true) {
        return (
            <div className = "upload-image-container" role = 'button' onClick = {setButtonHelper}>
            <div className = 'change-image-button'> 
                <img src = {importimagecloud} className = 'cloud-format' alt = "upload image cloud"></img>
                <h1 className = 'upload-image-text-h1'>Change Image</h1>
            </div>
            <input type = "file" 
                    accept="image/*" 
                    ref={hiddenFileInput} 
                    onChange={props.onSelectFile} 
                    style ={{display: 'none'}}/> 
            </div>
        )
    }
}
    