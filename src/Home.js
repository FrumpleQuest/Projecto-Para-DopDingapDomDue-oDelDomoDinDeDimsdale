import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";
import React, {useState, useEffect} from 'react';
import {ReactSession} from 'react-client-session';

import { Container, Navbar, Nav, Jumbotron, NavDropdown } from "react-bootstrap";
import { Link, Switch, BrowserRouter as Router, Route } from "react-router-dom";

import NavBarSelector from "./navbar/NavBarSelector.js";

function Home(){
const[isLoading, setLoading] = useState(true);

useEffect(() => {
    Axios.get('http://localhost:4000/data/' + ReactSession.get("email")).then(res => {
        const User = res.data;
        ReactSession.set("type", User.type);
        ReactSession.set("username", User.name);
        setLoading(!isLoading);
}
    );
}, []);

if(isLoading){
    return null;
}

    return(
        <div>
            {NavBarSelector()}
            <Container>
                <Jumbotron style={{backgroundColor: '#272e2e9a'}}>
                    <h1 class="display-4" style={{color:'white',opacity:'0.9'}}>Bienvenido {ReactSession.get("username")}!</h1>
                    <hr class="my-4"></hr>
                    <p class="lead" style={{color:'white'}}>
                        Bienvenidos al "home" de nuestro proyecto, esperamos que disfruten del tour por la pagina.
                    </p>
                </Jumbotron>
            </Container>


    </div>
        
      
    )
}

export default Home;