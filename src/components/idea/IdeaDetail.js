//React
import { useSelector } from "react-redux";
import { Link, Redirect, useParams } from "react-router-dom";

//Styling
import { DetailDiv, L } from "../../style";
const IdeaDetail = () => {
	const ideas = useSelector((state) => state.ideas.ideas);
	const user = useSelector((state) => state.user.user);
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
									<h6>Email :{ideaOwner.email}</h6>
									<h6>Age :{ideaOwner.age}</h6>
									<h6>Country :{ideaOwner.country}</h6>
									<h6>Education :{ideaOwner.education}</h6>
									<h6> About me :{ideaOwner.experiance}</h6>
									{/* <L to={`/chatLits/${idea.slug}`}>chat with ideaOnwe </L> */}

									<L to={`/chatLits/${idea.slug}`}>chat with investors </L>
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
										<img
											src="https://img.icons8.com/office/16/000000/money--v1.png"
											alt="money"
										/>

										<address>
											{idea?.recievedFund}$ of {idea.fundAmount}${" "}
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
										<L to={`/${idea.ideaPdf}`}> Idea PDF</L>

										<L to={`/donation/${idea.slug}`}> Donate</L>

										<L to={`/investment/${idea.slug}`}>Invest</L>

										<p class="card-text">
											<small class="text-muted">
												Idea created at {idea.createdAt.slice(0, 10)} by{" "}
												{ideaOwner?.firstName} {ideaOwner?.lastName}
											</small>
										</p>
									</div>
								</div>
							</div>
							<Link to={`/AgreementForm/${idea.slug}`}>
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
