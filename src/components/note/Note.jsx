import React from "react";
import styled from "styled-components";
import { api } from "../../services/api";
import { useState } from "react";

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

const Sbutton = styled.button`
  background-color: var(--second-color);
  color: #fff;
  padding: 5px 10px 5px 10px;
  margin-right: 10px;
  border: 2px solid var(--third-color);
  border-radius: 10px;
  font-size: 1rem;
  font-weight: bold;
  transition: 0.6s ease-in-out;
  :hover {
    cursor: pointer;
    background-color: #fff;
    color: var(--third-color);
  }
`;

const WrapperButtons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `

const Note = ({ id, title, description, updateApi, setUpdateApi }) => {

  const [editForm, setEditForm] = useState({
    title: title,
    description: description,
  });

  const [isEdit, setIsEdit] = useState(false);

  const handleRemove = () => {
    api.delete(`/notes/${id}`).then(() => setUpdateApi(!updateApi))
  };

  const handleOnChange = ({target}) => {
    const name = target.name //salva na variável a string contida em name do input.
    const value = target.value //salva na variável o valor contido no input.
    setEditForm({
      ...editForm, //retorna o valor que está no card ao input.
      [name]: value //atribui a mudança que foi feita no valor do input a variável name que carrega o nome title ou description.
    })
  }

  const handleSalvar = () => {
    api.put(`/notes/${id}`, editForm).then(() => setUpdateApi(!updateApi))
    setIsEdit(false)
  }

  return (
    <Container>
      <InfoCards>
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

        <WrapperButtons>
          <Sbutton onClick={handleRemove}>Remover</Sbutton>
          {isEdit ? 
            <Sbutton onClick={handleSalvar}>Salvar</Sbutton> 
          : 
            <Sbutton onClick={() => setIsEdit(true)}>Editar</Sbutton>
          }
        </WrapperButtons>
      </InfoCards>
    </Container>
  );
};

export default Note;
