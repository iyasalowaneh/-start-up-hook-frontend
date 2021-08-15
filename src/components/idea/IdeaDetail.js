import { useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";

//Styling
import { DetailDiv, L, Button } from "../../style";
const IdeaDetail = () => {
  const ideas = useSelector((state) => state.ideas.ideas);
  const users = useSelector((state) => state.users.users);
  // console.log(users);
  const ideaSlug = useParams().ideaSlug;
  const idea = ideas.find((idea) => idea.slug === ideaSlug);

  const ideaOwner = users.find((user) => user.id === idea.ownerId);

  console.log(ideaOwner);
  if (!idea) return <Redirect to="/" />;

  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-2">
            <h1>
              <div class="card" style={{ width: "18rem" }}>
                <img
                  src={ideaOwner.profilePicture}
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">
                    {ideaOwner.firstName} {ideaOwner.lastName}
                  </h5>
                  <h6>Email :{ideaOwner.email}</h6>
                  <h6>Age :{ideaOwner.age}</h6>
                  <h6>Country :{ideaOwner.country}</h6>
                  <h6>Education :{ideaOwner.education}</h6>
                  <h6> About me :{ideaOwner.experiance}</h6>
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
                    alt={idea.ideaName}
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">{idea.ideaName}</h5>
                    <h4>About the idea</h4>
                    <p class="card-text">
                      About the Idea :{idea.ideaDescription}
                    </p>
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
                        {idea.recievedFund}/{idea.fundAmount}$
                      </div>
                    </div>
                    <L to={`/${idea.ideaPdf}`}> Idea PDF</L>

                    <L> Donate</L>

                    <L> Invest</L>

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
