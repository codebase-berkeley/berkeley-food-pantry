import './App.css';
import { StockListingUser, StockListingAdmin } from './StockListingAdminMain.js'

function App() {
  return (
    <div className="App">
      <StockListingAdmin/>
      <StockListingUser/>
    </div>
  );
}

export default App;
