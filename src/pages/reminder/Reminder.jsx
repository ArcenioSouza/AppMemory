import React, { useEffect, useState } from "react";
import * as S from "./reminder.module.css";
import Button from "../../components/button/Button";
import Cards from "../../components/cards/Cards";
import FormReminder from "../../components/form/FormReminder";
import { api } from "../../services/api";

const Reminder = () => {
  const [count, setCount] = useState(0);
  const [isAdd, setIsAdd] = useState(true);
  const [form, setForm] = useState(false);
  const [formData, setFormData] = useState({
    id: count,
    title: "",
    description: "",
    priority: "",
    calendar: "",
    horario: "",
  });

  const [data, setData] = useState([]);
  const [updateApi, setUpdateApi] = useState(false);

  useEffect(() => {
    api.get("/cards").then((response) => setData(response.data));
  }, []);

  useEffect(() => {
    api.get("/cards").then((response) => setData(response.data));
  }, [updateApi]);

  const handleOnChange = ({ target }) => {
    const value = target.value;
    const name = target.name;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRemove = (id) => {
    api.delete(`/cards/${id}`).then(() => setUpdateApi(!updateApi));
  };

  const handleSave = () => {
    setForm(false);
    setIsAdd(true);
    setCount(count + 1);
    if (formData.title && formData.description && formData.priority !== "") {
      api.post("/cards", formData).then((response) => {
        if (response.status === 201) {
          setUpdateApi(!updateApi);
        }
      });
    } else {
      alert("É necessário o preenchimento do formulário para salvar o card");
    }
  };

  return (
    <div className={S.container}>
      <div className={S.form}>
        {isAdd ? (
          <Button
            texto="Add Reminder"
            action={() => {
              setForm(true);
              setIsAdd(false);
            }}
          />
        ) : (
          <Button texto="Save Reminder" action={handleSave} />
        )}
        {form ? <FormReminder onChange={handleOnChange} /> : ""}
        <br />
        <h1>Reminder Cards</h1>
      </div>

      <div className={S.cards}>
        <Cards
          updateApi={updateApi}
          setUpdateApi={setUpdateApi}
          datas={data}
          onClick={handleRemove}
        />
      </div>
    </div>
  );
};

export default Reminder;
