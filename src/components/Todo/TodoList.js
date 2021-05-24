import Todo from "./Todo";
import "./Todo.css";
import { Card } from "react-bootstrap";
export default function TodoList({
  className,
  listTodo,
  setListTodo,
  modeList,
}) {
  // Code cua Todo
  function handleClickTodo(id) {
    setListTodo(
      listTodo.map((todo) => {
        return todo.id === id ? { ...todo, status: !todo.status } : todo;
      })
    );
  }
  function handleDeleteTodo(event, id) {
    event.stopPropagation();
    setListTodo(
      listTodo.filter((todo) => {
        return todo.id !== id;
      })
    );
  }
  return (
    <Card className={className}>
      <Card.Body
        style={{ height: "12rem" }}
        className="d-flex flex-column-reverse overflow-auto todo-list"
      >
        {todoWidthMode(listTodo, modeList)}
      </Card.Body>
    </Card>
  );
  function todoWidthMode(listTodo, mode) {
    switch (mode) {
      case "all":
        return listTodo.map((todo) => (
          <Todo
            key={todo.id}
            text={todo.name}
            status={todo.status}
            handleClickTodo={() => handleClickTodo(todo.id)}
            handleDeleteTodo={(event) => handleDeleteTodo(event, todo.id)}
          />
        ));
      case "unfinished":
        return listTodo.map((todo) =>
          todo.status === false ? (
            <Todo
              key={todo.id}
              id={todo.id}
              text={todo.name}
              status={todo.status}
              handleClickTodo={() => handleClickTodo(todo.id)}
              handleDeleteTodo={(event) => handleDeleteTodo(event, todo.id)}
            />
          ) : null
        );
      case "finished":
        return listTodo.map((todo) =>
          todo.status === true ? (
            <Todo
              key={todo.id}
              id={todo.id}
              text={todo.name}
              status={todo.status}
              handleClickTodo={() => handleClickTodo(todo.id)}
              handleDeleteTodo={(event) => handleDeleteTodo(event, todo.id)}
            />
          ) : null
        );
      default:
        return "Lỗi không thể sảy ra";
    }
  }
}
