import Axios from "axios";
import React from "react";
import { Button } from "react-bootstrap";
import { ReactSession } from "react-client-session";

// Probablemente deberia colocar un pop-up que confirme que quiere completar el
// chunk pero de momento esto deberia funcionar

function CompleteChunk(props) {
  const handleSubmit = () => {
    Axios.post("http://localhost:4000/chunk/update", {
      id: props.id,
      state: true,
    }).then((res) => console.log(res));
    //window.location.reload();
  };

  return ReactSession.get("type") === "Client" ? (
    <Button variant="success" onClick={handleSubmit}>
      Terminar entrega (esto no suena correcto pero no se ocurre)
    </Button>
  ) : (
    <></>
  );
}

export default CompleteChunk;
