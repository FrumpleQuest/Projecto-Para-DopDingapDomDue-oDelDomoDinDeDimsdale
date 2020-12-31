import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Nav, Row, Tab , Jumbotron} from "react-bootstrap";

import DevProf from "./DeveloperProfile.js";

import NavBarSelector from "../navbar/NavBarSelector.js";

function Evaluation(props) {

  const [devs, setDevs] = useState([]);
  useEffect(() => {
    Axios.get(
      "http://localhost:4000/developer/all"
    ).then((res) => setDevs(res.data));
  }, []); 


  return (
    <div>
    {NavBarSelector()}
    <Tab.Container>
      <Row>
        <Col sm={3}>
          <Jumbotron style={{backgroundColor:"#272e2e9a", opacity:"0.8", width:"80%", margin:"inherit", marginTop:"5%"}}>
            <h2 className="display-6">Developers</h2>
            <hr className="my-3"></hr>
            
          <Nav fill variant="pills" className="flex-column" style={{backgroundColor:"#272e2ece", borderRadius:"5px", justifyItems:"true"}}>
            {devs.map((dev) => (
              <Nav.Item>
                <Nav.Link eventKey={dev.id.toString()}>
                  <b> {dev.name}</b>
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
          
          </Jumbotron>
        </Col>


        <Col sm={9}>
          <Tab.Content>
            {devs.map((dev) => (
              <Tab.Pane eventKey={dev.id.toString()} style={{marginRight:"30%"}}>
                <DevProf email={dev.email} />
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>  
    </div>
  );
}
export default Evaluation;