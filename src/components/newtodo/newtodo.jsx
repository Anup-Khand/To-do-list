/* eslint-disable react/prop-types */
import { useState } from "react";

const Todo1 = ({ datachild }) => {
  const [task, setTask] = useState("");

  const [ptask, setptask] = useState("");
  const handleChange = (e) => {
    const data = e.target.value;
    setTask(data);
    setptask(data);
  };
  const submithanddler = (e) => {
    e.preventDefault();
    setTask("");
    datachild(ptask)
  };

  return (
    <form onSubmit={submithanddler}>
      <input type="text" value={task} onChange={handleChange} />
      <button>Submit</button>
    </form>
  );
};

export default Todo1;
