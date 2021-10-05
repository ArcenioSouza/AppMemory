import Header from "./components/header/header";
import Notes from "./pages/notes/Notes";
import Reminder from "./pages/reminder/Reminder";
import {BrowserRouter, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/' exact component={Reminder}/>
          <Route path='/notes' exact component={Notes}/>
        </Switch>      
      </BrowserRouter>
    </div>
  );
}

export default App;
