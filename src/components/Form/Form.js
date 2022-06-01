import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// import { useSelector } from "react-redux";
import "./Form.css";

function Form() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="form-wrapper">
      <form className="register-form">
        {/* Uncomment the next line to show the success message */}
        {/* <div className="success-message">Success! Thank you for registering</div> */}
        <label>Ad</label>
        <input
          id="first-name"
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        {/* Uncomment the next line to show the error message */}
        {/* <span id="first-name-error">Please enter a first name</span> */}
        <label>Soyad</label>
        <input
          id="last-name"
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        {/* Uncomment the next line to show the error message */}
        {/* <span id="last-name-error">Please enter a last name</span> */}
        <label>E-mail</label>
        <input
          id="email"
          className="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        <label>Fakültə</label>
        <input
          id="faculty"
          className="form-field"
          type="text"
          placeholder="ITIF"
          name="faculty"
        />
        <label>Qrup</label>
        <input
          id="group"
          className="form-field"
          type="text"
          placeholder="604.19E"
          name="group"
        />
        <label>İxtisas</label>
        <input
          id="specialty"
          className="form-field"
          type="text"
          placeholder="Computer Science"
          name="specialty"
        />
        <label>Qəbul ili</label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          showYearPicker
          dateFormat="yyyy"
          yearItemNumber={6}
          className="form-field"
          id="year"
        />
        <label>Telefon *</label>
        <input
          id="phone"
          className="form-field"
          type="tel"
          placeholder="+994() xxx-xx-xx"
          name="phone"
        />
        <label>Ərizə növləri</label>
        <select
          className="form-field rst_select  invalid"
          required="true"
          onchange="changeField(this);"
          name="types"
          id="types"
          aria-invalid="true"
        >
          <option></option>
          <option value="Təhsil alması barədə arayış">
            Təhsil alması barədə arayış
          </option>
          <option value="Təhsil haqqı barədə arayış">
            Təhsil haqqı barədə arayış
          </option>
          <option value="Akademik transkript alınması">
            Akademik transkript alınması
          </option>
          <option value="Attestatın və ya ona bərabər olan təhsil sənədinin surətinin alınması">
            Attestatın və ya ona bərabər olan təhsil sənədinin surətinin
            alınması
          </option>
          <option value="Əmrlərdən çıxarışların verilməsi">
            Əmrlərdən çıxarışların verilməsi
          </option>
          <option value="Hərbi xidmətlə bağlı arayış">
            Hərbi xidmətlə bağlı arayış
          </option>
          <option value="Qiyabi təhsil alanlar üçün - Arayış-çağırış">
            Qiyabi təhsil alanlar üçün - Arayış-çağırış
          </option>
          <option value="Məzun arayışının verilməsi">
            Məzun arayışının verilməsi
          </option>
          <option value="YDA-dan keçmək haqqında">
            YDA-dan keçmək haqqında
          </option>
          <option value="Əməkdaşları üçün iş yeri barədə arayış">
            Əməkdaşları üçün iş yeri barədə arayış
          </option>
        </select>{" "}
        <label>Qeydləriniz</label>
        <textarea
          // className="form-field"
          name="message"
          id="message"
          cols="80"
          rows="12"
          aria-invalid="false"
        ></textarea>
        {/* Uncomment the next line to show the error message */}
        {/* <span id="email-error">Please enter an email address</span> */}
        <button className="form-field btn" type="submit">
          Göndər
        </button>
      </form>
    </div>
  );
}

export default Form;
