import React from "react";
import "./MainForm.css";

const data = [
    { id: "1", date: 19, LastAnswer: "Male" },
  ]

function MainForm() {
  return (
      <>
    <p></p>
    <div className="mainForm">
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
                <td>{val.:id}</td>
                <td>{val.date}</td>
                <td>{val.LastAnswer}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
    </>
  );
}

export default MainForm;
