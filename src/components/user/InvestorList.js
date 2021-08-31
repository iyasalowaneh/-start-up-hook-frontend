//react
import { useSelector } from "react-redux";
//components
import "./Chat.css";
import IdeaOwnerItem from "./IdeaOwnerItem";
import InvestorItem from "./InvestorItem";
import ConsultantItem from "./ConsultantItem";
const InvestorList = ({ idea }) => {
  const user = useSelector((state) => state.user.user);
  const ideaUsers = useSelector((state) => state.ideasUser.ideasUser);
  const users = useSelector((state) => state.users.users);
  const invList = ideaUsers
    .filter((inv) => inv.ideaId === idea.id)
    .map((inv) => users.find((user) => user.id === inv.investorId))
    .map((ideaInv) => <InvestorItem ideaInv={ideaInv} key={ideaInv.id} />);

  const ownerList = users
    .filter((user) => user.id === idea.ownerId)
    .map((ideaOwner) => (
      <IdeaOwnerItem ideaOwner={ideaOwner} key={ideaOwner.id} />
    ));
  const consultantList = users
    .filter((user) => user.type === "consultant")
    .map((consultant) => (
      <ConsultantItem consultant={consultant} key={consultant.id} />
    ));
  console.log(consultantList);
  return (
    <>
      <img
        className="image"
        src="https://images.fineartamerica.com/images-medium-large-5/neon-blue-speech-bubble-ikon-ikon-images.jpg"
        alt="chat icon"
      />
      {user.type === "startup" && (
        <aside>
          <ul>
            {invList}
            {consultantList}
          </ul>
        </aside>
      )}

      {user.type === "investor" && (
        <aside>
          <ul>{ownerList}</ul>
        </aside>
      )}
      {user.type === "consultant" && (
        <aside>
          <ul>{ownerList}</ul>
        </aside>
      )}
    </>
  );
};

export default InvestorList;
