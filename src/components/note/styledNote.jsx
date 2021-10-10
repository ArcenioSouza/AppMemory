import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  display: flex;
  border: 2px solid var(--third-color);
  border-radius: 25px;
  align-items: center;
  padding: 15px;
  margin: 5px;
  background-color: #fff;
  color: var(--third-color);
`;

export const InfoCards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 15px;
`;

export const Button = styled.button`
  background-color: var(--second-color);
  color: #fff;
  padding: 5px 10px 5px 10px;
  margin-right: 10px;
  border: 2px solid var(--third-color);
  border-radius: 10px;
  font-size: 1rem;
  font-weight: bold;
  transition: 0.6s ease-in-out;
  :hover {
    cursor: pointer;
    background-color: #fff;
    color: var(--third-color);
  }
`;

export const WrapperButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
font-size: 1rem;
  border: 2px solid var(--third-color);
  border-radius: 10px;
  padding: 5px 0 5px 10px;
  margin: 5px;
  color: var(--third-color);
  :focus{
    outline-color: #f02f2fce;
  }
`

export const TextArea = styled.textarea`
  font-size: 0.8rem;
  border: 2px solid var(--third-color);
  border-radius: 10px;
  padding: 5px 0 5px 10px;
  margin: 5px;
  color: var(--third-color);
  :focus{
    outline-color: #f02f2fce;
  }
`