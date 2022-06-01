import React from "react";
import { Route } from "react-router-dom";
import Appeal from "./components/Appeal/Appeal";

import "./reset.css";
import "./common.css";

function App() {
  return (
    <div className="app">
    {/* <Route exact path="/"> */}
        <Appeal />
    {/* </Route> */}
      {/* <Route exact path="/status">
        <Appeal />
      </Route> */}
    </div>
  );
}

export default App;
