import React from "react";
import { api } from "../../services/api";
import { useState } from "react";
import * as S from "./styledCard";
import { FcClock, FcCalendar } from "react-icons/fc";

const Card = ({
  id,
  title,
  description,
  priority,
  calendar,
  horario,
  updateApi,
  setUpdateApi,
  onClick,
}) => {

  const [isEdit, setIsEdit] = useState(false);
  const [input, setInput] = useState({
    title: title,
    description: description,
    priority: priority,
    calendar: calendar,
    horario: horario,
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
      <S.StyledData>
        <FcCalendar />
        <S.PData>{input.calendar}</S.PData>
        <FcClock />
        <S.PData>{input.horario}</S.PData>
      </S.StyledData>
      <S.StyledPriority>
        <p>priority: </p>
        {input.priority === "Low" ? (
          <S.Pgreen>{input.priority}</S.Pgreen>
        ) : input.priority === "Average" ? (
          <S.Porange>{input.priority}</S.Porange>
        ) : (
          <S.Pred>{input.priority}</S.Pred>
        )}
      </S.StyledPriority>
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
            <S.ColumnInput>
              <S.Input
                  type="text"
                  name="calendar"
                  id="data"
                  value={input.calendar}
                  placeholder="Ex: 10/04/2021"
                  onChange={handleOnChange}
                />

              <S.Input
                  type="text"
                  name="horario"
                  id="hora"
                  value={input.horario}
                  placeholder="Ex: 14h00 ou 14:00"
                  onChange={handleOnChange}
                />
            </S.ColumnInput>
            <S.ColumnInput>
              <S.FormP color="green">
                <S.InputRadio
                  type="radio"
                  name="priority"
                  id="green"
                  value="Low"
                  onChange={handleOnChange}
                />
                Low
              </S.FormP>
              <S.FormP color="orange">
                <S.InputRadio
                  type="radio"
                  name="priority"
                  id="orange"
                  value="Average"
                  onChange={handleOnChange}
                />
                Average
              </S.FormP>
              <S.FormP color="red">
                <S.InputRadio
                  type="radio"
                  name="priority"
                  id="red"
                  value="High"
                  onChange={handleOnChange}
                />
                High
              </S.FormP>
            </S.ColumnInput>
          </>
        ) : (
          <>
            <h2>{title}</h2>
            <p>{description}</p>
          </>
        )}
      </S.InfoCards>
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
    </S.Container>
  );
};

export default Card;
