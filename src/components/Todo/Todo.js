import { X } from "react-bootstrap-icons";
import "./Todo.css";
export default function Todo({
  text,
  status = false,
  handleClickTodo,
  handleDeleteTodo,
}) {
  return (
    <li
      className={`${
        status ? "todo-completed" : ""
      } todo d-flex justify-content-between align-items-center`}
      onClick={handleClickTodo}
    >
      <span className="todo__content">{text}</span>
      {status ? (
        <X size={35} className="delete-todo" onClick={handleDeleteTodo} />
      ) : null}
    </li>
  );
}
