import ToDoItem from "./ToDoItem";
import "./ToDoList.css";

export default function ToDoList({ toDos, updateToDoState }) {
  const toDoListItems = toDos.map((t, idx) => (
    <ToDoItem
      toDoText={t.text}
      completed={t.completed}
      updateToDoState={updateToDoState}
      key={idx}
      index={idx}
    />
  ));
  return <ul className="Item-list">{toDoListItems}</ul>;
}
