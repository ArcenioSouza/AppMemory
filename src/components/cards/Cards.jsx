import React from "react";
import Button from "../button/Button";
import Card from "../card/Card";

const Cards = ({ datas, action }) => {
  return (
    <div>
      {datas.map((data, index) => {
        return (
          <Card
            id={data.id}
            title={data.title}
            description={data.description}
            key={index}
          >
          <Button texto='Alterar' onclick={action}></Button>
          </Card>
        );
      })}
    </div>
  );
};

export default Cards;
