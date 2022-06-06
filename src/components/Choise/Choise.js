import React from "react";
// import { useSelector } from "react-redux";
import "./Choise.css";

function Choise(props) {
  return (
    <div className="inner">
      <ul className="nav menu">
        <li
          // className="item-156 current active"
          className={props.statusClicked ? "current" : "current active"}
          data-menuanchor="/"
          onClick={props.appealClicked}
        >
          <p className="choise">Ərİzə</p>
        </li>
        <li
          // className="item-158"
          className={props.appealClicked ? "current" : "current active"}
          data-menuanchor="/"
          onClick={props.statusClicked}
        >
          <p className="choise">Status</p>
        </li>
      </ul>
    </div>
  );
}

export default Choise;
