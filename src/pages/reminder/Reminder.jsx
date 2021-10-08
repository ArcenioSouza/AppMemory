import React, { useEffect, useState } from "react";
import EditForm from "../../components/form/EditForm"
import Form from "../../components/form/Form";
import { api } from "../../services/api";


const Reminder = () => {

  //database recebe um useState com array vazio e é alimentado pelo useEffect.  
  const [database, setDatabase] = useState([])
  
  useEffect(() => {
    api.get("/cards").then((response) => setDatabase(response.database))
  }, [])


  //controle dos forms.
  /* const [form, setForm] = useState(false)
  const [editForm, setEditForm] = useState(false) */


  return (
    database.forEach(data => {
      <div>
        <h1>{data.title}</h1>
        <p>{data.description}</p>
      </div>
      
    })
    /* <div>
      <div>
        
        
      </div>
      <h1>Reminder Cards</h1>      
      {database.map((data, index) => {
          return (
            <div key={index}>
              <h2>{data.title}</h2>
              <p>{data.description}</p> 
              <button>Remover</button> 
              <button onClick={setEditForm(true)}>Alterar</button>
            </div>
        );
      })}
      <button type='button' onClick={setForm(true)}>Adicionar card</button>
      {form ? <Form /> : ""}
      {editForm ? <EditForm /> : ""}
    </div> */
  );
};

export default Reminder;
