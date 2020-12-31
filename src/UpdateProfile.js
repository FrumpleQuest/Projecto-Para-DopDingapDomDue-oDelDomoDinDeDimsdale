import Axios from "axios";
import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";

import NavBarSelector from "./navbar/NavBarSelector.js";

function UpdateProfile(props) {
  const [dev, setDev] = useState({});

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [prevProjects, setPrevProjects] = useState("");
  const [tools, setTools] = useState("");
  const [comments, setComments] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:4000/developer/1").then((res) =>
      setDev(res.data)
    );
  }, []);

  useEffect(() => {
    setEmail(dev.email);
    setName(dev.name);
    setPrevProjects(dev.prevProjects);
    setTools(dev.tools);
    setComments(dev.comments);
  }, [dev]);

  const handleEmail = (e) => setEmail(e.target.value);
  const handleName = (e) => setName(e.target.value);
  const handlePrevProjects = (e) => setPrevProjects(e.target.value);
  const handleTools = (e) => setTools(e.target.value);
  const handleComments = (e) => setComments(e.target.value);

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:4000/developer/update", {
      id: 1,
      email: email,
      name: name,
      prevProjects: prevProjects,
      tools: tools,
      comments: comments,
    });
    history.push("/");
  };

  return (
    <div>
    {NavBarSelector()}
    
    <Container>
      
      <Form>
        <Form.Group controlId="email">
          <Form.Label>Dirección de Correo Electrónico</Form.Label>
          <Form.Control
            value={email}
            onChange={handleEmail}
            type="email"
            placeholder="Ingrese email"
          />
        </Form.Group>

        <Form.Group controlId="name">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            value={name}
            onChange={handleName}
            type="text"
            placeholder="Ingrese Nombre"
          />
        </Form.Group>

        <Form.Group controlId="prevProjects">
          <Form.Label>Proyectos Previos</Form.Label>
          <Form.Control
            value={prevProjects}
            onChange={handlePrevProjects}
            type="text"
            placeholder="Ingrese Proyectos Previos"
          />
        </Form.Group>

        <Form.Group controlId="tools">
          <Form.Label>Herramientas</Form.Label>
          <Form.Control
            value={tools}
            onChange={handleTools}
            type="text"
            placeholder="Ingrese Herramientas"
          />
        </Form.Group>

        <Form.Group controlId="comments">
          <Form.Label>Comentarios</Form.Label>
          <Form.Control
            value={comments}
            onChange={handleComments}
            type="text"
            placeholder="Ingrese Commentarios"
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </Container>
    </div>
  );
}

export default UpdateProfile;
