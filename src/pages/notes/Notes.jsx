import React, { useState, useEffect } from "react";
import Button from "../../components/button/Button";
import CardNotes from "../../components/notes/Notes";
import FormNote from "../../components/form/FormNote";
import { api } from "../../services/api";
import * as S from "./notes.module.css";

const Notes = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [updateApi, setUpdateApi] = useState(false);
  const [isAdd, setIsAdd] = useState(true);
  const [form, setForm] = useState(false);

  const [formData, setFormData] = useState({
    id: count,
    title: "",
    description: "",
  });

  useEffect(() => {
    api.get("/notes").then((response) => setData(response.data));
  }, []);

  useEffect(() => {
    api.get("/notes").then((response) => setData(response.data));
  }, [updateApi]);

  const handleOnChange = ({ target }) => {
    const value = target.value;
    const name = target.name;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = () => {
    setForm(false);
    setIsAdd(true);
    setCount(count + 1);
    if (formData.title && formData.description !== "") {
      api.post("/notes", formData).then((response) => {
        if (response.status === 201) {
          setUpdateApi(!updateApi);
        }
      });
    } else {
      alert("Preencha os campos do formulário para salvar seu card");
    }
  };

  return (
    <div className={S.container}>
      <div className={S.form}>
        {isAdd ? (
          <Button
            texto="Adicionar Anotação"
            action={() => {
              setForm(true);
              setIsAdd(false);
            }}
          />
        ) : (
          <Button texto="Salvar Anotação" action={handleSave} />
        )}

        {form ? <FormNote onChange={handleOnChange} /> : ""}
        <br />
        <h1>Notes Cards</h1>
      </div>

      <div className={S.cards}>
        <CardNotes 
          notes={data}
          updateApi={updateApi}
          setUpdateApi={setUpdateApi}
        />
      </div>
    </div>
  );
};

export default Notes;
