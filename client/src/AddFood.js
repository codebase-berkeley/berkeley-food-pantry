import './AddFood.css';
import saveitembutton from './assets/saveitembutton.png';

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
        
                    </form>
                    </div>
                    <div className = 'upload-image'>Upload image</div>
                </div>
                <div className = 'save-item-button-container'>
                    <img src ={saveitembutton} className = "save-item-button" alt = "save item button"></img>
                </div>
        </div>
    )
}