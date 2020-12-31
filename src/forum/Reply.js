import React, { useState, useEffect } from "react";
import { Card, ListGroup, Container, Col, Row, Button, Jumbotron } from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router-dom";
import CreateReply from "./CreateReply";

import NavBarSelector from "../navbar/NavBarSelector.js";

function Reply(props) {
  const { id } = useParams();
  //Bloque de búsqueda de las replies
  const [replies, setReplies] = useState([]);
  const [createReply, setCreateReply] = useState(false);
  useEffect(() => {
    axios.get("http://localhost:4000/reply/" + id).then((res) => {
      const data = res.data;
      setReplies(data);
    });
  }, []);
  //Bloque de búsqueda del topic que se esta viendo
  const [topic, setTopic] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/topic/cat/" + id).then((res2) => {
      const data2 = res2.data;
      setTopic(data2);
    });
  }, []);
  return (
    <div> 
    {NavBarSelector()}
    
    <Container>
    <Jumbotron style={{backgroundColor: 'white', opacity: '1'}}>
      
      <Row>
        <Col>
          <h4 class="text-black">{topic.title}</h4>
          <h>{topic.creatorName}</h> 
          <hr class="my-2"></hr>
          <text>{topic.body}</text>
          {/* <Card>
            <Card.Body> {topic.body} </Card.Body>
          </Card> */}
          </Col>
      </Row>
      </Jumbotron>
      </Container>

      <Container>
      <h5>Replies</h5>
      <Jumbotron style={{backgroundColor: 'white', opacity: '1'}}>

      <ListGroup>
        {replies.map((r) => (
          <ListGroup.Item>
            <h>{r.creatorName}</h>
            <hr class="my-1"></hr>
            <text>{r.body}</text>
          </ListGroup.Item>
        ))}
      </ListGroup>

     </Jumbotron>
     {createReply ? (
        <CreateReply
          idTopic={id}
          idCreator={1}
        /> /*id Creador hardcodeada de momento*/
      ) : (
        <Button
          onClick={() => {
            setCreateReply(true);
          }}
        >
          Crear nueva Reply
        </Button>
      )} 
    </Container>
    </div>
  );
}
export default Reply;
