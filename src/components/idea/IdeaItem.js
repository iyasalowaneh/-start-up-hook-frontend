//styling
import { IdeaDiv, Button, L } from "../../style";

const IdeaItem = (props) => {
  const idea = props.idea;
  const ideaProgress = (idea.recievedFund / idea.fundAmount) * 100;
  return (
    <>
      <div class="col-sm-3">
        <IdeaDiv class="card">
          <img src={idea.ideaPicture} class="card-img-top" alt={idea.name} />
          <div class="card-body">
            <h5 class="card-title">{idea.ideaName}</h5>
            <>
              <img src="https://img.icons8.com/office/16/000000/money--v1.png" />
              <address>
                {idea.recievedFund}$ of {idea.fundAmount}${" "}
              </address>
              <div class="progress">
                <div
                  class="progress-bar progress-bar-striped bg-success"
                  role="progressbar"
                  style={{ width: `${ideaProgress}%` }}
                  aria-valuenow={idea.recievedFund}
                  aria-valuemin="0"
                  aria-valuemax={idea.fundAmount}
                ></div>
              </div>
            </>
            <p class="card-text">{idea.ideaDescription}</p>
            <p class="card-text">
              <small class="text-muted">{idea.createdAt.slice(0, 10)}</small>
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
