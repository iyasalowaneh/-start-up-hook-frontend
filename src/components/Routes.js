
// react
import { Route, Switch } from "react-router";

// components
import SignIn  from "./user/SignIn"
import SignUp  from "./user/SignUp"

function Routes() {
  return (
    <Switch>
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
