import React from "react";
import "./Header.css";

function Header() {
  return (
    <div div className="header-page">
      <div className="header-page__logo">
        <img
          src={"../../../public/Assets/Images/Logo.png"}
          alt="CompanyLogo"
        />
      </div>
      <div className="header-page-navbar">
        <ul className="header-page-navbar__ul">
          <li>Личный кабинет</li>
          <li>Отчетность</li>
          <li>Вашпрайс</li>
          <li>Эдо с физическими лицами</li>
          <li>Еще сервисы</li>
          <li className="circle-navbarLi">Легкая версия</li>
          <li>
            Джамиль Зяка Рена
            <br />
            АДНСУ форевер
          </li>
        </ul>
      </div>
      <div className="header-page__utilities">
          <img src="../../public/Assets/Images/Alar for header.png"/>
      </div>
    </div>
  );
}

export default Header;
