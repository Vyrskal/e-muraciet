import React, { useState } from "react";
import "./MainForm.css";
import Modal from "../Modal/Modal";

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
  const [modalActive, setModalActive] = useState(false);
  const [notSignedActive, setNotSignedActive] = useState(false);

  return (
    <div className="mainForm">
      <p></p>
      <div className="mainForm-page">
        <p></p>
        <table className="mainForm-page__table">
          <tbody>
            <tr>
              <th>#</th>
              <th>Tarix</th>
              <th>Sonuncu cavab</th>
              <th>Kod Telefon</th>
              <th>Müraciıt edən</th>
              <th>Status</th>
              <th>İcrasını həyata keçirir</th>
            </tr>
          </tbody>
          {data.map((val, key) => {
            return (
              <tbody key={val.id}>
                <tr>
                  <td>{val.id}</td>
                  {console.log(val.id)}
                  <td>{val.date}</td>
                  <td>{val.LastAnswer}</td>
                  <td>{val.phoneCode}</td>
                  <td>{val.appliedWho}</td>
                  <td>
                    <button
                      className="open-btn"
                      onClick={() => {
                        setModalActive(true);
                        console.log(notSignedActive);
                      }}
                    >
                      Sign
                    </button>
                  </td>
                  <td>{val.department}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        <div className="module-blok">
          <h3>Подписать документ?</h3>
          <div className="module-blok__buttons">
            <button>Подписать</button>
            <button onClick={() => setNotSignedActive(true)}>
              Не подписывать
            </button>
          </div>
          <div className="notSignedDiv">
            <form
              className={notSignedActive ? "notSigned active" : "notSigned"}
              onSubmit={(e) => {
                e.preventDefault();
                setModalActive(false);
                console.log(e.target);
              }}
            >
              <p>Причина</p>
              <textarea rows="6" cols="40"></textarea>
              <br />
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default MainForm;
