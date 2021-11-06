import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import Roster from "./components/Roster/Roster";
import Card from "./components/Card/Card";
import Detail from "./components/Detail/Detail";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/roster" component={Roster} />
        <Route path="/home" component={Home} />
        <Route path="/details" component={Detail} />
        {/* <Route path="/details/:id" component={Detail} /> */}
      </Switch>
    </div>
  );
}

export default App;
