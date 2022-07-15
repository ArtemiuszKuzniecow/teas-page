import React, { useState } from "react";
import Header from "./components/header";
import Icons from "./components/containerIcons";
import PhoneAndEmail from "./components/phoneAndEmail";
import Advantages from "./components/advantages";
import Contacts from "./components/contacts";

const App = () => {
  const card = (text) => {
    return <div className="description">{text}</div>;
  };
  let initialHeader = "";

  const [header, setCard] = useState(initialHeader);

  const setReset = () => {
    setCard(initialHeader);
  };

  const setCardHeader = (obj, id) => {
    let text;
    if (Object.keys(obj).includes(id)) {
      text = obj[id];
    }
    text ? setCard(card(text)) : setReset();
  };
  return (
    <>
      <Header text={header} onReset={setReset} />
      <Icons onCard={setCardHeader} />
      <PhoneAndEmail onReset={setReset} />
      <Advantages onReset={setReset} />
      <Contacts onReset={setReset} />
    </>
  );
};

export default App;
