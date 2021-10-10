import React from "react";
import styled from "styled-components";
import { api } from "../../services/api";
import { useState } from "react";
import * as S from "./styledCard"

const Card = ({ id, title, description, updateApi, setUpdateApi, onClick }) => {

  const [isEdit, setIsEdit] = useState(false)
  const [input, setInput] = useState({
    title: title,
    description: description
  })

  const handleOnChange = ({target}) => {
    const name = target.name
    const value = target.value
    setInput({
      ...input,
      [name]: value
      //name representa o target que está sendo feito a mudança, no caso se for no title, o name será = title e assim vai...
    })
  }

 

  const handleSalvar = () => {
    api.put(`/cards/${id}`, input).then(() => setUpdateApi(!updateApi))
    setIsEdit(false)
  }

  

  return (
    <S.Container>
      <S.InfoCards>
        {
          isEdit ? 
          (
            <>
              <input type="text" name="title" value={input.title} onChange={handleOnChange}/>
              <textarea  name="description" value={input.description} onChange={handleOnChange}/>
            </>
          ) 
          : 
          (
            <>
              <h2>{title}</h2>
              <p>{description}</p>
            </>
          )
        }
        
        <S.WrapperButtons>
          <S.Button onClick={() => onClick(id)}>Remover</S.Button>  
          {isEdit ? <S.Button onClick={handleSalvar}>Salvar</S.Button> : <S.Button onClick={() => setIsEdit(true)}>Editar</S.Button> }
        </S.WrapperButtons>                 
      </S.InfoCards>
    </S.Container>
  );
};

export default Card;
