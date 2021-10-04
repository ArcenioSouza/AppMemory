import React, { useEffect, useState } from 'react'
import Button from '../../components/button/Button';
import Cards from '../../components/cards/Cards';
import Form from '../../components/form/Form';
import { api } from '../../services/api';

const Reminder = () => {
   const [count, setCount] = useState(0)
   const [isAdd, setIsAdd] = useState(true)
   const [form, setForm] = useState(false)
   const [formData, setFormData] = useState({
      id: count,
      title:"",
      description:"",
   })

   const [data, setData] = useState([])
   const [updateApi, setUpdateApi] = useState(false)

   useEffect(() => {
      api.get('/cards').then((response) => setData(response.data))
   },[])

   useEffect(() => {
      api.get('/cards').then((response) => setData(response.data))
   },[updateApi])

   const handleOnChange = ({target}) => {
      const value = target.value
      const name = target.name
      setFormData({
         ...formData,
         [name]:value
      })
   }

   const handleSave = () => {
      setForm(false)
      setIsAdd(true)
      setCount(count + 1)
      api.post('/cards', formData)
      .then((response) => {
         if(response.status === 201) {
            setUpdateApi(!updateApi)
         }
      })
   }

   return (
      <div>
         <section>
            {isAdd ? 
            <Button texto="Adicionar" action={() => {
               setForm(true) 
               setIsAdd(false)
            }}/>
         :
            <Button texto="Salvar" action={handleSave}/>
         }
         {form ? <Form onChange={handleOnChange} /> : ""}
         </section>
         <Cards datas={data}/>
      </div>
   )
}

export default Reminder;
