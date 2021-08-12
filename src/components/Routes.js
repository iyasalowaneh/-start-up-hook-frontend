// react
import { Route, Switch } from "react-router";

// components
import StartupProfile from "./user/StartupProfile"
import SignIn  from "./user/SignIn"
import SignUp  from "./user/SignUp"
import Home from "./Home/Home";
import CreateIdea from "./idea/CreateIdea";
import IdeaList from "./idea/IdeaList";


function Routes() {
  return (
    <Switch>
        <Route path="/idealist">
        <IdeaList />
      </Route>
       
        <Route path="/createidea">
        <CreateIdea />
      </Route>

        <Route path="/startupProfile">
        <StartupProfile />
      </Route>

      <Route path="/signIn">
        <SignIn />
      </Route>

      <Route  path="/signUp">
        <SignUp />
      </Route>

      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
}
export default Routes;
