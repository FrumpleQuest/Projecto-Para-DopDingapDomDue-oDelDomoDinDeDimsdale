import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Axios from 'axios';

// Estas son para las rutas que usamos
import Home from "./Home.js";
import Forum from "./forum/Forum.js";
import Reply from "./forum/Reply.js";
import Project from "./Project";
import ProjectDev from "./ProjectDev.js";
import ProjectCli from "./ProjectClient.js";
import ProjectInfo from "./ProjectInfo.js";
import ProjectInfoCli from "./ProjectInfoCli.js";
import Profile from "./Profile.js";
import AddChunk from "./manage_projects/AddChunk";
import ManageProjects from "./manage_projects/ManageProjects.js";
import UpdateProfile from "./UpdateProfile";
import CreateProject from "./CreateProject.js";
import Evaluation from "./evaluation/EvaluationDropDown.js";
import DevEval from "./evaluation/DeveloperProfile.js";
import Test from "./Test.js";

import EditProject from "./EditProject.js";
import TopicNew from "./forum/TopicNew.js";
import Login from "./Login.js";
import UserRegister from "./UserRegister.js";
import {ReactSession} from 'react-client-session';

import {Switch, BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  // state = {
  //   loading: true
  // }

  // componentDidMount() {
  //   Axios.get('http://localhost:4000/data/' + ReactSession.get("email")).then(res => {
  //     const User = res.data;
  //     ReactSession.set("type", User.type);
  //     ReactSession.set("username", User.name);
  //     const el = document.querySelector(".loader-container");
  //     el.remove();
  //     this.setState({ loading: false});
  
  // });
  // }

  render(){
    ReactSession.setStoreType("localStorage");

    // if(this.state.loading){
    //   return null;
    // }

  
  return (
    <Router>
      <Switch>
      <Route path="/test">
          <Test />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/register">
          <UserRegister />
        </Route>
        <Route path="/developer/:id">
          <DevEval />
        </Route>
        <Route path="/reply/:id">
          <Reply />
        </Route>
        <Route path="/forum">
          <Forum />
        </Route>
        <Route path="/topic/new">
          <TopicNew />
        </Route>
        <Route path="/proyecto/edit/:id">
          <EditProject />
        </Route>
        <Route path="/proyectodev/:id">
          <ProjectDev />
        </Route>
        <Route path="/proyectocli/:id">
          <ProjectCli />
        </Route>
        <Route path="/proyecto/:id">
          <Project />
        </Route>
        <Route path="/proyectoinfocli">
          <ProjectInfoCli />
        </Route>
        <Route path="/proyecto">
          <ProjectInfo />
        </Route>
        <Route path="/perfil/actualizar">
          <UpdateProfile />
        </Route>
        <Route path="/perfil">
          <Profile />
        </Route>
        <Route path="/manage/add_chunk/:idProject">
          <AddChunk />
        </Route>
        <Route path="/manage/new">
          <CreateProject />
        </Route>
        <Route path="/manage">
          <ManageProjects />
        </Route>
        <Route path="/evaluation">
          <Evaluation />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  )}
}

export default App;
