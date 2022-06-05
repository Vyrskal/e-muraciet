import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Types from "../Types/Types";
import FileUpload from "../FileUpload/FileUpload";
// import { useSelector } from "react-redux";
import "./Form.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Auth0Lock } from "auth0-lock";

function Form() {
  // var lock = new Auth0Lock(
  //   "TP9wuAB5FKBhtXQ8mTCQGIvqvJ5qjp8Z",
  //   "dev-jb0qow8z.us.auth0.com"
  // );
  // var axios = require("axios").default;

  // var options = {
  //   method: "POST",
  //   url: "https://dev-jb0qow8z.us.auth0.com/oauth/token",
  //   headers: { "content-type": "application/x-www-form-urlencoded" },
  //   data: {
  //     grant_type: "client_credentials",
  //     client_id: "TP9wuAB5FKBhtXQ8mTCQGIvqvJ5qjp8Z",
  //     client_secret:
  //       "UQj2pnZFZAqjryvZjDahVdV9iz3pou3zl6YA4g4WOamO5fO_sOpMfJc_QRfusuZO",
  //     audience: "https://dev-jb0qow8z.us.auth0.com/api/v2/",
  //   },
  // };

  // useEffect(() => {
  //   fetch(
  //     "dev-jb0qow8z.us.auth0.com/api/v2/users/auth0|6298adc9e0ba2f006f6d5972",
  //     {
  //       headers: {
  //         Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Inc4MV9fNjd1QmFIS3VBaHZQUTZfSSJ9.eyJpc3MiOiJodHRwczovL2Rldi1qYjBxb3c4ei51cy5hdXRoMC5jb20vIiwic3ViIjoiaHRDTkVrMjJjaTc2QjlFbFI5c05qOURqaWRwUzdVZmpAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vZGV2LWpiMHFvdzh6LnVzLmF1dGgwLmNvbS9hcGkvdjIvIiwiaWF0IjoxNjU0MTc4NDU3LCJleHAiOjE2NTQyNjQ4NTcsImF6cCI6Imh0Q05FazIyY2k3NkI5RWxSOXNOajlEamlkcFM3VWZqIiwic2NvcGUiOiJyZWFkOmNsaWVudF9ncmFudHMgY3JlYXRlOmNsaWVudF9ncmFudHMgZGVsZXRlOmNsaWVudF9ncmFudHMgdXBkYXRlOmNsaWVudF9ncmFudHMgcmVhZDp1c2VycyB1cGRhdGU6dXNlcnMgZGVsZXRlOnVzZXJzIGNyZWF0ZTp1c2VycyByZWFkOnVzZXJzX2FwcF9tZXRhZGF0YSB1cGRhdGU6dXNlcnNfYXBwX21ldGFkYXRhIGRlbGV0ZTp1c2Vyc19hcHBfbWV0YWRhdGEgY3JlYXRlOnVzZXJzX2FwcF9tZXRhZGF0YSByZWFkOnVzZXJfY3VzdG9tX2Jsb2NrcyBjcmVhdGU6dXNlcl9jdXN0b21fYmxvY2tzIGRlbGV0ZTp1c2VyX2N1c3RvbV9ibG9ja3MgY3JlYXRlOnVzZXJfdGlja2V0cyByZWFkOmNsaWVudHMgdXBkYXRlOmNsaWVudHMgZGVsZXRlOmNsaWVudHMgY3JlYXRlOmNsaWVudHMgcmVhZDpjbGllbnRfa2V5cyB1cGRhdGU6Y2xpZW50X2tleXMgZGVsZXRlOmNsaWVudF9rZXlzIGNyZWF0ZTpjbGllbnRfa2V5cyByZWFkOmNvbm5lY3Rpb25zIHVwZGF0ZTpjb25uZWN0aW9ucyBkZWxldGU6Y29ubmVjdGlvbnMgY3JlYXRlOmNvbm5lY3Rpb25zIHJlYWQ6cmVzb3VyY2Vfc2VydmVycyB1cGRhdGU6cmVzb3VyY2Vfc2VydmVycyBkZWxldGU6cmVzb3VyY2Vfc2VydmVycyBjcmVhdGU6cmVzb3VyY2Vfc2VydmVycyByZWFkOmRldmljZV9jcmVkZW50aWFscyB1cGRhdGU6ZGV2aWNlX2NyZWRlbnRpYWxzIGRlbGV0ZTpkZXZpY2VfY3JlZGVudGlhbHMgY3JlYXRlOmRldmljZV9jcmVkZW50aWFscyByZWFkOnJ1bGVzIHVwZGF0ZTpydWxlcyBkZWxldGU6cnVsZXMgY3JlYXRlOnJ1bGVzIHJlYWQ6cnVsZXNfY29uZmlncyB1cGRhdGU6cnVsZXNfY29uZmlncyBkZWxldGU6cnVsZXNfY29uZmlncyByZWFkOmhvb2tzIHVwZGF0ZTpob29rcyBkZWxldGU6aG9va3MgY3JlYXRlOmhvb2tzIHJlYWQ6YWN0aW9ucyB1cGRhdGU6YWN0aW9ucyBkZWxldGU6YWN0aW9ucyBjcmVhdGU6YWN0aW9ucyByZWFkOmVtYWlsX3Byb3ZpZGVyIHVwZGF0ZTplbWFpbF9wcm92aWRlciBkZWxldGU6ZW1haWxfcHJvdmlkZXIgY3JlYXRlOmVtYWlsX3Byb3ZpZGVyIGJsYWNrbGlzdDp0b2tlbnMgcmVhZDpzdGF0cyByZWFkOmluc2lnaHRzIHJlYWQ6dGVuYW50X3NldHRpbmdzIHVwZGF0ZTp0ZW5hbnRfc2V0dGluZ3MgcmVhZDpsb2dzIHJlYWQ6bG9nc191c2VycyByZWFkOnNoaWVsZHMgY3JlYXRlOnNoaWVsZHMgdXBkYXRlOnNoaWVsZHMgZGVsZXRlOnNoaWVsZHMgcmVhZDphbm9tYWx5X2Jsb2NrcyBkZWxldGU6YW5vbWFseV9ibG9ja3MgdXBkYXRlOnRyaWdnZXJzIHJlYWQ6dHJpZ2dlcnMgcmVhZDpncmFudHMgZGVsZXRlOmdyYW50cyByZWFkOmd1YXJkaWFuX2ZhY3RvcnMgdXBkYXRlOmd1YXJkaWFuX2ZhY3RvcnMgcmVhZDpndWFyZGlhbl9lbnJvbGxtZW50cyBkZWxldGU6Z3VhcmRpYW5fZW5yb2xsbWVudHMgY3JlYXRlOmd1YXJkaWFuX2Vucm9sbG1lbnRfdGlja2V0cyByZWFkOnVzZXJfaWRwX3Rva2VucyBjcmVhdGU6cGFzc3dvcmRzX2NoZWNraW5nX2pvYiBkZWxldGU6cGFzc3dvcmRzX2NoZWNraW5nX2pvYiByZWFkOmN1c3RvbV9kb21haW5zIGRlbGV0ZTpjdXN0b21fZG9tYWlucyBjcmVhdGU6Y3VzdG9tX2RvbWFpbnMgdXBkYXRlOmN1c3RvbV9kb21haW5zIHJlYWQ6ZW1haWxfdGVtcGxhdGVzIGNyZWF0ZTplbWFpbF90ZW1wbGF0ZXMgdXBkYXRlOmVtYWlsX3RlbXBsYXRlcyByZWFkOm1mYV9wb2xpY2llcyB1cGRhdGU6bWZhX3BvbGljaWVzIHJlYWQ6cm9sZXMgY3JlYXRlOnJvbGVzIGRlbGV0ZTpyb2xlcyB1cGRhdGU6cm9sZXMgcmVhZDpwcm9tcHRzIHVwZGF0ZTpwcm9tcHRzIHJlYWQ6YnJhbmRpbmcgdXBkYXRlOmJyYW5kaW5nIGRlbGV0ZTpicmFuZGluZyByZWFkOmxvZ19zdHJlYW1zIGNyZWF0ZTpsb2dfc3RyZWFtcyBkZWxldGU6bG9nX3N0cmVhbXMgdXBkYXRlOmxvZ19zdHJlYW1zIGNyZWF0ZTpzaWduaW5nX2tleXMgcmVhZDpzaWduaW5nX2tleXMgdXBkYXRlOnNpZ25pbmdfa2V5cyByZWFkOmxpbWl0cyB1cGRhdGU6bGltaXRzIGNyZWF0ZTpyb2xlX21lbWJlcnMgcmVhZDpyb2xlX21lbWJlcnMgZGVsZXRlOnJvbGVfbWVtYmVycyByZWFkOmVudGl0bGVtZW50cyByZWFkOmF0dGFja19wcm90ZWN0aW9uIHVwZGF0ZTphdHRhY2tfcHJvdGVjdGlvbiByZWFkOm9yZ2FuaXphdGlvbnNfc3VtbWFyeSByZWFkOm9yZ2FuaXphdGlvbnMgdXBkYXRlOm9yZ2FuaXphdGlvbnMgY3JlYXRlOm9yZ2FuaXphdGlvbnMgZGVsZXRlOm9yZ2FuaXphdGlvbnMgY3JlYXRlOm9yZ2FuaXphdGlvbl9tZW1iZXJzIHJlYWQ6b3JnYW5pemF0aW9uX21lbWJlcnMgZGVsZXRlOm9yZ2FuaXphdGlvbl9tZW1iZXJzIGNyZWF0ZTpvcmdhbml6YXRpb25fY29ubmVjdGlvbnMgcmVhZDpvcmdhbml6YXRpb25fY29ubmVjdGlvbnMgdXBkYXRlOm9yZ2FuaXphdGlvbl9jb25uZWN0aW9ucyBkZWxldGU6b3JnYW5pemF0aW9uX2Nvbm5lY3Rpb25zIGNyZWF0ZTpvcmdhbml6YXRpb25fbWVtYmVyX3JvbGVzIHJlYWQ6b3JnYW5pemF0aW9uX21lbWJlcl9yb2xlcyBkZWxldGU6b3JnYW5pemF0aW9uX21lbWJlcl9yb2xlcyBjcmVhdGU6b3JnYW5pemF0aW9uX2ludml0YXRpb25zIHJlYWQ6b3JnYW5pemF0aW9uX2ludml0YXRpb25zIGRlbGV0ZTpvcmdhbml6YXRpb25faW52aXRhdGlvbnMiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.jLuKN6URlmfC3ZB95bBTAsGBWns4ggDTGtWXieX8-LU099DmFWxUw2Wb7oC98O4e9J19wc_vIuEw04vrV4q3aAdAQgeuPTwBoKzg0PvyijOc5cpQpEUOq7aHv0redanvDer_NqwZtizUrCe84getfe1Un-YVFsXgprzQAqAZpeQpMDJcnADCgizVItsuunDRsazXK8PSEQgaOpLy8ZVcntNT4VWe8HpGnNXDvin7XYnpdOAafnobFeXnkw5S740iSzUE6QytSU5Vg9i656iNU_Q2T7yw1o0flCQqB3FTHEj6PjTwT--BgSqlf2LC3qpzOEp_pqz0OaY97isNSWiZuA`,
  //         "X-Requested-With": "XMLHttpRequest",
  //       },
  //     }
  //   )
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);
  const user = useAuth0();
  console.log(user);
  // user.getAccessTokenSilently().then(data => { lock.getUserInfo(data, function(error, profile) {
  //   if (!error) {
  //    console.log( profile, 'profile');
  //   }
  // });  })
  const [startDate, setStartDate] = useState(new Date());

  const [info, setInfo] = useState({
    // firstName: user.user.given_name,
    // lastName:  user.user.family_name,
    // email: user.user.email,
    // phone: "+994 (51) 123-45-67",
    // faculty: "ITIF",
    // specialty: "Computer Science",
    // year: "2019",
    // group: "604.19E",
    // type: "",
    // id: user.user.sub
  });

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
    console.log(info);
  };

  const handleType = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
    console.log(info);
    return (
      <div>
        <Types />
      </div>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(info);
  };

  return (
    <div className="form-wrapper">
      <form className="register-form" onSubmit={handleSubmit}>
        {/* Uncomment the next line to show the success message */}
        {/* <div className="success-message">Success! Thank you for registering</div> */}
        <label>Ad</label>
        <input
          id="first-name"
          className="form-field"
          type="text"
          name="firstName"
          onChange={handleChange}
          value={info.firstName}
        />
        {/* <span id="first-name-error">Please enter a first name</span> */}
        <label>Soyad</label>
        <input
          id="last-name"
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={info.lastName}
          onChange={handleChange}
        />
        {/* <span id="last-name-error">Please enter a last name</span> */}
        <label>E-mail</label>
        <input
          id="email"
          className="form-field"
          type="text"
          placeholder="Email"
          name="email"
          value={info.email}
          onChange={handleChange}
        />
        <label>Fakültə</label>
        <input
          id="faculty"
          className="form-field"
          type="text"
          placeholder="ITIF"
          name="faculty"
          value={info.faculty}
          onChange={handleChange}
        />
        <label>Qrup</label>
        <input
          id="group"
          className="form-field"
          type="text"
          placeholder="604.19E"
          name="group"
          value={info.group}
          onChange={handleChange}
        />
        <label>İxtisas</label>
        <input
          id="specialty"
          className="form-field"
          type="text"
          placeholder="Computer Science"
          name="specialty"
          value={info.specialty}
          onChange={handleChange}
        />
        <label>Qəbul ili</label>
        <DatePicker
          selected={startDate}
          onChange={handleChange}
          value={info.year}
          name="year"
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
          onChange={handleChange}
          value={info.phone}
        />
        <label>Ərizə növləri</label>
        <select
          className="form-field rst_select invalid"
          required={true}
          onChange={handleType}
          name="type"
          id="type"
          aria-invalid="true"
          value={info.type}
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
        </select>
        <label>Qeydləriniz</label>
        <textarea
          // className="form-field"
          name="message"
          id="message"
          cols="80"
          rows="12"
          aria-invalid="false"
          onChange={handleChange}
          value={info.message}
        ></textarea>
        {/* <span id="email-error">Please enter an email address</span> */}
        <div>
          <FileUpload />
        </div>
        <button className="form-field btn" type="submit">
          Göndər
        </button>
      </form>
    </div>
  );
}

export default Form;
