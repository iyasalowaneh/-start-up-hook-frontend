import { useSelector } from "react-redux";
import { useParams } from "react-router";
import MessageList from "../Chat/MessageList";
import InvestorList from "../User/InvestorList";

const ChatRoom = () => {
  const ideas = useSelector((state) => state.ideas.ideas);
  const user = useSelector((state) => state.user.user);

  const ideaSlug = useParams().ideaSlug;
  const ideaOwnerSlug = useParams().ideaOwnerSlug;

  const idea = ideas.find((idea) => idea.slug === ideaSlug);

  console.log(idea);
  console.log(ideaOwnerSlug);

  return (
    <>
      <InvestorList idea={idea} user={user} />
      {ideaOwnerSlug && <MessageList ideaOwnerSlug={ideaOwnerSlug} />}{" "}
    </>
  );
};
export default ChatRoom;
