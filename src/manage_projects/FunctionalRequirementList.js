import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";

function FunctionalRequirementList(props) {
  const [frs, setFrs] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:4000/fr/by_chunk/" + props.id).then((res) =>
      setFrs(res.data)
    );
  }, []);
  return (
<Container fluid>
     
      <Row>
        <Col>
          <h4>Requerimientos Funcionales</h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table striped bordered responsive>
            <thead>
              <tr>
                <th>Titulo</th>
                <th>Descripción</th>
                <th>Costo </th>
                <th>Dificultad</th>
              </tr>
            </thead>
            <tbody>
              {frs.map((fr) => (
                <tr>
                  <td>{fr.title}</td>
                  <td>{fr.description}</td>
                  <td class= "text-center">{fr.cost}</td>
                  <td class= "text-center">{fr.difficulty}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default FunctionalRequirementList;
