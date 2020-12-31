import Axios from "axios";
import React, { useState, useEffect } from "react";
import {Form, Button, Container} from "react-bootstrap";
import { Link,useHistory} from "react-router-dom";
import {ReactSession} from 'react-client-session';

function Login(props) {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const handleEmail = (e) => setEmail(e.target.value);
    const handlePass = (e) => setPass(e.target.value);

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:4000/auth/login", {
            email: email,
            pass: pass,
        });
        ReactSession.set("logged", "yes");
        ReactSession.set("email", email);
        history.push("/home");
      };

      ReactSession.remove("logged");
      ReactSession.remove("username");
      ReactSession.remove("type");
      ReactSession.remove("email");

  return (
    <Container>
    <form onSubmit={handleSubmit}>
        <h1> Login </h1>

        <hr class="my-3"></hr>
        
        <label>
          Email:
        <Form.Group controlId="email">
          <Form.Control
            onChange={handleEmail}
            type="email"
            placeholder="Ingrese su direccion de mail"
            required
          />
        </Form.Group>
        </label>

        <label>
        Contrasena:
        <Form.Group controlId="pass">
          <Form.Control
            onChange={handlePass}
            type="password"
            placeholder="Ingrese su contrasena"
            required
          />
        </Form.Group>
        </label>

        <button type="submit">
          Login
        </button>

        <p style={{color:"white"}}>Aún no tiene cuenta? <a href="/register">Crear Cuenta</a></p>
      </form>
      </Container>
  );
}

export default Login;