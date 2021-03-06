import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: var(--second-color);
  color: #fff;
  padding: 5px 20px 5px 20px;
  margin: 10px 0 10px 0;
  border: 1px solid #000;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: bold;
  transition: 0.6s ease-in-out;
  width: 200px;
  :hover {
    cursor: pointer;
    background-color: var(--primary-color);
    color: #000;
  }
`;

const Button = ({ texto, action }) => {
  return <StyledButton onClick={action}>{texto}</StyledButton>;
};

export default Button;
