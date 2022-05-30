import React from "react";
import { Route } from "react-router-dom";
import Appeal from "./components/Appeal/Appeal";

import "./reset.css";
import "./common.css";

function App() {
  return (
    <div className="app">
      <Appeal />
      {/* <Route exact path="/">
        <Appeal />
      </Route>
      <Route path="/list/:id">
        < />
        </Route> */}
    </div>
  );
}

export default App;
