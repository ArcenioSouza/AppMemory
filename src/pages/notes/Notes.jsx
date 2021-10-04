import React, { useState } from 'react'
import {api} from "../../services/api"

const Notes = () => {

   const [count, setCount] = useState(0)

   const [formData, setFormData] = useState({
      id: count,
      title: "",
      description: "",
   })

   useEffect(() => {
      api.get("/notes").then((response) => setFormData(response.data))
   }, [updateApi])


   const handleOnChange = ({target}) => {
      const value = target.value
      const name = target.name
   }

   const handleSave = () => {
      setForm(false)
      setIsAdd(true)
      setCount(count +1)
   }

   return (
      <div className={S.container}>
         <div className={S.form}>
            {isAdd ? 
            <Button texto="Adicionar Anotação" action={() => {
               setForm(true) 
               setIsAdd(false)
            }}
            />
            :
            <Button 
               texto="Salvar Anotação" 
               action={handleSave}
            />
            }

            {form ? <Form onChange={handleOnChange} /> : ""}
         </div>

         <div className={S.cards}>
            <Cards datas={data}/>
         </div>
         
      </div>
   )
}

export default Notes
