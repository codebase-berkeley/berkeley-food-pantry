import importimagecloud from './../images/import-image-cloud.svg';
import './../pages/AddFood.css';
import saveitembutton from './../images/saveitembutton.png';
import Select, { NonceProvider } from 'react-select';
import makeAnimated from 'react-select/animated';
import React, { useState, useCallback } from 'react';
import Dropzone from 'react-dropzone';
import {useDropzone} from 'react-dropzone'

export default function UploadImageButton() {
    const [buttonType, setButtonType] = useState(false);

    const Standard = () => {
        // const getUploadParams = () => {
        //   return { url: 'https://httpbin.org/post' }
        // }
      
        // const handleChangeStatus = ({ meta }, status) => {
        //   console.log(status, meta)
        // }
      
        // const handleSubmit = (files, allFiles) => {
        //   console.log(files.map(f => f.meta))
        //   allFiles.forEach(f => f.remove())
        // }
      
        return (
          <Dropzone
           
          />
        )
      }

      function MyDropzone() {
        const onDrop = useCallback(acceptedFiles => {
          // Do something with the files
        }, [])
        const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
      
        return (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            {
              isDragActive ?
                <p>Drop the files here ...</p> :
                <p>Drag 'n' drop some files here, or click to select files</p>
            }
          </div>
        )
      }

    function setButtonHelper() {
        setButtonType(true);


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
                {MyDropzone()}
                <img src = {importimagecloud} className = 'cloud-format' alt = "upload image cloud"></img>
                <h1 className = 'upload-image-text-h1'>Change Image</h1>
            </div>
            </div>
        )
    }
}