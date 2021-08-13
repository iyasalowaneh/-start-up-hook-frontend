import { useSelector } from "react-redux";
//components
import IdeaItem from "./IdeaItem";

const IdeaList = () => {
  const ideas = useSelector((state) => state.ideas.ideas);
  console.log(ideas);
  let ideaArray = ideas.map((idea) => <IdeaItem idea={idea} key={idea.id} />);
  return <div>{ideaArray}</div>;
};

export default IdeaList;
