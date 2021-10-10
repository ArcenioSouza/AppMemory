import Header from "./components/header/header";
import Notes from "./pages/notes/Notes";
import Reminder from "./pages/reminder/Reminder";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import styled from "styled-components";

const Container = styled.div `
background-color: aquamarine;
  width: 100vmax;
`

function App() {
  return (
    <Container>
      {/* <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/' exact component={Reminder}/>
          <Route path='/notes' exact component={Notes}/>
        </Switch>      
      </BrowserRouter> */}
    </Container>
  );
}

export default App;
