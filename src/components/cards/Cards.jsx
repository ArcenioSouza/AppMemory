import React from "react";
import Card from "../card/Card";

const Cards = ({ datas, updateApi, setUpdateApi, onClick }) => {
  return (
    <div>
      {datas.map((data, index) => {
        return (
          <Card
            id={data.id}
            title={data.title}
            description={data.description}
            key={index}
            updateApi={updateApi}
            setUpdateApi={setUpdateApi}
            onClick={onClick}
          />
        );
      })}
    </div>
  );
};

export default Cards;
