import React from "react";
// import { useSelector } from "react-redux";
import "./Appeal.css";

function Appeal() {
  return (
    <div>
      <div class="content">
        <p class="heading-1">Müraciət</p>
        <p class="heading-2">
          Müraciət yollamaq üçün aşağıdakı formanı doldurmağınız xahİş olunur
        </p>
        <p class="heading-3">Müraciət növünü seçİn</p>
      </div>
      <ul class="nav">
        <li class="statement current active" data-menuanchor="/">
          <a href="/">Ərizə</a>
        </li>
        <li class="status" data-menuanchor="/">
          <a href="/">İrad və təkliflər/Status</a>
        </li>
      </ul>
      <form class="register-form">
        {/* Uncomment the next line to show the success message */}
        {/* <div class="success-message">Success! Thank you for registering</div> */}
        <input
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        {/* Uncomment the next line to show the error message */}
        {/* <span id="first-name-error">Please enter a first name</span> */}
        <input
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        {/* Uncomment the next line to show the error message */}
        {/* <span id="last-name-error">Please enter a last name</span> */}
        <input
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        {/* Uncomment the next line to show the error message */}
        {/* <span id="email-error">Please enter an email address</span> */}
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default Appeal;
