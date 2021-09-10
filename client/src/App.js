import Home from "./components/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Profile from "./components/Profile";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Register />}
        </Route>

        <Route exact path="/login">
          {user ? <Redirect to="/" /> : <Login />}
        </Route>

        <Route exact path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
        <Route exact path="/profile/:username">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
