import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

export const decriptionObj = {
  auto: "Автомобильные грузоперевозки. Грузовые перевозки автотранспортом из Европы и Азии. Доставка грузов в Россию от 50 килограмм до 25 тонн.",
  plane:
    "Доставка любых грузов из Европы, Азии, Африки, Австралии и Америки! Грузы от 1 кг. до 120 тонн. Оперативно, качественно, надёжно.",
  sea: "Морские перевозки из Китая (а так же других стран) в Россию . Отправляем как обычные контейнеры 20', 40', Hight Cube, так и реф-контейнеры и Open top.",
  railroad:
    "Компания ТЕАС специализируется на железнодорожных перевозках грузов из-за границы в Россию. Предлагаем оптимальные условия доставки Вашего груза.",
  smallCargo:
    "Доставляем сборные грузы из стран Дальнего зарубежья! В зависимости от веса и объема груза, подбирается оптимальный способ транспортировки.",
  documents:
    "Наши специалисты подготовят все документы для таможенных органов, произведут расчет таможенных платежей и подготовят таможенную декларацию.",
  exportCargo:
    "Доставляем любые грузы из России за рубежю Также, наша компания предоставляет услуги по оформлению документов на экспорт товаров.",
  dangerous:
    "Мы так же специализируемся и на доставке опасных грузов. Наши сотрудники имеют большой опыт в сфере доставки опасных грузов.",
};

const Icons = ({ onCard }) => {
  return (
    <div className="container">
      <div className="row justify-content-center align-content-center">
        <h2 className="text-uppercase text-center pb-5 pt-5">
          Компания ТЕАС. Таможенное оформление и международные грузоперевозки.
        </h2>
      </div>
      <div
        className="row justify-content-around teas-cards our_service mb-5"
        onClick={(e) => onCard(decriptionObj, e.target.id)}
      >
        <div
          className="col-xl-4 col-md-12 col-sm-12 mb-5 p-3 m-xl-2 m-md-5 auto card"
          id="auto"
        ></div>
        <div
          className="col-xl-4 col-md-12 col-sm-12 mb-5 p-3 m-xl-2 m-md-5 plane card"
          id="plane"
        ></div>
        <div
          className="col-xl-4 col-md-12 col-sm-12 mb-5 p-3 m-xl-2 m-md-5 sea card"
          id="sea"
        ></div>
        <div
          className="col-xl-4 col-md-12 col-sm-12 mb-5 p-3 m-xl-2 m-md-5 railroad card"
          id="railroad"
        ></div>
        <div
          className="col-xl-4 col-md-12 col-sm-12 mb-5 p-3 m-xl-2 m-md-5 small-cargo card"
          id="smallCargo"
        ></div>
        <div
          className="col-xl-4 col-md-12 col-sm-12 mb-5 p-3 m-xl-2 m-md-5 documents card"
          id="documents"
        ></div>
        <div
          className="col-xl-4 col-md-12 col-sm-12 mb-5 p-3 m-xl-2 m-md-5 export card"
          id="exportCargo"
        ></div>
        <div
          className="col-xl-4 col-md-12 col-sm-12 mb-5 p-3 m-xl-2 m-md-5 dangerous card"
          id="dangerous"
        ></div>
      </div>
    </div>
  );
};

export default Icons;
