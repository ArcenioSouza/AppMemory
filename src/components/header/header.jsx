import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"

const Container = styled.div `
  width: 100%;
  height: 100px;
  background-color: var(--second-color);
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 2px solid #fff;
`

const Title = styled.div `
  width: 30%;
  padding-left: 50px;
`

const List = styled.div `
  width: 70%;
  display: flex;
  justify-content: center;
`

const Ul = styled.ul `
  list-style: none;
`

const H1 = styled.h1 `
  color: #fff;
`
const StyledLink = styled(Link)`
  display: inline;
  padding: 10px 20px 10px 20px;
  font-size: 1.5rem;
  margin-right: 40px;
  border: 2px solid var(--third-color);
  border-radius: 15px;
  color: var(--third-color);
  background-color: #fff;
  font-weight: bold;
  box-shadow: 3px -3px var(--third-color);
  text-decoration: none;
  transition: 0.3s ease-in-out;
  color: var(--third-color);
  :hover{
      cursor: pointer;
      background-color: var(--third-color);
      color: #fff;
    }
`
const Span = styled.span `
  border: 2px solid var(--third-color);
  padding: 5px;
  border-radius: 10px;
  box-shadow: 3px -3px var(--third-color);
  color: var(--third-color);
  background-color: #fff;
  transition: 0.2s ease-in-out;
  :hover{
      letter-spacing: 5px;
    }
`

const Header = () => {
  return (
    <Container>
      <Title>
        <H1>
          App <Span>MemoryCard</Span>
        </H1>
      </Title>
      <List>
        <Ul>
          <StyledLink to="/">Reminder</StyledLink>
          <StyledLink to="/notes">Notes</StyledLink>
        </Ul>
      </List>
    </Container>
  );
};

export default Header;
