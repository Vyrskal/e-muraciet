import React from "react";
import "./MainForm.css";

const data = [
  {
    id: "1",
    date: "10.10.1010",
    LastAnswer: "Male",
    phoneCode: +994702939353,
    appliedWho: "JZR",
    status: "Signed",
    department: "ETR",
  },
];

function MainForm() {
  return (
    <div className="mainForm">
      <p></p>
      <div className="mainForm-page">
        <p></p>
        <table className="mainForm-page__table">
          <tr>
            <th>#</th>
            <th>Tarix</th>
            <th>Sonuncu cavab</th>
            <th>Kod Telefon</th>
            <th>Müraciıt edən</th>
            <th>Status</th>
            <th>İcrasını həyata keçirir</th>
          </tr>
          {data.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.id}</td>
                <td>{val.date}</td>
                <td>{val.LastAnswer}</td>
                <td>{val.phoneCode}</td>
                <td>{val.appliedWho}</td>
                <td>{val.status}</td>
                <td>{val.department}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default MainForm;
