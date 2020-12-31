import Axios from "axios";
import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";

import NavBarSelector from "../navbar/NavBarSelector.js";

function AddChunk(props) {
  let history = useHistory();

  const { idProject } = useParams();
  const [emailDev, setEmailDev] = useState("");
  const [startingDate, setStartingDate] = useState(
    new Date().toISOString().slice(0, 10)
  );
  const [deadline, setDeadline] = useState("");
  const [funcReqs, setFuncReqs] = useState([
    { title: "", description: "", difficulty: 0, cost: 0 },
  ]);

  const handleEmailDev = (e) => setEmailDev(e.target.value);
  const handleStartingDate = (e) => setStartingDate(e.target.value);
  const handleDeadline = (e) => setDeadline(e.target.value);

  const handleFuncReqTitleChange = (i) => (e) => {
    const newFuncReqs = funcReqs.map((fr, j) => {
      if (j !== i) return fr;
      return { ...fr, title: e.target.value };
    });

    setFuncReqs(newFuncReqs);
  };

  const handleFuncReqDescChange = (i) => (e) => {
    const newFuncReqs = funcReqs.map((fr, j) => {
      if (j !== i) return fr;
      return { ...fr, description: e.target.value };
    });

    setFuncReqs(newFuncReqs);
  };

  const handleFuncReqDiffChange = (i) => (e) => {
    const newFuncReqs = funcReqs.map((fr, j) => {
      if (j !== i) return fr;
      return { ...fr, difficulty: e.target.value };
    });

    setFuncReqs(newFuncReqs);
  };

  const handleFuncReqCostChange = (i) => (e) => {
    const newFuncReqs = funcReqs.map((fr, j) => {
      if (j !== i) return fr;
      return { ...fr, cost: e.target.value };
    });

    setFuncReqs(newFuncReqs);
  };

  const handleAddFuncReq = () => {
    setFuncReqs(funcReqs.concat([{ title: "", description: "" }]));
  };

  const handleRemoveFuncReq = (i) => () => {
    setFuncReqs(funcReqs.filter((fr, j) => j !== i));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newChunk = {
      idProject: idProject,
      emailDev: emailDev,
      startingDate: startingDate,
      deadline: deadline,
      funcReqs: funcReqs,
    };
    Axios.post("http://localhost:4000/chunk/create", newChunk).then((res) =>
      console.log(res.data)
    );
    history.push("/manage");
  };

  return (
    <>
      {NavBarSelector()}
      <Container>
        <Form>
          <Form.Group controlId="idDev">
            <Form.Label>Email Desarrollador</Form.Label>
            <Form.Control type="text" onChange={handleEmailDev} />
          </Form.Group>
          <Form.Group controlId="startingDate">
            <Form.Label>Fecha Inicio</Form.Label>
            <Form.Control
              type="date"
              defaultValue={startingDate}
              onChange={handleStartingDate}
            />
          </Form.Group>
          <Form.Group controlId="deadline">
            <Form.Label>Fecha Límite</Form.Label>
            <Form.Control type="date" onChange={handleDeadline} />
          </Form.Group>
          <Form.Group controlId="funcReqs">
            {funcReqs.map((fr, i) => (
              <Form.Group controlId={"funcReq" + i}>
                <Form.Label>Requerimiento Funcional {i + 1}</Form.Label>
                <Button
                  style={{ float: "right" }}
                  className="small"
                  onClick={handleRemoveFuncReq(i)}
                >
                  -
                </Button>
                <Form.Group controlId={"funcReqTitle" + i}>
                  <Form.Label>Título</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={handleFuncReqTitleChange(i)}
                  />
                </Form.Group>

                <Form.Group controlId={"funcReqDesc" + i}>
                  <Form.Label>Descripción</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={handleFuncReqDescChange(i)}
                  />
                </Form.Group>

                <Form.Group controlId={"funcReqDiff" + i}>
                  <Form.Label>Dificultad</Form.Label>
                  <Form.Control
                    type="number"
                    onChange={handleFuncReqDiffChange(i)}
                  />
                </Form.Group>
                <Form.Group controlId={"funcReqCost" + i}>
                  <Form.Label>Costo</Form.Label>
                  <Form.Control
                    type="number"
                    onChange={handleFuncReqCostChange(i)}
                  />
                </Form.Group>
              </Form.Group>
            ))}
            <Form.Group controlId="addFuncReq">
              <Button onClick={handleAddFuncReq}>Agregar RF</Button>
            </Form.Group>
          </Form.Group>
          <Button type="submit" onClick={handleSubmit}>
            Crear Entrega
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default AddChunk;
