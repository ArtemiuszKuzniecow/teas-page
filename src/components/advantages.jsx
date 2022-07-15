import React from "react";
import "../index.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Advantages = ({ onReset }) => {
  return (
    <div className="advantages" onClick={onReset}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-md-12 col-sm-12">
            <h2 className="pb-5 pt-5 text-center">Причины рабоать с нами</h2>
            <h5 className="p-5">
              Имеем собственные склады консолидации в странах: Финляндия
              (Котка), Эстония (Маарду), Литва (Вильнюс), Китай (Иу)
            </h5>
            <h5 className="p-5">
              Свой парк из 19 автомобилей и прямые контракты с линиями
            </h5>
            <h5 className="p-5">
              Доставка и таможенная очистка осуществляется как на контракт
              нашего импортера, так и на прямой контракт
            </h5>
            <h5 className="p-5">
              Возим как сборные грузы, так и контейнеры 20', 40', High Cube. А
              так же негабариты, реф и опасные грузы.
            </h5>
            <h5 className="p-5">
              Оформляем разрешительные документы (сертификаты, декларации
              соответствия и т.п.)
            </h5>
            <h5 className="p-5">Работаем на рынке уже более 12 лет</h5>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Advantages;
