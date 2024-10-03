import { useState } from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  //item array
  const [items, setItems] = useState([]);
  const [inputText, setInputText] = useState("");

  const addItem = () => {
    if (inputText.trim() !== "") {
      setItems([...items, { text: inputText, done: false }]);
      setInputText("");
      toast("Item added!", { position: "top-center" });
    }
  };

  const deleteItem = (index) => {
    const newItems = [...items]; // Create a copy of the original array
    newItems.splice(index, 1); // Remove one item at the specified index
    setItems(newItems); // Update the state with the modified array
    toast("Item deleted!", { position: "top-center" });
  };

  const toggleItemDone = (index) => {
    const newItems = [...items];
    newItems[index].done = !newItems[index].done;
    setItems(newItems);
  };

  return (
    <div className="main-section">
      <ToastContainer />
      <div className="card-content">
        <h4>Grocery Bud</h4>
        <div className="input-btn">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button onClick={addItem}>Add</button>
        </div>
        <div className="item-list">
          {items.map((item, index) => (
            <div className="item" key={index}>
              <input
                type="checkbox"
                checked={item.done}
                onChange={() => toggleItemDone(index)}
              />
              <span className={item.done ? "done" : ""}>{item.text}</span>
              <button onClick={() => deleteItem(index)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
