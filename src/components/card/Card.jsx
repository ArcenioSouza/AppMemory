import React from "react";
import { api } from "../../services/api";
import { useState } from "react";
import * as S from "./styledCard";

const Card = ({ id, title, description, updateApi, setUpdateApi, onClick }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [input, setInput] = useState({
    title: title,
    description: description,
  });

  const handleOnChange = ({ target }) => {
    const name = target.name;
    const value = target.value;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSalvar = () => {
    api.put(`/cards/${id}`, input).then(() => setUpdateApi(!updateApi));
    setIsEdit(false);
  };

  return (
    <S.Container>
      <S.InfoCards>
        {isEdit ? (
          <>
            <S.Input
              type="text"
              name="title"
              value={input.title}
              onChange={handleOnChange}
            />
            <S.TextArea
              name="description"
              value={input.description}
              onChange={handleOnChange}
            />
          </>
        ) : (
          <>
            <h2>{title}</h2>
            <p>{description}</p>
          </>
        )}

        <S.WrapperButtons>
        {isEdit ? (
          <>
            <S.Button onClick={() => setIsEdit(false)}>Desfazer</S.Button>
            <S.Button onClick={handleSalvar}>Salvar</S.Button>
          </>
          ) : (
          <>
            <S.Button onClick={() => onClick(id)}>Remover</S.Button>
            <S.Button onClick={() => setIsEdit(true)}>Editar</S.Button>
          </>
          )}
        </S.WrapperButtons>
      </S.InfoCards>
    </S.Container>
  );
};

export default Card;
