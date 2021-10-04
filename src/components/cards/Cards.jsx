import React from "react";
import Card from "../card/Card";

const Cards = ({ datas }) => {
  return (
    <div>
      {datas.map((data, index) => {
        return (
          <Card
            id={data.id}
            title={data.title}
            description={data.description}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default Cards;
