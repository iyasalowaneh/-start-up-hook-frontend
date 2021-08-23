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
  ImageD,
  Abutton,
  DivColor,
} from "../../style";
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
              <img src={ideaOwner.profilePicture} class="img img-responsive" />
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
          {/* <h1>
							<DivColor class="card" style={{ width: "18rem" }}>
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

									{user && (
										<L2 to={`/chatLits/${idea.slug}`}>
											<BsFillChatDotsFill />
										</L2>
									)}
								</div>
							</DivColor>
						</h1>
					</div> */}

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
                        Idea created at {idea.createdAt.slice(0, 10)} by{" "}
                        {ideaOwner?.firstName} {ideaOwner?.lastName}
                      </small>
                    </p>
                  </div>
                </div>
              </div>
              {idea.fundType === "investment" &&
                idea.recievedFund === idea.fundAmount && (
                  <Link to={`/agreementform/${idea.slug}`}>
                    <Abutton type="button" class="btn btn-outline-success">
                      Agreement
                    </Abutton>
                  </Link>
                )}
              {idea.fundType === "donation" &&
                idea.recievedFund === idea.fundAmount && (
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
        <div class="row">
          {/* <div class="col-md-4">
						<h4 class="text-center">
							<strong>STYLE 1</strong>
						</h4>
						<div class="profile-card-2">
							<img
								src="https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW4lMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
								class="img img-responsive"
							/>
							<div class="profile-name">JOHN DOE</div>
							<div class="profile-username">@johndoesurname</div>
							<div class="profile-icons">
								<a href="#">
									<i class="fa fa-facebook"></i>
								</a>
								<a href="#">
									<i class="fa fa-twitter"></i>
								</a>
								<a href="#">
									<i class="fa fa-linkedin"></i>
								</a>
							</div>
						</div>
					</div> */}
        </div>
      </div>
    </>
  );
};
export default IdeaDetail;
