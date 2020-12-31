
import { Container, Navbar, Nav, Jumbotron, NavDropdown } from "react-bootstrap";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import React from 'react';

function NbC(){
    return (
<div className="App">
                <Navbar className="navbar navbar-dark" style={{backgroundColor:" #0f0f0fea"}}>
                    <Navbar.Brand href="/home">
                        Client View
                    </Navbar.Brand>
          
                    <Nav className="mr-auto">

                        <Nav.Link as={Link} to="/forum">
                            Foro
                        </Nav.Link>

                        <Nav.Link as={Link} to="/proyectoinfocli">
                            Información del Proyecto
                        </Nav.Link>
                    </Nav>

                    <Nav>

                        <Nav.Link as={Link} to="/login" >
                            Log Out
                        </Nav.Link>

                    </Nav>
                </Navbar>
            </div>
    )
}



export default NbC;