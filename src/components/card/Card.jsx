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

  const WrapperButtons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `

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
    :hover{
      cursor: pointer;
      background-color: #fff;
      color: var(--third-color);
    }
  `

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
    <Container>
      <InfoCards>
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
        
        <WrapperButtons>
          <Sbutton onClick={() => onClick(id)}>Remover</Sbutton>  
          {isEdit ? <Sbutton onClick={handleSalvar}>Salvar</Sbutton> : <Sbutton onClick={() => setIsEdit(true)}>Editar</Sbutton> }
        </WrapperButtons>                 
      </InfoCards>
    </Container>
  );
};

export default Card;
