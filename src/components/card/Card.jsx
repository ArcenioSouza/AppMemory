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
            <button
            onClick={handleRemove}
            >Remover</button>
         </div>         
      </div>
   )
}

export default Card;
