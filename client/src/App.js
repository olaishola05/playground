import Home from "./components/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Profile from "./components/Profile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/profile/:username">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
