import React from "react";
import styled from "styled-components";
import { api } from "../../services/api";
import Button from "../button/Button";

const Note = ({ id, title, description }) => {
  const handleRemove = () => {
    api.delete(`/notes/${id}`);
  };

  const Container = styled.div`
    width: 300px;
    display: flex;
    border: 2px solid var(--third-color);
    border-radius: 25px;
    align-items: center;
    padding: 15px;
    margin: 5px;
    background-color: #fff;
    color: var(--third-color);
  `;

  const InfoCards = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 15px;
  `;

  return (
    <Container>
      <InfoCards>
        <h2>{title}</h2>
        <p>{description}</p>
        <a href="/notes">
          <Button texto="Remover" action={handleRemove}></Button>
        </a>
      </InfoCards>
    </Container>
  );
};

export default Note;
