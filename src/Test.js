import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";
import React, {useState, useEffect} from 'react';
import {ReactSession} from 'react-client-session';

import { Container, Navbar, Nav, Jumbotron, NavDropdown } from "react-bootstrap";
import { Link, Switch, BrowserRouter as Router, Route } from "react-router-dom";

import NavBarSelector from "./navbar/NavBarSelector.js";



function Test(){

        return(
            <div>
                {NavBarSelector()}
                <Container>
                    <Jumbotron>
                    <input type="file" id="input" multiple></input>
                    </Jumbotron>
               
                </Container>
            </div>
            
          
        )
    }
    
    export default Test;