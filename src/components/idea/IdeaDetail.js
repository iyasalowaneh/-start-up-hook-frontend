import { useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

//Styling
import { DetailDiv } from "../../style";
const IdeaDetail = () => {
  const ideas = useSelector((state) => state.ideas.ideas);

  const ideaSlug = useParams().ideaSlug;
  const idea = ideas.find((idea) => idea.slug === ideaSlug);

  if (!idea) return <Redirect to="/" />;

  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-2">
            <h1>
              <div class="card" style={{ width: "18rem" }}>
                <img
                  src="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </h1>
          </div>

          <div class="col-9">
            <DetailDiv class="card mb-3" style={{ maxwidth: "540px" }}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    src={idea.ideaPicture}
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">{idea.ideaName}</h5>
                    <h4>About the idea</h4>
                    <p class="card-text">{idea.ideaDescription}</p>
                    <p class="card-text">Fund type: {idea.fundType}</p>

                    <div class="progress">
                      <div
                        class="progress-bar progress-bar-striped bg-success"
                        role="progressbar"
                        style={{ width: "25%" }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        amount/{idea.fundAmount}$
                      </div>
                    </div>
                    <Link to={`/${idea.ideaPdf}`}>Idea PDF</Link>

                    <p class="card-text">
                      <small class="text-muted">
                        Idea created at {idea.createdAt.slice(0, 10)}
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </DetailDiv>
          </div>
        </div>
      </div>
    </>
  );
};
export default IdeaDetail;
