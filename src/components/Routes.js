// react
import { Route, Switch } from "react-router";

// components
import StartupProfile from "./user/StartupProfile"
import SignIn  from "./user/SignIn"
import SignUp  from "./user/SignUp"
import Home from "./Home/Home";


function Routes() {
  return (
    <Switch>
        <Route path="/startupProfile">
        <StartupProfile />
      </Route>

      <Route path="/signIn">
        <SignIn />
      </Route>

      <Route exact path="/">
        <SignUp />
      </Route>

      <Route exact path="/home">
        <Home />
      </Route>
    </Switch>
  );
}
export default Routes;
