//styling
import { IdeaDiv, Button, L } from "../../style";

const IdeaItem = (props) => {
  const idea = props.idea;

  return (
    <>
      <div class="col-sm-3">
        <IdeaDiv class="card">
          <img src={idea.ideaPicture} class="card-img-top" alt={idea.name} />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <div class="progress">
              <div
                class="progress-bar progress-bar-striped bg-success"
                role="progressbar"
                style={{ width: "25%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                50%
              </div>
            </div>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
            <L to={`/ideas/${idea.slug}`}>
              <Button>More detials about my idea</Button>
            </L>
          </div>
        </IdeaDiv>
      </div>
    </>
  );
};

export default IdeaItem;
