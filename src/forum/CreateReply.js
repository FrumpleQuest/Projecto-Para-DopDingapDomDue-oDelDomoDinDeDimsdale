import Axios from "axios";
import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { ReactSession } from "react-client-session";

function CreateReply(props) {
  const [body, setBody] = useState("");

  const handleBody = (e) => setBody(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = ReactSession.get("username");
    const email = ReactSession.get("email");
    const type = ReactSession.get("type");
    
    Axios.post("http://localhost:4000/reply/create", {
      idTopic: props.idTopic,
      creatorName: name,
      creatorEmail: email,
      creatorType: type,
      body: body,
      creationDate: new Date(),
    }).then((res) => console.log(res.data));
    window.location.reload();
  };
  return (
    <div>
    
    <Container>
      
      <Form>
        <Form.Group controlId="body">
          <Form.Label>Texto</Form.Label>
          <Form.Control
            onChange={handleBody}
            type="text"
            placeholder="Ingrese texto"
          />
        </Form.Group>

        <Button onClick={handleSubmit} variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </Container>
    </div>
  );
}

export default CreateReply;
