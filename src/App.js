import { useState } from "react";
import "./styles.css";
import NewToDoForm from "./NewToDoForm";
import ToDoList from "./ToDoList";

export default function App() {
  const [toDos, setToDos] = useState([
    { text: "Have Fun", completed: false },
    { text: "Learn React", completed: false },
    { text: "Learn the MERN-Stack", completed: false }
  ]);
  const [showToDos, setShowToDos] = useState(true);

  function addToDo(toDo) {
    setToDos([{ text: toDo, completed: false }, ...toDos]);
  }

  function updateToDoState(index) {
    if (!toDos[index].completed) {
      toDos[index].completed = true;
    } else if (toDos[index].completed)
      setToDos([...toDos.filter((todo) => !todo.completed)]);
  }

  return (
    <div className="App">
      <h1>React To-Do</h1>
      <button onClick={() => setShowToDos(!showToDos)}>
        {showToDos ? "HIDE" : "SHOW"}
      </button>
      {showToDos && (
        <ToDoList toDos={toDos} updateToDoState={updateToDoState} />
      )}
      <hr />
      <NewToDoForm addToDo={addToDo} />
    </div>
  );
}
