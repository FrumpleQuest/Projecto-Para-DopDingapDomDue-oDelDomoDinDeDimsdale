import Axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, ListGroup, Col, Row, ProgressBar } from "react-bootstrap";

import NavBarSelector from "./navbar/NavBarSelector.js";
import ProjectChunksClient from "./manage_projects/ProjectChunksClient";
import { render } from "@testing-library/react";
import { ReactSession } from "react-client-session";

function ProjectCli(props) {
  const { id } = useParams();

  const [project, setProject] = useState({});
  const [client, setClient] = useState({});
  const [pm, setPM] = useState({});

  useEffect(() => {
    Axios.get("http://localhost:4000/project/" + id).then((res) =>
      setProject(res.data)
    );
  }, []);

  const [chunks, setChunks] = useState({});
  const [completeChunks, setCompleteChunks] = useState({});
  //Para la Barra
  useEffect(() => {
    Axios.get("http://localhost:4000/chunk/by_project/" + id).then((res) =>
      setChunks(res.data)
    );
  }, []);useEffect(() => {
    Axios.get("http://localhost:4000/chunk/by_project/only_complete/" + id).then((res) =>
      setCompleteChunks(res.data)
    );
  }, []);

  const total_chunks = chunks.length;
  const done_chunks = completeChunks.length;
  const percentage = (done_chunks/total_chunks)*100;

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
        <ProgressBar animated now={percentage} label={`${percentage}%`} />
        <br></br>
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
        <h3 class="text-white"> Entregas </h3>
        <ProjectChunksClient id={id} enableEdit={false} />
      </Container>
    </div>
  );
}
export default ProjectCli;