//React
import { useSelector } from "react-redux";
import { Link, Redirect, useParams } from "react-router-dom";

//Styling
import {
  DetailDiv,
  L,
  L2,
  P1,
  H4,
  ButtonC,
  ButtonI,
  ButtonD,
  ButtonP,
  ButtonDiv,
} from "../../style";
import { BsFillChatDotsFill } from "react-icons/bs";

const IdeaDetail = () => {
  const ideas = useSelector((state) => state.ideas.ideas);
  const users = useSelector((state) => state.users.users);

  const ideaSlug = useParams().ideaSlug;
  const idea = ideas.find((idea) => idea.slug === ideaSlug);
  const ideaProgress = (idea.recievedFund / idea.fundAmount) * 100;
  const ideaOwner = users.find((user) => user.id === idea.ownerId);

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
                  <P1>Email : {ideaOwner.email}</P1>
                  <P1>Age : {ideaOwner.age}</P1>
                  <P1>Country : {ideaOwner.country}</P1>
                  <P1>Education : {ideaOwner.education}</P1>
                  <P1> About me :{ideaOwner.experiance}</P1>

                  <L2 to={`/chatLits/${idea.slug}`}>
                    <BsFillChatDotsFill />
                  </L2>
                </div>
              </div>
            </h1>
          </div>

          <div class="col-9">
            <DetailDiv class="card mb-3" style={{ maxwidth: "540px" }}>
              <div class="row g-0">
                <div class="col-md-12">
                  <img
                    src={idea.ideaPicture}
                    class="img-fluid rounded-start"
                    alt={idea.ideaName}
                  />
                </div>

                <div class="col-md-10">
                  <div class="card-body">
                    <h5 class="card-title">{idea.ideaName}</h5>
                    <p class="card-text">Fund type: {idea.fundType}</p>

                    <img
                      src="https://img.icons8.com/office/16/000000/money--v1.png"
                      alt="money"
                    />

                    <address>
                      {idea?.recievedFund}$ of {idea.fundAmount}$
                    </address>
                    <div class="progress">
                      <div
                        class="progress-bar progress-bar-striped bg-success"
                        role="progressbar"
                        style={{ width: `${ideaProgress}%` }}
                        aria-valuenow={idea.recievedFund}
                        aria-valuemin="0"
                        aria-valuemax={idea.fundAmount}
                      >
                        {parseInt(ideaProgress)}%
                      </div>
                    </div>
                    <ButtonDiv>
                      {idea.fundType === "donat" && (
                        <L to={`/donation/${idea.slug}`}>
                          <ButtonD> Donate </ButtonD>
                        </L>
                      )}
                      {idea.fundType === "invest" && (
                        <L to={`/investment/${idea.slug}`}>
                          <ButtonI> Invest </ButtonI>
                        </L>
                      )}
                      {idea.fundType === "consult" && (
                        <L to={`/chatLits/${idea.slug}`}>
                          <ButtonC class="btn btn-success">
                            Consultation{" "}
                          </ButtonC>
                        </L>
                      )}
                      {idea.fundType === "all" && (
                        <L to={`/donation/${idea.slug}`}>
                          <ButtonD> Donate </ButtonD>
                        </L>
                      )}
                      {idea.fundType === "all" && (
                        <L to={`/investment/${idea.slug}`}>
                          <ButtonI> Invest </ButtonI>
                        </L>
                      )}
                      {idea.fundType === "all" && (
                        <L to={`/chatLits/${idea.slug}`}>
                          <ButtonC class="btn btn-success">
                            Consultation{" "}
                          </ButtonC>
                        </L>
                      )}
                    </ButtonDiv>
                    <H4>About the idea</H4>
                    <p class="card-text">
                      About the Idea :{idea.ideaDescription}
                    </p>

                    <L to={`/${idea.ideaPdf}`}>
                      <ButtonP>Idea PDF</ButtonP>
                    </L>

                    <p class="card-text">
                      <small class="text-muted">
                        Idea created at {idea.createdAt.slice(0, 10)} by{" "}
                        {ideaOwner?.firstName} {ideaOwner?.lastName}
                      </small>
                    </p>
                  </div>
                </div>
              </div>
              <Link to={`/agreementform/${idea.slug}`}>
                <button type="button" class="btn btn-outline-success">
                  Agreement
                </button>
              </Link>
            </DetailDiv>
          </div>
        </div>
      </div>
    </>
  );
};
export default IdeaDetail;
