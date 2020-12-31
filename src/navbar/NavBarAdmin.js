
import { Container, Navbar, Nav, Jumbotron, NavDropdown } from "react-bootstrap";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import React from 'react';

function NbC(){
    return (
<div className="App">
                <Navbar className="navbar navbar-dark" style={{backgroundColor:" #0f0f0fea"}}>
                    <Navbar.Brand href="/home">
                        Administrator View
                    </Navbar.Brand>
          
                    <Nav className="mr-auto">

                        {/* <Nav.Link as={Link} to="/proyecto">
                        Información Proyecto
                        </Nav.Link> */}

                        <Nav.Link as={Link} to="/forum">
                            Foro
                        </Nav.Link>

                        <NavDropdown title="Proyectos" id="collapsible-nav-dropdown">

                            <NavDropdown.Item as={Link} to="/proyecto">Informacion proyectos</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/manage">Editar Proyectos</NavDropdown.Item>

                        </NavDropdown>

                        {/* <Nav.Link as={Link} to="/manage">
                        | Editar Proyectos
                        </Nav.Link> */}

                        <Nav.Link as={Link} to="/evaluation">
                            Evaluación de Freelancers
                        </Nav.Link>
                    </Nav>

                    <Nav>

                        <Nav.Link as={Link} to="/perfil" >
                            Profile   
                        </Nav.Link>

                        <Nav.Link as={Link} to="/login" >
                            Log Out
                        </Nav.Link>

                    </Nav>
                </Navbar>
            </div>
    )
}



export default NbC;