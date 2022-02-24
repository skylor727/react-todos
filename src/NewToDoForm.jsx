import { useState } from "react";
import ToDoList from "./ToDoList";
export default ({ addToDo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleAddToDo = (evt) => {
    evt.preventDefault();
    addToDo(newTodo);
    setNewTodo("");
  };

  return (
    <>
      <h2>New To-Do</h2>
      <form onSubmit={handleAddToDo}>
        <input
          value={newTodo}
          placeholder="New Todo"
          onChange={(evt) => setNewTodo(evt.target.value)}
          type="text"
          required
          pattern=".{4,}"
        />
        <button onClick={handleAddToDo}>ADD TO-DO</button>
      </form>
    </>
  );
};
