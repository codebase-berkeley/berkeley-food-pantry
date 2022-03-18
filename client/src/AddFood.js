import './AddFood.css';
import saveitembutton from './assets/saveitembutton.png';
import importimagecloud from './assets/import-image-cloud.svg';

export default function AddFood() {
    return(
        <div className = 'add-food-component-container'>
            <div className = 'add-food-component-header'>
                <div>
                    <h1>Add Item</h1>
                    <p>Add a new item to the stock directory.</p>
                </div>
            </div>
                <div className = 'main-add-food-component-container'>
                    <div className = 'item-selections'> 
                    <form>
                        <label className = "item-name-input">
                            Item Name 
                            <input type="text" name="name" />
                         </label>
                         <label for="stock-select-list">Set Stock Availability</label>
                            <select className="stock-select-list" id="selectList"> 
                                <option value="option 1">In Stock Today</option>
                                <option value="option 2">Not in Stock</option>
                            </select>
                        <label for="dietary-categories-select-list">Select Dietary Categories (Optional)</label>
                            <select className="dietary-categories-select-list" id="selectList">
                                <option value="option 1">Vegetarian</option>
                                <option value="option 2">Vegan</option>
                                <option value="option 3">None</option>
                            </select>
                    </form>
                    </div>
                    <div className = 'right-side-container'>
                    <div className = 'import-image-button'> 
                            <img src = {importimagecloud} className = 'cloud-format' alt = "upload image cloud"></img>
                            <h1 className = 'upload-image-text-h1'>Import Image</h1>     
                    </div>
                    </div>
                </div>
            <div className = 'save-item-button-container'>
                <img src ={saveitembutton} className = "save-item-button" alt = "save item button"></img>
            </div>
        </div>
    )
}