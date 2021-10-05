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

const Li = styled.li `
  display: inline;
  font-size: 1.5rem;
  padding: 10px 20px 10px 20px;
  margin-right: 40px;
  border: 2px solid var(--third-color);
  border-radius: 15px;
  color: var(--third-color);
  background-color: #fff;
  font-weight: bold;
  box-shadow: 10px -5px var(--third-color);
`

const H1 = styled.h1 `
  color: #fff;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--third-color);
`
const Span = styled.span `
  border: 2px solid var(--third-color);
  padding: 5px;
  border-radius: 10px;
  box-shadow: 10px -5px var(--third-color);
  color: var(--third-color);
  background-color: #fff;
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
          <Li><StyledLink to="/">Reminder</StyledLink></Li>
          <Li><StyledLink to="/notes">Notes</StyledLink></Li>
        </Ul>
      </List>
    </Container>
  );
};

export default Header;
