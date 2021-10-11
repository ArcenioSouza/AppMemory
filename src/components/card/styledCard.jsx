import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  padding: 15px 15px 15px 15px;
  margin: 5px;
  background: rgba(255, 255, 255, 0.45);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(7.5px);
  -webkit-backdrop-filter: blur(7.5px);
  border-radius: 10px;
  border: 1px solid #000;
`;

export const InfoCards = styled.div`
  width: 100%;
  display: flex;
  margin-top: 10px;
  margin-bottom: 20px;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 15px;
`;

export const WrapperButtons = styled.div`
  display: flex;
  width: 100%;
  position: absolute;
  bottom: 5px;
`;

export const Button = styled.button`
  background-color: var(--second-color);
  color: #fff;
  padding: 5px 10px 5px 10px;
  margin-right: 10px;
  border: 1px solid #000;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  transition: 0.6s ease-in-out;
  :hover {
    cursor: pointer;
    background-color: var(--primary-color);
    color: #000;
  }
`;

export const Input = styled.input`
  font-size: 1rem;
  border: 1px solid #000;
  border-radius: 10px;
  padding: 5px 0 5px 10px;
  margin: 5px;
  color: #000;
  :focus {
    outline-color: var(--primary-color);
  }
`;

export const TextArea = styled.textarea`
  font-size: 0.8rem;
  border: 1px solid #000;
  border-radius: 10px;
  padding: 5px 0 5px 10px;
  margin: 5px;
  color: var(--third-color);
  :focus {
    outline-color: var(--primary-color);
  }
`;

export const StyledPriority = styled.div `
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  padding: 5px;
`

export const Pred = styled.p `
  background-color: red;
  padding: 5px;
  margin-left: 5px;
  color: #fff;
  border-radius: 5px;
  font-weight: bold;
`

export const Pgreen = styled.p `
  background-color: green;
  padding: 5px;
  margin-left: 5px;
  color: #fff;
  border-radius: 5px;
  font-weight: bold;
`

export const Porange = styled.p `
  background-color: orange;
  padding: 5px;
  margin-left: 5px;
  color: #fff;
  border-radius: 5px;
  font-weight: bold;
`

export const InputRadio = styled.input`
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

export const FormP = styled.p`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.color};
  padding: 5px;
  margin-left: 5px;
  color: #fff;
  border-radius: 5px;
  font-weight: bold;
`;

export const ColumnInput = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const StyledData = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  margin: 5px;
  position: absolute;
  top: 0;
  left: 0;
`

export const PData = styled.p `
  padding-right: 5px;
`