
import React from 'react';
import {ReactSession} from 'react-client-session';

import Nb from "./NavBar.js";
import NbC from "./NavBarClient.js";
import NbM from "./NavBarManager.js";
import NbA from "./NavBarAdmin.js";

function NavBarSelector(){
    if (ReactSession.get("type") === "Client"){
       return <NbC></NbC>
    }
    else if (ReactSession.get("type") === "Developer"){
        return <Nb></Nb>
    }
    else if (ReactSession.get("type") === "ProjectManager"){
        return <NbM></NbM>
    }
    else if (ReactSession.get("type") === "Administrator"){
        return <NbA></NbA>
    }
}
export default NavBarSelector;

