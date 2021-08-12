
// react
import { Route, Switch } from "react-router";

// components
import StartupProfile from "./user/StartupProfile"
import SignIn  from "./user/SignIn"
import SignUp  from "./user/SignUp"

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
        <SignUp/>
      </Route>

    </Switch>
  );
}
export default Routes;
