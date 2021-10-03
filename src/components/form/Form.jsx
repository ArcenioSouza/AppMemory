import React from 'react'

const Form = ({onChange}) => {
   return (
      <div>
         <div className="wrapper">

            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" onChange={onChange} />

            <label htmlFor="description">Description</label>
            <input type="text" name="description" id="description" onChange={onChange} />

         </div>
      </div>
   )
}

export default Form
