import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import MessageList from "../Chat/MessageList";
import InvestorList from "../User/InvestorList";
//styling
import { MsgList } from "../../style";
const ChatRoom = () => {
  // const [ownerSlug,setOwnerSlug]=useState("")

  const ideas = useSelector((state) => state.ideas.ideas);
  const users = useSelector((state) => state.users.users);
  const user = useSelector((state) => state.user.user);

  const ideaSlug = useParams().ideaSlug;
  const ideaOwnerSlug = useParams().ideaOwnerSlug;

  // const ideaOwner = users.find((user) => user.slug === ideaOwnerSlug);
  const idea = ideas.find((idea) => idea.slug === ideaSlug);

  const ideaOwner = users.find((u) => u.id === idea.ownerId);
  // console.log(idea);

  // console.log(ideaOwner);
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
