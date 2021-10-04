import React from 'react'
import * as S from './form.module.css'

const Form = ({onChange}) => {

   return (   
      <div className={S.container}>
         <div className={S.form}>
            <div className={S.row}>
               <div className={S.columnLabel}>
                  <label htmlFor="title">Title: </label>
               </div>
               <div className={S.columnInput}>
                  <input type="text" name="title" id="title" onChange={onChange} />
               </div>
            </div>
            <div className={S.row}>
               <div className={S.columnLabel}>
                  <label htmlFor="description">Description: </label>  
               </div>
               <div className={S.columnInput}>
                  <input type="text" name="description" id="description" onChange={onChange} />
               </div>
            </div>                
         </div>
      </div>        
   )
}

export default Form