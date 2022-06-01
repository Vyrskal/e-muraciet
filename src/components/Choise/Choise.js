import React from "react";
// import { useSelector } from "react-redux";
import "./Choise.css";

function Choise(props) {
  return (
    <div className="inner">
      <ul className="nav menu">
        <li className="item-156 current active" data-menuanchor="/">
          Ərİzə
        </li>
        <li className="item-158" data-menuanchor="/" onClick={props.clicked}>
          Status
        </li>
      </ul>
    </div>
  );
}

export default Choise;
