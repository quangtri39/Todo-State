import { Form, Button, Col } from "react-bootstrap";
export default function AddTodo({
  className,
  todoName,
  handleChange,
  handleSubmit,
}) {
  return (
    <Form className={className} onSubmit={handleSubmit}>
      <Form.Row className="justify-content-center">
        <Col xs="auto">
          <Form.Control
            type="text"
            placeholder="todo"
            value={todoName}
            onChange={handleChange}
          />
        </Col>
        <Col xs="auto">
          <Button variant="primary" type="submit">
            Add todo
          </Button>
        </Col>
      </Form.Row>
    </Form>
  );
}
