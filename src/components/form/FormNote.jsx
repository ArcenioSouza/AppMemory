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

const FormNote = ({ onChange }) => {
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
              onChange={onChange}
            />
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
      </Sform>
    </Container>
  );
};

export default FormNote;
