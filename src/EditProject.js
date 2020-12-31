import Axios from "axios";
import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import NavBarSelector from "./navbar/NavBarSelector.js";

function EditProject(props) {
  const {id} = useParams();  
  const [project, setProject] = useState({});
  const [clientEmail, setClient] = useState("");
  const [managerEmail, setPM] = useState("");
  const [startingDate, setStart] = useState("");
  const [deadline, setDeadline] = useState("");
  const [description, setDescription] = useState("");


  useEffect(() => {
    Axios.get("http://localhost:4000/project/" + id).then((res) =>
      setProject(res.data)
    );
  }, []);

  useEffect(() => {
    setClient(project.clientEmail);  
    setPM(project.managerEmail);
    setStart(project.startingDate);
    setDeadline(project.deadline);
    setDescription(project.description);
  }, [project]);

  const handlePM = (e) => setPM(e.target.value);
  const handleDeadline = (e) => setDeadline(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);


  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:4000/project/edit", {
      id: id,
      clientEmail : clientEmail,
      managerEmail : managerEmail,
      startingDate: startingDate,
      deadline: deadline,
      description: description,  
    });
    history.push("/proyecto");
  };

  return (
    <div> 
{NavBarSelector()}
    
    <Container>
      
      <Form>

        <Form.Group controlId="managerEmail">
          <Form.Label>Jefe de Proyecto</Form.Label>
          <Form.Control
            value={managerEmail}
            onChange={handlePM}
            type="text"
            placeholder={managerEmail}
          />
        </Form.Group>

        <Form.Group controlId="deadline">
          <Form.Label>Fecha de entrega</Form.Label>
          <Form.Control
            value={deadline}
            onChange={handleDeadline}
            type="text"
            placeholder="YYYY-MM-DD"
          />
        </Form.Group>

        <Form.Group controlId="description">
          <Form.Label>Descripcion de proyecto</Form.Label>
          <Form.Control
            value={description}
            onChange={handleDescription}
            type="text"
            placeholder="Ingrese descripcion del proyecto"
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </Container>
    </div>
  );
}

export default EditProject;