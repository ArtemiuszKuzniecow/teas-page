import React from "react";
import "../index.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Contacts = ({ onReset }) => {
  return (
    <div className="contacts" onClick={onReset}>
      <div className="container">
        <p className="text-center">
          +7 (911) 858 50 86 Санкт-Петербург, пр. Кондратьевский д. 15/3, офис
          336-ц sale5@eurasiantrade.ru
        </p>
      </div>
    </div>
  );
};

export default Contacts;
