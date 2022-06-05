import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-page">
        <div className="header-page__logo">
          <img src="./Images/WebLogo.png" alt="CompanyLogo" />
        </div>
        <div className="header-page-navbar">
          <ul className="header-page-navbar__ul">
            <li>MÜRACİƏT</li>
            <li>MÜRACİƏTLƏRİN STATUSU</li>
            <li>FAQ</li>
            <li>TƏLİMAT</li>
            <li>ƏRİZƏ NÜMUNƏLƏRİ</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
