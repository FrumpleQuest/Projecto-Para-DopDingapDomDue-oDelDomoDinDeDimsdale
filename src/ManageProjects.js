import axios from "axios";
import React, { useState, useEffect } from "react";
import { Dropdown, Container, Row, Col} from "react-bootstrap";

import NavBarSelector from "./navbar/NavBarSelector.js";

//nuevo edit:
//Se intentara de agregar un form para ingresar proyectos
//Esta vista debe ser exclusiva para los jefes de proyectos

function ManageProjects(props) {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/project/by_dev/1")
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
                <Dropdown.Item href={"/proyecto/" + project.id}>
                  Proyecto {project.id}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
  <div class="text-right">
        <a type="button" variant="light" class="btn btn-primary pull-right" href="/manage/new">
          Crear nuevo proyecto
        </a>
      </div>
  </Container>
  </div>
  );
}

export default ManageProjects;
