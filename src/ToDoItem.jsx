import "./ToDoItem.css";
import { useState } from "react";
export default function ToDoItem({
  toDoText,
  completed,
  index,
  updateToDoState
}) {
  const [completedButton, setCompletedButton] = useState(completed);
  return (
    <li
      className="ToDoItem"
      style={{
        backgroundColor: index % 2 ? "lavender" : "plum"
      }}
    >
      <div className="flex-ctr-ctr">{index + 1}</div>
      <span
        style={{ textDecoration: completedButton ? "line-through" : "none" }}
      >
        {toDoText}
      </span>
      <button
        style={{ color: completedButton ? "red" : "green" }}
        onClick={() => {
          if (!completedButton) {
            setCompletedButton(true);
            updateToDoState(index);
          } else {
            updateToDoState(index);
            setCompletedButton(false);
          }
        }}
      >
        {completedButton ? "x" : "✓"}
      </button>
    </li>
  );
}
