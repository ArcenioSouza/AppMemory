import React from 'react'
import styled from 'styled-components'

const Button = ({texto, action}) => {

   const Button = styled.button `
      background-color: var(--third-color);
      color: #fff;
      padding: 5px 20px 5px 20px;
      margin: 10px 0 10px 0;
      border: 2px solid #fff;
      border-radius: 10px;
      font-size: 1rem;
      font-weight: bold;
      transition: 2s ease-in-out;
   `

   return (
      <Button
      onClick={action}
      >
         {texto}
      </Button>
   )
}

export default Button
