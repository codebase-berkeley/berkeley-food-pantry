import './AddFood.css';
import saveitembutton from './assets/saveitembutton.png';
import importimage from './assets/importimage.png';

export default function AddFood() {
    return(
        <div className = 'add-food-component-container'>
            <div className = 'add-food-component-header'>
                <div><h1>Add Item</h1>
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
                    <div className = 'upload-image'> 
                        <div className = 'upload-image-text'>Upload image (Optional)</div>
                            <img src ={importimage} className = "import-image-button" alt = "save item button"></img>      
                    </div>
                </div>
            <div className = 'save-item-button-container'>
                <img src ={saveitembutton} className = "save-item-button" alt = "save item button"></img>
            </div>
        </div>
    )
}