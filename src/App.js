import "./App.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";

function App() {
  const [add, setAdd] = useState([]);
  const [task, setTask] = useState();

  function handleChange(event) {
    setTask(event.target.value);
  }
  function addTask() {
    task ? setAdd((e) => [task, ...e]) : alert("Please add a Task");
  }

  return (
    <div className="container fluid">
      <div className="main-app">
        <div className="container d-flex justify-content-center my-2">
          <h2>To-Do List</h2>
        </div>
        <form className="" onSubmit={(e) => e.preventDefault()}>
          <div className="row d-flex justify-content-between">
            <div className="col-md-10">
              <input
                type="text"
                className="form-control"
                placeholder="Enter a task..."
                onChange={handleChange}
              ></input>
            </div>
            <div className="col-md-2 mx-0">
              <Button variant="primary" onClick={addTask}>
                Add
              </Button>
            </div>
          </div>
        </form>
        <div className="container mt-3">
          {add.map((item) => (
            <div className="row task">
              <div className="col">{item}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
