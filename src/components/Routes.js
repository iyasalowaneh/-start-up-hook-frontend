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
import Payment from "./Payment/Payment";
import AgreementForm from "./Idea/AgreemntForm";
import ThankYouPage from "./Idea/ThankYouPage";
import MessageList from "./Chat/MessageList";
import AdminIdeaList from "./Idea/AdminIdeaList";
import AdminIdeaDetail from "./Idea/AdminIdeaDetail";
function Routes() {
  return (
    <Switch>
      <Route path="/chat/:ideaOwnerSlug">
        <MessageList />
      </Route>
      <Route path="/investment/:ideaSlug">
        <InvestForm />
      </Route>
      <Route path="/ideas/:ideaSlug">
        <IdeaDetail />
      </Route>

      <Route path="/ThankYouPage">
        <ThankYouPage />
      </Route>
      <Route path="/checkout">
        <Payment />
      </Route>
      <Route path="/AgreementForm/:ideaSlug">
        <AgreementForm />
      </Route>

      <Route path="/adminlist/:ideaSlug">
        <AdminIdeaDetail />
      </Route>
      <Route path="/adminlist">
        <AdminIdeaList />
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
