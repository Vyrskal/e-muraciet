import React from "react";
// import { useSelector } from "react-redux";
import "./Choise.css";

function Choise(props) {
  return (
    <div className="inner">
      <ul className="nav menu">
        <li
          className="item-156 current active"
          data-menuanchor="/"
          onClick={props.appealClicked}
        >
          <p>Ərİzə</p>
        </li>
        <li
          className="item-158"
          data-menuanchor="/"
          onClick={props.statusClicked}
        >
          <p>Status</p>
        </li>
      </ul>
    </div>
  );
}

export default Choise;
