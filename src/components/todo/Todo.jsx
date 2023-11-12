import "./todo.css";
import Todo1 from "../newtodo/newtodo";
import { useState } from "react";

function Todo() {
  const [datafromchild, setdatafromchild] = useState([]);
  const [isEnabled, setIsEnabled] = useState(true);

  const toggleComponent = () => {
    setIsEnabled(!isEnabled);
  };

  const handleInputData = (data) => {
    // Assuming data is a single string value
    setdatafromchild([...datafromchild, data]);
    console.log(datafromchild);
  };
  const handledelete = (index) => {
    let copytask = [...datafromchild];
    copytask.splice(index,1);
    setdatafromchild(copytask);
  };
  return (
    <div className="container">
      <h1>TODO-List</h1>
      <button onClick={toggleComponent}>{ isEnabled ? "Cancel" : "Add task"} </button>
      {isEnabled && <Todo1 datachild={handleInputData} />}
      <ul>
        {datafromchild.map((item, index) => (
          <li key={index}>
            {item}
            <button
              onClick={() => {
                handledelete(index);
              }}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
