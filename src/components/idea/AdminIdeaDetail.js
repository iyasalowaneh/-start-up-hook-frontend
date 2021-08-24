//React
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect, useParams } from "react-router-dom";
//actions
import { updateIdea } from "../../store/actions/ideaAction";
//Styling
import { DetailDiv, L, Button, ButtonP, H4, P1, L2 } from "../../style";
import { BsFillChatDotsFill } from "react-icons/bs";
import moment from "moment";

const AdminIdeaDetail = () => {
  const ideas = useSelector((state) => state.ideas.ideas);
  const users = useSelector((state) => state.users.users);

  const ideaSlug = useParams().ideaSlug;
  const idea = ideas.find((idea) => idea.slug === ideaSlug);
  const ideaProgress = (idea.recievedFund / idea.fundAmount) * 100;
  const ideaOwner = users.find((user) => user.id === idea.ownerId);

  const dispatch = useDispatch();

  const approve = () => {
    dispatch(updateIdea({ ...updateIdea, status: true, ideaId: idea.id }));
  };
  const reject = () => {
    alert("the idea has been rejected");
  };

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

                    <H4>About the idea</H4>
                    <p class="card-text">
                      About the Idea :{idea.ideaDescription}
                    </p>

                    <L to={`/${idea.ideaPdf}`}>
                      <ButtonP>Idea PDF</ButtonP>
                    </L>

                    {idea.status === false ? (
                      <>
                        <Button onClick={() => approve()}>Approve </Button>

                        <Button onClick={() => reject()}>reject</Button>
                      </>
                    ) : (
                      <div class="alert alert-success" role="alert">
                        The idea has been approved,{" "}
                        <Link to="/adminlist" class="alert-link">
                          go back to Admin dashboard.
                        </Link>
                      </div>
                    )}

                    <p class="card-text">
                      <small class="text-muted">
                        Idea created at {moment(idea.createdAt).format("ll")} by{" "}
                        {ideaOwner?.firstName} {ideaOwner?.lastName}
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
export default AdminIdeaDetail;
