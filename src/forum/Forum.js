import { ListGroup, Container, Row, Col, Badge  } from "react-bootstrap";
import React, {useState, useEffect} from 'react';
import axios from "axios";
import NavBarSelector from "../navbar/NavBarSelector.js";

function colores(props) {
  if (props == "Update") return "success";
  if (props == "Request") return "warning";
  if (props == "Discussion") return "info";
  if (props == "Alert") return "danger";
}

function Forum(props) {
  const [alertas, setAlertas] = useState([]);
  const [discusion, setDiscussion] = useState([]);
  const [updat, setUpdate] = useState([]);
  const [reque, setRequest] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/topic/" + "Update")
      .then(res => {
        const data = res.data;
        setUpdate(data); 
      });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:4000/topic/" + "Discussion")
      .then(res => {
        const data = res.data;
        setDiscussion(data); 
      });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:4000/topic/" + "Request")
      .then(res => {
        const data = res.data;
        setRequest(data); 
      });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:4000/topic/" + "Alert")
      .then(res => {
        const data = res.data;
        setAlertas(data); 
      });
  }, []);

  return (
    
    <div>

    {NavBarSelector()}

    <hr class="my-3"></hr>
    <h2 class="display-4">Foro</h2>
    <div class="text-left">
        <a
          type="button"
          class="btn btn-primary pull-left"
          href="/topic/new"
        >
          Crear nuevo Tema
        </a>
      </div>
    
   <Container> 
      
      <Row>
        <Col>
        <h1 class="text-white"> Alertas </h1>
        <hr class="my-2"></hr>
        </Col>
      </Row>
    <ListGroup defaultActiveKey="http://localhost:3000/">
      {alertas.map((topic) => <ListGroup.Item className="d-flex justify-content-between align-items-center" variant={colores(topic.category)} action href={"./reply/" + topic.id}>{topic.creatorType} | {topic.creatorName}: {topic.title} <Badge pill>{topic.creationDate}</Badge> </ListGroup.Item> )}
    </ListGroup>
    </Container>
    <hr class="my-3"></hr>

    <Container> 
      
      <Row>
        <Col>
        <h1 class="text-white"> Discusiones </h1>
        <hr class="my-2"></hr>
        </Col>
      </Row>
    <ListGroup defaultActiveKey="http://localhost:3000/">
      {discusion.map((topic) => <ListGroup.Item className="d-flex justify-content-between align-items-center" variant={colores(topic.category)} action href={"./reply/" + topic.id}>{topic.creatorType} | {topic.creatorName}: {topic.title} <Badge pill>{topic.creationDate}</Badge> </ListGroup.Item> )}
    </ListGroup>
    </Container>
    <hr class="my-3"></hr>

    <Container> 
      
      <Row>
        <Col>
        <h1 class="text-white"> Requests </h1>
        <hr class="my-2"></hr>
        </Col>
      </Row>
    <ListGroup defaultActiveKey="http://localhost:3000/">
      {reque.map((topic) => <ListGroup.Item className="d-flex justify-content-between align-items-center" variant={colores(topic.category)} action href={"./reply/" + topic.id}>{topic.creatorType} | {topic.creatorName}: {topic.title} <Badge pill>{topic.creationDate}</Badge> </ListGroup.Item> )}
    </ListGroup>
    </Container>
    <hr class="my-3"></hr>

    <Container> 
      
      <Row>
        <Col>
        <h1 class="text-white"> Actualizaciones </h1>
        <hr class="my-2"></hr>
        </Col>
      </Row>
    <ListGroup defaultActiveKey="http://localhost:3000/">
      {updat.map((topic) => <ListGroup.Item className="d-flex justify-content-between align-items-center" variant={colores(topic.category)} action href={"./reply/" + topic.id}>{topic.creatorType} | {topic.creatorName}: {topic.title} <Badge pill>{topic.creationDate}</Badge> </ListGroup.Item> )}
    </ListGroup>
    </Container>
    </div>
  
  );
}

export default Forum;