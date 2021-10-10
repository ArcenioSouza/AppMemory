import React from "react";
import * as S from "./styledNote"
import { api } from "../../services/api";
import { useState } from "react";

const Note = ({ id, title, description, updateApi, setUpdateApi }) => {
  const [editForm, setEditForm] = useState({
    title: title,
    description: description,
  });

  const [isEdit, setIsEdit] = useState(false);

  const handleRemove = () => {
    api.delete(`/notes/${id}`).then(() => setUpdateApi(!updateApi));
  };

  const handleOnChange = ({ target }) => {
    const name = target.name; //salva na variável a string contida em name do input.
    const value = target.value; //salva na variável o valor contido no input.
    setEditForm({
      ...editForm, //retorna o valor que está no card ao input.
      [name]: value, //atribui a mudança que foi feita no valor do input a variável name que carrega o nome title ou description.
    });
  };

  const handleSalvar = () => {
    api.put(`/notes/${id}`, editForm).then(() => setUpdateApi(!updateApi));
    setIsEdit(false);
  };

  return (
    <S.Container>
      <S.InfoCards>
        {isEdit ? (
          <>
            <input
              name="title"
              type="text"
              value={editForm.title}
              onChange={handleOnChange}
            />
            <textarea
              name="description"
              value={editForm.description}
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
          <S.Button onClick={handleRemove}>Remover</S.Button>
          {isEdit ? (
            <S.Button onClick={handleSalvar}>Salvar</S.Button>
          ) : (
            <S.Button onClick={() => setIsEdit(true)}>Editar</S.Button>
          )}
        </S.WrapperButtons>
      </S.InfoCards>
    </S.Container>
  );
};

export default Note;
