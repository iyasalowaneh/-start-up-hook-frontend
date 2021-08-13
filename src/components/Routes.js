// react
import { Route, Switch } from "react-router";

// components
import StartupProfile from "./User/StartupProfile";
import SignIn from "./User/SignIn";
import SignUp from "./User/SignUp";
import Home from "./Home/Home";
import CreateIdea from "./Idea/CreateIdea";
import IdeaList from "./Idea/IdeaList";

function Routes() {
  return (
    <Switch>
      <Route path="/ideas">
        <IdeaList />
      </Route>

      <Route path="/createidea">
        <CreateIdea />
      </Route>

      <Route path="/startupProfile">
        <StartupProfile />
      </Route>

      <Route path="/signin">
        <SignIn />
      </Route>

      <Route path="/signup">
        <SignUp />
      </Route>

      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
}
export default Routes;
