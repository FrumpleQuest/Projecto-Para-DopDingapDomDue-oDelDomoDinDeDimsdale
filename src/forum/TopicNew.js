import Axios from "axios";
import React, { useState, useEffect } from "react";
import { Container, Form, Button, Col, Row, ButtonGroup, ToggleButton } from "react-bootstrap";
import { ReactSession } from "react-client-session";
import { useHistory, Link } from "react-router-dom";

import NavBarSelector from "../navbar/NavBarSelector.js";

function TopicNew(props) {
  const [topic, setTopic] = useState({});

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [category,setCategory] = useState("");

  const handletitle = (e) => setTitle(e.target.value);
  const handleBody = (e) => setBody(e.target.value);

  const history = useHistory();

  const  handleSubmit  = (e) => {
    const email = ReactSession.get("email");
    const name = ReactSession.get("username");
    const type = ReactSession.get("type");
    Axios.post("http://localhost:4000/topic/create", {
      creatorEmail: email,
      creatorName: name,
      creatorType: type,
      category: category,
      title: title, 
      body: body,
      creationDate: new Date(),
    });
    history.push("/forum");
    window.location.reload();
  };

  return (
    <div>
      {NavBarSelector()}
    
    <Container>
      
        <Col>
        <Row>
            <h2> New Topic </h2>
        </Row>
        </Col>
      <Form>
        

        <Form.Group controlId="title">
          <Form.Label>Titulo</Form.Label>
          <Form.Control
            onChange={handletitle}
            type="text"
            placeholder="Ingrese un divertieducativo título"
          />
        </Form.Group>

        <Form.Group controlId="body">
          <Form.Label>Body</Form.Label>
          <Form.Control
            onChange={handleBody}
            type="text"
            placeholder="Ingrese el cuerpo de su nuevo tema"
          />
        </Form.Group>

        <ButtonGroup toggle aria-label="Basic example">
          <ToggleButton type = "checkbox" value = {"Update"} onClick={() => setCategory("Update")} variant="success">Update</ToggleButton>
          <ToggleButton type = "checkbox" value = {"Request"} onClick={() => setCategory("Request")} variant="warning">Request</ToggleButton>
          <ToggleButton type = "checkbox" value = {"Discussion"} onClick={() => setCategory("Discussion")} variant="info">Discussion</ToggleButton>
          <ToggleButton type = "checkbox" value = {"Alert"} onClick={() => setCategory("Alert")} variant="danger">Alert</ToggleButton>
        </ButtonGroup>

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </Container>
    </div>
  );
}

export default TopicNew;