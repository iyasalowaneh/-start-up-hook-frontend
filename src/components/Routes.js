// react
import { Route, Switch } from "react-router";

// components
import IdeaDetail from "./Idea/IdeaDetail";
import StartupProfile from "./User/StartupProfile";
import SignIn from "./User/SignIn";
import SignUp from "./User/SignUp";
import Home from "./Home/Home";
import CreateIdea from "./Idea/CreateIdea";
import IdeaList from "./Idea/IdeaList";
import InvestForm from "./Idea/InvestForm";

function Routes() {
  return (
    <Switch>
      <Route path="/investment/:ideaSlug">
        <InvestForm />
      </Route>
      <Route path="/ideas/:ideaSlug">
        <IdeaDetail />
      </Route>

      <Route path="/ideas">
        <IdeaList />
      </Route>

      <Route path="/createIdea">
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
