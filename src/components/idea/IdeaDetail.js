//React
import { useSelector } from "react-redux";
import { Link, Redirect, useParams } from "react-router-dom";

//Styling
import {
  DetailDiv,
  L,
  L2,
  H4,
  ButtonC,
  ButtonI,
  ButtonD,
  ButtonP,
  ButtonDiv,
  ImageD,
  Abutton,
  ImageP,
} from "../../style";
import moment from "moment";

import { BsFillChatDotsFill } from "react-icons/bs";
import { Email } from "@material-ui/icons";

const IdeaDetail = () => {
  const ideas = useSelector((state) => state.ideas.ideas);
  const users = useSelector((state) => state.users.users);
  const user = useSelector((state) => state.user.user);

  const ideaSlug = useParams().ideaSlug;
  const idea = ideas.find((idea) => idea.slug === ideaSlug);
  const ideaProgress = (idea.recievedFund / idea.fundAmount) * 100;
  const ideaOwner = users.find((user) => user.id === idea.ownerId);

  if (!idea) return <Redirect to="/" />;

  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-3">
            <div class="profile-card-2">
              <ImageP
                src={ideaOwner.profilePicture}
                class="img img-responsive"
              />
              <div class="profile-name">
                {ideaOwner.firstName} {ideaOwner.lastName}
              </div>
              <div class="profile-username">{ideaOwner.email}</div>
              <Email>Email : {ideaOwner.email}</Email>
              <h5>Age : {ideaOwner.age}</h5>
              <h5>Country : {ideaOwner.country}</h5>
              <h5>Education : {ideaOwner.education}</h5>
              <h5> About me :{ideaOwner.experiance}</h5>

              {user && (
                <L2 to={`/ideas/${idea.slug}/chat`}>
                  <BsFillChatDotsFill />
                </L2>
              )}
            </div>
          </div>

          <div class="col-9">
            <DetailDiv class="card mb-3" style={{ maxwidth: "540px" }}>
              <div class="row g-0">
                <div class="col-md-12">
                  <ImageD
                    src={idea.ideaPicture}
                    class="img-fluid rounded-start"
                    alt={idea.ideaName}
                  />
                </div>

                <div class="col-md-10">
                  <div class="card-body">
                    <h5 class="card-title">{idea.ideaName}</h5>
                    <h6 class="card-text">{idea.fundType}</h6>

                    <img
                      src="https://img.icons8.com/office/16/000000/money--v1.png"
                      alt="money"
                    />

                    <address>
                      {idea?.recievedFund}JD of {idea.fundAmount}JD
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

                    {idea.fundAmount !== idea.recievedFund && (
                      <ButtonDiv>
                        {idea.fundType === "donation" && (
                          <L to={`/donation/${idea.slug}`}>
                            <ButtonD> Donate </ButtonD>
                          </L>
                        )}
                        {idea.fundType === "investment" && (
                          <L to={`/investment/${idea.slug}`}>
                            <ButtonI> Invest </ButtonI>
                          </L>
                        )}
                        {idea.fundType === "consultation" && (
                          <L to={`/ideas/${idea.slug}/chat`}>
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
                          <L to={`/ideas/${idea.slug}/chat`}>
                            <ButtonC class="btn btn-success">
                              Consultation{" "}
                            </ButtonC>
                          </L>
                        )}
                      </ButtonDiv>
                    )}
                    <H4>About the idea</H4>
                    <p class="card-text">
                      About the Idea :{idea.ideaDescription}
                    </p>

                    <L to={`/${idea.ideaPdf}`}>
                      <ButtonP>Idea PDF</ButtonP>
                    </L>

                    <p class="card-text">
                      <small class="text-muted">
                        Idea created at {moment(idea.createdAt).format("ll")} by{" "}
                        {ideaOwner?.firstName} {ideaOwner?.lastName}
                      </small>
                    </p>
                  </div>
                </div>
              </div>
              {idea.fundType === "all" &&
                idea.recievedFund === idea.fundAmount &&
                idea.status === true && (
                  <Link to={`/agreementform/${idea.slug}`}>
                    <Abutton type="button" class="btn btn-outline-success">
                      Agreement
                    </Abutton>
                  </Link>
                )}
              {idea.fundType === "donation" &&
                idea.recievedFund === idea.fundAmount &&
                idea.status === true && (
                  <Link to={`/withdraw/${idea.slug}`}>
                    <Abutton type="button" class="btn btn-outline-success">
                      Withdraw
                    </Abutton>
                  </Link>
                )}
            </DetailDiv>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row"></div>
      </div>
    </>
  );
};
export default IdeaDetail;
