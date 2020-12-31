import Axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Accordion,
  Button,
  ButtonGroup,
  Card,
  Container,
  ListGroup,
  Modal,
} from "react-bootstrap";
import { ReactSession } from "react-client-session";

import FunctionalRequirementList from "./FunctionalRequirementList";
import ChangeDev from "./ChangeDev";
import ChunkComments from "./ChunkComments";
import Project from "./Project";

function ProjectChunksClient(props) {
  const [chunks, setChunks] = useState([]);
  const [idChunk, setIdChunk] = useState(0);

  const sessionType = ReactSession.get("type");

  // Solo los jefe de proyecto y los admin pueden editar entregas
  const editAllowed = props.enableEdit && sessionType !== "Developer";

  useEffect(() => {
    let request = "http://localhost:4000/chunk/by_project/" + props.id;
    if (sessionType === "Developer")
      request += "/by_dev/" + ReactSession.get("email");
    Axios.get(request).then((res) => setChunks(res.data));
  }, []);

  const [showChangeDev, setShowChangeDev] = useState(false);
  const handleShowChangeDev = (id) => () => {
    setIdChunk(id);
    setShowChangeDev(true);
  };
  const handleCloseChangeDev = () => setShowChangeDev(false);

  return (
    <Container>
      <Accordion>
        {chunks.map((chunk, idx) => (
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey={chunk.id.toString()}>
              Entrega {idx + 1}:
              {chunk.state === true ? (
                    <div> Completada!</div>
                      ) : (
                        <div>Incompleta</div>
                      )}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={chunk.id.toString()}>
              <Card.Body>
                <h3>Información entrega</h3>
                <ListGroup>
                  {sessionType !== "Developer" ? (
                    <ListGroup.Item>
                      <b>Email Desarrollador</b>: {chunk.emailDev}{" "}
                      {editAllowed ? (
                        <ButtonGroup style={{ float: "right" }}>
                          <Button
                            action
                            onClick={handleShowChangeDev(chunk.id)}
                          >
                            Reasignar
                          </Button>
                        </ButtonGroup>
                      ) : (
                        <></>
                      )}
                    </ListGroup.Item>
                  ) : (
                    <></>
                  )}
                  <ListGroup.Item>
                    <b>Fecha Inicio</b>: {chunk.startingDate}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <b>Fecha Límite</b>: {chunk.deadline}{" "}
                  </ListGroup.Item>
                </ListGroup>
                <br />
                <FunctionalRequirementList id={chunk.id} />
                <ChunkComments id={chunk.id} />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
      {editAllowed ? (
        <Button action href={"/manage/add_chunk/" + props.id}>
          Agregar Entrega
        </Button>
      ) : (
        <></>
      )}
      <Modal show={showChangeDev} onHide={handleCloseChangeDev}>
        <Modal.Header closeButton>
          <Modal.Title>Cambiar Desarrollador</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ChangeDev idChunk={idChunk} />
        </Modal.Body>
      </Modal>
      <br></br>
    </Container>
  );
}

export default ProjectChunksClient;