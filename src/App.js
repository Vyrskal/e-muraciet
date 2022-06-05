import React from "react";
import { Route } from "react-router-dom";
import FirstPage from "./pages/FirstPage/FirstPage";
import SecondPage from "./pages/SecondPage/SecondPage";

import "./reset.css";
import "./common.css";

function App() {
  return (
    <div className="app">
      {/* <Route exact path="/"> */}
        <FirstPage />
      {/* </Route> */}
      {/* <Route path="/list/:id">
        <SecondPage />
      </Route> */}
    </div>
  );
}

export default App;
