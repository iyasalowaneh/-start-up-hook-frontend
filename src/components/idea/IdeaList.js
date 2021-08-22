import { useSelector } from "react-redux";
//components
import IdeaItem from "./IdeaItem";
import { IdeaDiv } from "../../style";
const IdeaList = () => {
  const ideas = useSelector((state) => state.ideas.ideas);
  let ideaArray = ideas
    .filter((_idea) => _idea.status === true)
    .map((idea) => <IdeaItem idea={idea} key={idea?.id} />);

  return (
    <>
      <div>
        <div class="row">{ideaArray}</div>
      </div>

      {/* <div class="card shadow-xl image-full">
        <figure>
          <img src="https://picsum.photos/id/1005/400/250" />
        </figure>
        <div class="justify-end card-body">
          <h2 class="card-title">Image overlay</h2>
          <p>
            Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit
            sit necessitatibus veritatis sed molestiae voluptates incidunt iure
            sapiente.
          </p>
          <div class="card-actions">
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default IdeaList;
