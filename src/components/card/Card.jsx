import React from 'react'
import { api } from '../../services/api'
import Button from '../button/Button'

const Card = ({id, title, description}) => {

   const handleRemove = () => {
      api.delete(`/cards/${id}`)      
   }

   return (
      <div className="container">         
         <div className="wrapper">
            <h2>{title}</h2>
            <p>{description}</p>
            <a href="/"><Button
            texto='Remover'
            action={handleRemove}
            ></Button></a>
         </div>         
      </div>
   )
}

export default Card;
