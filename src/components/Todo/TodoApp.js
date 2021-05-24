import { useState, useRef } from "react";
import { Card, Container } from "react-bootstrap";
import Footer from "../Footer/Footer";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
export default function TodoApp() {
  const countRef = useRef(0);
  //Code cua ListTodo
  const [listTodo, setListTodo] = useState([]);
  const [modeList, setModeList] = useState("all");
  // --End-- Code cua ListTodo
  // Code cua AddTodo
  const [todoName, setTodoName] = useState("");
  const handleChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (todoName === "") {
      return;
    }
    setListTodo([
      ...listTodo,
      { id: countRef.current++, name: todoName, status: false },
    ]);
    setTodoName("");
  };
  // --End-- Code cua AddTodo
  // Code cua footer

  const handleShowAll = (event) => {
    event.preventDefault();
    setModeList("all");
  };
  const handleShowUnfinished = (event) => {
    event.preventDefault();
    setModeList("unfinished");
  };
  const handleShowFinished = (event) => {
    event.preventDefault();
    setModeList("finished");
  };
  // --End-- Code cua footer
  return (
    <Container className="d-flex justify-content-center mt-5">
      <Card style={{ width: "24rem" }} bg="light">
        <Card.Body>
          <h1 className="d-flex justify-content-center">Todos</h1>
          <TodoList
            className="mt-3"
            modeList={modeList}
            listTodo={listTodo}
            setListTodo={setListTodo}
          />
          <AddTodo
            className="mt-3"
            todoName={todoName}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
          <Footer
            className="mt-3"
            modeList={modeList}
            handleShowAll={handleShowAll}
            handleShowUnfinished={handleShowUnfinished}
            handleShowFinished={handleShowFinished}
          />
        </Card.Body>
      </Card>
    </Container>
  );
}
