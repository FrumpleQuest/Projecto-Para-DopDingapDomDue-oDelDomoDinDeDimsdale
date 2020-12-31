import axios from "axios";
import React, { useState, useEffect } from "react";
import { Dropdown, Container, Row, Col} from "react-bootstrap";
import {ReactSession} from 'react-client-session';

import NavBarSelector from "./navbar/NavBarSelector.js";

function ProjectInfoCli(props) {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/project/by_client/" + ReactSession.get("email"))
      .then((res) => setProjects(res.data));
  }, []);
  return (
    <div>
    {NavBarSelector()}
    <Container>
      <Row>
        <Col>
          <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
              Selección de Proyecto
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {projects.map((project) => (
                <Dropdown.Item href={"/proyectocli/" + project.id}>
                  Proyecto {project.id}
                </Dropdown.Item>  
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default ProjectInfoCli;