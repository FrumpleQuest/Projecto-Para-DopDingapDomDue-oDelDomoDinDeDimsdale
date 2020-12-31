import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Nav, Row, Tab, Jumbotron, Button } from "react-bootstrap";

import ProjectChunks from "./ProjectChunks";
import NavBarSelector from "../navbar/NavBarSelector.js";

function ManageProjects(props) {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    Axios.get(
      "http://localhost:4000/project/by_pm/Beroiza@perestroika.cl"
    ).then((res) => setProjects(res.data));
  }, []);

  return (
    <div>
      {NavBarSelector()}

      <Tab.Container>
        <Row>
          <Col sm={3}>
            <Jumbotron
              style={{
                backgroundColor: "#272e2e9a",
                opacity: "0.8",
                width: "80%",
                margin: "inherit",
                marginTop: "5%",
              }}
            >
              <h2 className="display-6">Proyectos</h2>
              <hr className="my-3"></hr>

              <Nav
                fill
                variant="pills"
                className="flex-column"
                style={{
                  backgroundColor: "#272e2ece",
                  borderRadius: "5px",
                  justifyItems: "true",
                }}
              >
                {projects.map((project) => (
                  <Nav.Item>
                    <Nav.Link eventKey={project.id.toString()}>
                      <b>Proyecto {project.id}</b>
                    </Nav.Link>
                  </Nav.Item>
                ))}
                <br></br>
                <Button variant="info" action href="/manage/new">
                  Crear Proyecto
                </Button>
              </Nav>
            </Jumbotron>
          </Col>

          <Col sm={9}>
            <Tab.Content>
              {projects.map((project) => (
                <Tab.Pane
                  eventKey={project.id.toString()}
                  style={{ marginRight: "30%" }}
                >
                  <ProjectChunks id={project.id} enableEdit={true} />
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

export default ManageProjects;
