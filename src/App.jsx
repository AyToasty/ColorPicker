// Write your Color component here
import { useState } from 'react'

const Color = ({ color, setSelectedColor, isSelected }) => {
  return (
    <div
      className={`${color} ${isSelected ? 'selected' : ''}`}
      onClick={() => setSelectedColor(color)}
    ></div>
  );
};

const App = () => {
  const [selectedColor, setSelectedColor] = useState("")
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color 
        color="yellow" 
        setSelectedColor={setSelectedColor}
        isSelected={selectedColor === "yellow"}
        />
        <Color 
        color="green" 
        setSelectedColor={setSelectedColor}
        isSelected={selectedColor === "green"}
        />
        <Color 
        color="black" 
        setSelectedColor={setSelectedColor}
        isSelected={selectedColor === "black"}
        />
        <Color 
        color="blue" 
        setSelectedColor={setSelectedColor}
        isSelected={selectedColor === "blue"}
        />
        <Color 
        color="red" 
        setSelectedColor={setSelectedColor}
        isSelected={selectedColor === "red"}
        />
        <Color 
        color="orange" 
        setSelectedColor={setSelectedColor}
        isSelected={selectedColor === "orange"}
        />
        <Color 
        color="violet" 
        setSelectedColor={setSelectedColor}
        isSelected={selectedColor === "violet"}
        />
        <Color 
        color="white" 
        setSelectedColor={setSelectedColor}
        isSelected={selectedColor === "white"}
        />
      </div>
    </div>
    
  );
};

export default App;
