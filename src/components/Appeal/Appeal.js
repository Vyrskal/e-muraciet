import React from "react";
import Choise from "../Choise/Choise";
import Form from "../Form/Form";
// import { useSelector } from "react-redux";
import "./Appeal.css";

function Appeal() {
  return (
    <div className="wrapper">
      <div className="main">
        <div className="content">
          <p className="headings heading-1">Müracİət</p>
          <p className="headings heading-2">
            Müracİət yollamaq üçün aşağıdakı formanı doldurmağınız xahİş olunur
          </p>
          <p className="headings heading-3">Müracİət növünü seçİn</p>
        </div>
        <Choise />
        <Form />
      </div>
    </div>
  );
}

export default Appeal;
