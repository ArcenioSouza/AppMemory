import Header from "./components/header/header";
import Notes from "./pages/notes/Notes";
import Reminder from "./pages/reminder/Reminder";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 20px 20px 20px;
  background: rgb(187,115,224);
  background: linear-gradient(121deg, rgba(187,115,224,1) 21%, rgba(255,141,219,1) 75%);
  width: 100%;
  height: 100vh;
`;

const Wrapper = styled.div `
  width: 99.8%;
  height: 95vh;
  background: #fff;
  border-radius: 20px;
  box-shadow:  inset 0 0, 0 0 1em;
`

function App() {
  return (
    <Container>
      <Wrapper>
        <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/' exact component={Reminder}/>
          <Route path='/notes' exact component={Notes}/>
        </Switch>      
      </BrowserRouter>
      </Wrapper>
    </Container>
  );
}

export default App;
