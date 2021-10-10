import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"

const Container = styled.div `
  width: 100%;
  height: 100px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
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
  color: #000;
  font-family: var(--font-family1);
`
const StyledLink = styled(Link)`
  display: inline;
  font-family: var(--font-family2);
  font-size: 1.9rem;
  font-weight: 600;
  text-decoration: none;
  color: black;
  padding: 31px 15px 10px 15px;
  transition: padding-top 5s ease-in-out;
  :hover{    
    background-color: #6666665a;
    border-bottom: 4px solid rgba(187,115,224,1);
  }
`

const Header = () => {
  return (
    <Container>
      <Title>
        <H1>
          MemoryCard
        </H1>
      </Title>
      <List>
        <Ul>
          <StyledLink to="/">Reminders</StyledLink>
          <StyledLink to="/notes">Notes</StyledLink>
        </Ul>
      </List>
    </Container>
  );
};

export default Header;
