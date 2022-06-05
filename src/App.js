import React from "react";
import { Route, Routes } from "react-router-dom";
import Appeal from "./components/Appeal/Appeal";
import LoginButton from "./components/LoginButton/LoginButton";
import LogoutButton from "./components/LogoutButton/LogoutButton";
import mongoose from "mongoose";
import "./reset.css";
import "./common.css";
const keys = require("./config/keys");


function App() {
 
  return (
    <div className="app">
      <Routes>
      <Route path="/" element={<LoginButton />} />
      <Route path="/login" element={<LoginButton />} />
      <Route path="/appeal" element={<Appeal />} />
      <Route path="/logout" element={<LogoutButton />} />
      </Routes>
    </div>
  );
}

export default App;
