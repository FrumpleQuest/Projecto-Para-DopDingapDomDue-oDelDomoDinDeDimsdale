import Axios from "axios";
import React, { useState, useEffect } from "react";
import { Container, Form, Button, Col, Row } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";
import NavBarSelector from "./navbar/NavBarSelector.js";

function CreateProject(props) {
  const [project, setProject] = useState({});

  const [clientEmail, setClientEmail] = useState("");
  const [managerEmail, setManagerEmail] = useState("");
  const [startingDate, setStartingDate] = useState("");
  const [deadline, setDeadline] = useState("");
  const [description, setDescription] = useState("");

  const handleclientEmail = (e) => setClientEmail(e.target.value);
  const handlemanagerEmail = (e) => setManagerEmail(e.target.value);
  const handlestartingDate = (e) => setStartingDate(e.target.value);
  const handleTools = (e) => setDeadline(e.target.value);
  const handleComments = (e) => setDescription(e.target.value);

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:4000/project/create", {
      clientEmail: clientEmail,
      managerEmail: managerEmail,
      startingDate: startingDate,
      deadline: deadline,
      description: description,
    });
    history.push("/manage");
  };

  return (
    <div>
      {NavBarSelector()}
      <Container>
        <Col>
          <Row>
            <h2> Nuevo Proyecto </h2>
          </Row>
        </Col>
        <Form>
          <Form.Group controlId="clientEmail">
            <Form.Label>Correo Electrónico de Cliente</Form.Label>
            <Form.Control
              onChange={handleclientEmail}
              type="clientEmail"
              placeholder="BigChungus@Stonks.cl"
            />
          </Form.Group>

          <Form.Group controlId="managerEmail">
            <Form.Label>Correo Electrónico de Jefe de Proyecto</Form.Label>
            <Form.Control
              onChange={handlemanagerEmail}
              type="text"
              placeholder="CampRockFan12@hotmail.com"
            />
          </Form.Group>

          <Form.Group controlId="startingDate">
            <Form.Label>Fecha de Inicio</Form.Label>
            <Form.Control onChange={handlestartingDate} type="date" />
          </Form.Group>

          <Form.Group controlId="deadline">
            <Form.Label>Fecha de Entrega</Form.Label>
            <Form.Control onChange={handleTools} type="date" />
          </Form.Group>

          <Form.Group controlId="description">
            <Form.Label>Descripcion</Form.Label>
            <Form.Control
              onChange={handleComments}
              type="text"
              placeholder="Ingrese Descripción"
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

export default CreateProject;
