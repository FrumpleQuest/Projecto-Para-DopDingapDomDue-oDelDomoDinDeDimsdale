import axios from "axios";
import React, { useState, useEffect } from "react";
import { Dropdown, Container, Row, Col } from "react-bootstrap";
import { ReactSession } from "react-client-session";

import NavBarSelector from "./navbar/NavBarSelector.js";

// Esto de momento es muy minimo, en el futuro buscará y mostrará por pantalla la
// información relevante a los proyectos que están en desarrollo

function ProjectInfo(props) {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    let request = "http://localhost:4000/project/";
    switch (ReactSession.get("type")) {
      case "Developer":
        request += "by_dev/by_email/" + ReactSession.get("email");
        break;
      case "Client":
        request += "by_client/" + ReactSession.get("email");
        break;
      case "ProjectManager":
        request += "by_pm/" + ReactSession.get("email");
        break;
      default:
        request += "all";
        break;
    }

    axios.get(request).then((res) => setProjects(res.data));
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
                  <Dropdown.Item href={"/proyecto/" + project.id}>
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

export default ProjectInfo;
