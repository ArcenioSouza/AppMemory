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
  background: rgb(187, 115, 224);
  background: var(--gradient);
  width: 100%;
`;

const Wrapper = styled.div`
  width: 99.8%;
  background: #fff;
  border-radius: 20px;
  box-shadow: inset 0 0, 0 0 1em;
`;

function App() {
  return (
    <Container>
      <Wrapper>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={Reminder} />
            <Route path="/notes" exact component={Notes} />
          </Switch>
        </BrowserRouter>
      </Wrapper>
    </Container>
  );
}

export default App;
