import React from 'react'

const Button = ({texto, action}) => {
   return (
      <button
      onClick={action}
      >
         {texto}
      </button>
   )
}

export default Button
