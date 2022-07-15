import React from "react";
import "../index.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Email from "../img/email.png";
import Phone from "../img/phone-call.png";

const PhoneAndEmail = ({ onReset }) => {
  return (
    <div className="container" onClick={onReset}>
      <div className="row justify-content-center">
        <div className="col-6 text-center">
          <a href="tel:+79118585086" className="telephone">
            <img src={Phone} alt="Позвонить" className="img-fluid" />
          </a>
        </div>
        <div className="col-6 text-center">
          <a
            href="mailto:sale5@eurasiantrade.ru?subject=Запрос на рассчёт&body=Добрый день! Прошу посчитать груз на прямой контракт. Данные груза:"
            className="mail"
          >
            <img src={Email} alt="Отправить запрос" className="img-fluid" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PhoneAndEmail;
