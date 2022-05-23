import React from "react";
import IconCard from "../../features/pages/icon-card/IconCard";
import Card from "./Card";
import "./Home.scss";
const HOme = () => {
  return (
    <>
      <div className="home">
        <Card />
        <IconCard />
      </div>
    </>
  );
};

export default HOme;
