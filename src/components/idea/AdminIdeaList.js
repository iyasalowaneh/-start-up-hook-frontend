import { useSelector } from "react-redux";
import { useHistory } from "react-router";
//components
import AdminIdeaItem from "./AdminIdeaItem";

const AdminIdeaList = () => {
  const ideas = useSelector((state) => state.ideas.ideas);
  const user = useSelector((state) => state.user.user);

  const history = useHistory();
  if (!user || user.type !== "admin") {
    history.push("/");
  }
  let ideaArray = ideas
    .filter((_idea) => _idea.status === false)
    .map((idea) => <AdminIdeaItem idea={idea} key={idea?.id} />);
  return (
    <>
      <div>
        <div class="row">{ideaArray}</div>
      </div>
    </>
  );
};

export default AdminIdeaList;
