import React from "react";
import "./FirstPage.css";
import Header from "../../components/Header/Header";
import Authorization from "../../components/Authorization/Authorization";
import MainForm from "../../components/MainForm/MainForm";

function FirstPage() {
  return (
    <div className="page">
      <Authorization />
      <Header />
      <MainForm />
    </div>
  );
}

export default FirstPage;
