import Axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, ListGroup, Col, Row } from "react-bootstrap";

import NavBarSelector from "./navbar/NavBarSelector.js";
import ProjectChunks from "./manage_projects/ProjectChunks";
import { render } from "@testing-library/react";
import { ReactSession } from "react-client-session";

function Project(props) {
  const { id } = useParams();

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
      {NavBarSelector()}
      <Container>
        <Col>
          <Row>
            <h3 class="text-white"> Proyecto {id}</h3>
          </Row>
        </Col>
        .
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
        <h3 class="text-white"> Entregas </h3>
        {ReactSession.get("type") !== "Developer" ? (
          <div class="text-right">
            <a
              type="button"
              class="btn btn-primary pull-right"
              href={"/proyecto/edit/" + id}
            >
              Editar Proyecto
            </a>
          </div>
        ) : (
          <></>
        )}
        <ProjectChunks id={id} enableEdit={false} />
      </Container>
    </div>
  );
}
export default Project;
