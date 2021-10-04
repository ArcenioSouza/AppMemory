import "./App.css";
import Header from "./components/header/header";
import Notes from "./pages/notes/Notes";
import Reminder from "./pages/reminder/Reminder";

function App() {
  return (
    <div className="App">
      <Header />
      <Reminder />
      <Notes />
    </div>
  );
}

export default App;
