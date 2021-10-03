import React from 'react'
import { api } from '../../services/api'

const Card = ({id, title, description}) => {

   const handleRemove = () => {
      api.delete(`/cards/${id}`)      
   }

   return (
      <div className="container">         
         <div className="wrapper">
            <h2>{title}</h2>
            <p>{description}</p>
            <a href="/"><button
            onClick={handleRemove}
            >Remover</button></a>
         </div>         
      </div>
   )
}

export default Card;
