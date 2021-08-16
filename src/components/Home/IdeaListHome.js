//components
import IdeaItemHome from "./IdeaItemHome";

const IdeaListHome = ({ ideas }) => {
  let ideaArray = ideas.map((idea) => (
    <IdeaItemHome idea={idea} key={idea?.id} />
  ));
  return (
    <>
      <div>
        <div class="row">{ideaArray}</div>
      </div>
    </>
  );
};

export default IdeaListHome;
