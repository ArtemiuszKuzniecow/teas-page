import React from "react";
import "../index.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Header = ({ text, onReset }) => {
  return (
    <header onClick={onReset}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="header-image">
              <p>TEAC>></p>
              {text}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
