import { Route, Switch } from "react-router-dom";
import "./App.css";
import Character from "./pages/Character";
import CharactersList from "./pages/CharactersList";
import Message from "./pages/Message";
import Search from "./pages/Search";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route strict exact path="/" component={CharactersList} />
        <Route strict exact path="/search" component={Search} />
        <Route strict exact path="/:id" component={Character} />
      </Switch>

      <Message />
    </div>
  );
}

export default App;
