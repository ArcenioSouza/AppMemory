import React from 'react'
import styled from 'styled-components'
import { api } from '../../services/api'
import Button from '../button/Button'

const Card = ({id, title, description}) => {

   const handleRemove = () => {
      api.delete(`/cards/${id}`)      
   }

   const Container = styled.div `
      width: 300px;
      display: flex;
      border: 2px solid #000;
      border-radius: 25px;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 15px;
      margin: 5px;
      background-color: var(--second-color);
      color: #fff;
   `

   return (
      <Container>         
         <div className="wrapper">
            <h2>{title}</h2>
            <p>{description}</p>
            <a href="/"><Button
            texto='Remover'
            action={handleRemove}
            ></Button></a>
         </div>         
      </Container>
   )
}

export default Card;
