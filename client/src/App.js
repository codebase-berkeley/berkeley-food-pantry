import logo from './logo.svg';
import './App.css';
import Food from './Food';
import apple from "./apple.png";

function App() {
  return (
    <div>
      <Food name="Apple" image={apple} in_stock={true} tags={["Vegetarian", "Vegan", "Gluten-free", "Fruit"]} />
    </div>
  );
}

export default App;
