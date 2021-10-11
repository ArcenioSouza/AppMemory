import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 2px solid #000;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5% 0 5%;
  border-radius: 10px;
  padding: 25px;
`;

const Sform = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const ColumnLabel = styled.div`
  width: 25%;
  text-align: right;
`;

const ColumnInput = styled.div`
  width: 75%;
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  font-weight: bold;
  padding-right: 5px;
  font-size: 1.4rem;
  color: #000;
`;

const Input = styled.input`
  font-size: 1.2rem;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 5px 0 5px 10px;
  margin: 5px;
  width: 80%;
  background-color: #bc73e03b;
  color: #000;
  :focus {
    outline-color: var(--primary-color);
  }
`;

const InputRadio = styled.input`
  font-size: 1.2rem;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 5px 0 5px 10px;
  margin: 5px;
  background-color: #bc73e03b;
  color: #000;
  :focus {
    outline-color: var(--primary-color);
  }
`;

const P = styled.p`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.color};
  padding: 5px;
  margin-left: 5px;
  color: #fff;
  border-radius: 5px;
  font-weight: bold;
`;

const Form = ({ onChange }) => {
  return (
    <Container>
      <Sform>
        <Row>
          <ColumnLabel>
            <Label htmlFor="title">Title: </Label>
          </ColumnLabel>
          <ColumnInput>
            <Input 
              type="text" 
              name="title" 
              id="title" 
              placeholder="Título para o lembrete"
              onChange={onChange} />
          </ColumnInput>
        </Row>
        <Row>
          <ColumnLabel>
            <Label htmlFor="description">Description: </Label>
          </ColumnLabel>
          <ColumnInput>
            <Input
              type="text"
              name="description"
              id="description"
              placeholder="Breve descrição da atividade"
              onChange={onChange}
            />
          </ColumnInput>
        </Row>
        <Row>
          <ColumnLabel>
            <Label htmlFor="description">Data: </Label>
          </ColumnLabel>
          <ColumnInput>
            <Input
              type="text"
              name="calendar"
              id="data"
              placeholder="Ex: 10/04/2021"
              onChange={onChange}
            />
          </ColumnInput>
        </Row>
        <Row>
          <ColumnLabel>
            <Label htmlFor="description">Horário: </Label>
          </ColumnLabel>
          <ColumnInput>
            <Input
              type="text"
              name="horario"
              id="hora"
              placeholder="Ex: 14h00 ou 14:00"
              onChange={onChange}
            />
          </ColumnInput>
        </Row>
        <Row>
          <ColumnLabel>
            <Label htmlFor="description">Priority: </Label>
          </ColumnLabel>
          <ColumnInput>
            <P color="green">
              <InputRadio
                type="radio"
                name="priority"
                id="priority"
                value="Low"
                onChange={onChange}
              />
              Low
            </P>
            <P color="orange">
              <InputRadio
                type="radio"
                name="priority"
                id="priority"
                value="Average"
                onChange={onChange}
              />
              Average
            </P>
            <P color="red">
              <InputRadio
                type="radio"
                name="priority"
                id="priority"
                value="High"
                onChange={onChange}
              />
              High
            </P>
          </ColumnInput>
        </Row>
      </Sform>
    </Container>
  );
};

export default Form;
