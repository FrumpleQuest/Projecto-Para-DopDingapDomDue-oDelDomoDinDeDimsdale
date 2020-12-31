import Axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

function ChangeDev(props) {
  const [emailDev, setEmailDev] = useState(0);
  const handleEmail = (e) => setEmailDev(e.target.value);

  const handleSubmit = () => {
    Axios.post("http://localhost:4000/chunk/update", {
      id: props.idChunk,
      emailDev: emailDev,
    })
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((error) => console.log(error));
  };

  return (
    <Form>
      <Form.Group controlId="emailDev">
        <Form.Label>Email Desarrollador</Form.Label>
        <Form.Control
          onChange={handleEmail}
          type="text"
          placeholder="ej: 1"
          required
        />
      </Form.Group>
      <Button action submit onClick={handleSubmit}>
        Enviar
      </Button>
    </Form>
  );
}

export default ChangeDev;
