import { useSelector } from "react-redux";
//components
import AdminIdeaItem from "./AdminIdeaItem";

const AdminIdeaList = () => {
  const ideas = useSelector((state) => state.ideas.ideas);
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
