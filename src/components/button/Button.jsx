import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: var(--second-color);
  color: #fff;
  padding: 5px 20px 5px 20px;
  margin: 10px 0 10px 0;
  border: 2px solid var(--third-color);
  border-radius: 10px;
  font-size: 1rem;
  font-weight: bold;
  transition: 2s ease-in-out;
  width: 200px;
`;

const Button = ({ id, texto, action }) => {
  return <StyledButton id={id} onClick={action}>{texto}</StyledButton>;
};

export default Button;
