import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container, Form, ListGroup, Modal } from "react-bootstrap";
import { ReactSession } from "react-client-session";

export default function ChunkComments(props) {
  const [comments, setComments] = useState([]);
  const [show, setShow] = useState(false);
  const [body, setBody] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:4000/chunk/comments/" + props.id).then((res) =>
      setComments(res.data)
    );
  }, []);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleBody = (e) => setBody(e.target.value);
  const handleSubmit = () => {
    Axios.post("http://localhost:4000/chunk/comments/create", {
      idChunk: props.id,
      body: body,
    })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
    handleClose();
  };

  return (
    <Container fluid>
      <h3>Comentarios</h3>
      <ListGroup>
        {comments.map((comment) => (
          <ListGroup.Item>{comment.body}</ListGroup.Item>
        ))}
      </ListGroup>
      {ReactSession.get("type") === "Client" ? (
        <Button onClick={handleShow}> Agregar</Button>
      ) : (
        <></>
      )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Comentario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="body">
              <Form.Label>Comentario</Form.Label>
              <Form.Control type="body" onChange={handleBody} />
            </Form.Group>
            <Button submit onClick={handleSubmit}>
              Enviar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
}
