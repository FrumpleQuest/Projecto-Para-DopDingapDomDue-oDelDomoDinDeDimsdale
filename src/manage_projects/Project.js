import Axios from "axios";
import React, { useState, useEffect } from "react";
import { Container, ListGroup, Col, Row } from "react-bootstrap";

function Project(props) {
  const id = props.id;

  const [project, setProject] = useState({});
  const [client, setClient] = useState({});
  const [pm, setPM] = useState({});

  useEffect(() => {
    Axios.get("http://localhost:4000/project/" + id).then((res) =>
      setProject(res.data)
    );
  }, []);

  useEffect(() => {
    Axios.get(
      "http://localhost:4000/client/email/" + project.clientEmail
    ).then((res) => setClient(res.data));
    Axios.get(
      "http://localhost:4000/pm/email/" + project.managerEmail
    ).then((res) => setPM(res.data));
  }, [project]);
  return (
    <div>
      <Container fluid>
        <ListGroup>
          <ListGroup.Item>
            <b>Cliente:</b> {client.name}
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Jefe de Proyecto:</b> {pm.name}
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Fecha de Inicio:</b> {project.startingDate}
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Fecha de Entrega:</b> {project.deadline}
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Descripción:</b> {project.description}
          </ListGroup.Item>
        </ListGroup>
        <br></br>
      </Container>
    </div>
  );
}
export default Project;
