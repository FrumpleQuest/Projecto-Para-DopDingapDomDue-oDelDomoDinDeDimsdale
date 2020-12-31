import Axios from "axios";
import React, { useState, useEffect } from "react";
import {Form, Button, Container} from "react-bootstrap";
import { Link,useHistory} from "react-router-dom";

import NavBarSelector from "./navbar/NavBarSelector.js";

// Esto de momento es muy minimo, en el futuro buscará y mostrará por pantalla la
// información relevante a los proyectos que están en desarrollo

function UserRegister(props) {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [name, setName] = useState("");
    const [type, setType] = useState("");

    const handleEmail = (e) => setEmail(e.target.value);
    const handlePass = (e) => setPass(e.target.value);
    const handleName = (e) => setName(e.target.value);
    const handleType = (e) => setType(e.target.value);

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:4000/auth/register", {
            name: name,
            email: email,
            type: type,
            pass: pass,

        });
        history.push("/");
      };


  return (
    <div>

    
    <Container>
      
        <form onSubmit={handleSubmit}>
          <h1> Register </h1>

          <hr class="my-3"></hr>

        <Form.Group controlId="Name">
          <label>Ingrese su Nombre</label>
          <Form.Control
            onChange={handleName}
            type="text"
          />
        </Form.Group>

        <Form.Group controlId="Email">
          <label>Ingrese su Correo Electrónico</label>
          <Form.Control
            onChange={handleEmail}
            type="email"
          />
        </Form.Group>

        <Form.Group controlId="Pass">
          <label>Ingrese su Contraseña</label>
          <Form.Control
            onChange={handlePass}
            type="password"
          />
        </Form.Group>

        <Form.Group controlId="Type">
          <label>Ingrese un tipo de cuenta</label>
          <Form.Control
            onChange={handleType}
            type="text"
          />
        </Form.Group>        

        <button type="submit">
          Create User
        </button>
      </form>
    </Container>
    </div>
  );
}

export default UserRegister;