import { useSelector } from "react-redux";
import DonorItem from "./DonorItem";
import "./DashBoard.css";
import { ImageLogo, Imgoo } from "../../style";
import InvTransaction from "./InvTransaction";

const DashBoard = () => {
	const ideas = useSelector((state) => state.ideas.ideas);
	const user = useSelector((state) => state.user.user);
	const donorusers = useSelector((state) => state.donorUser.donorUser);
	const ideaUsers = useSelector((state) => state.ideasUser.ideasUser);

	const userIdea = ideas.find((idea) => idea.ownerId === user.id);
	const ideaDonation = donorusers
		.filter((donor) => donor.ideaId === userIdea.id)
		.map((ideadon) => <DonorItem ideadon={ideadon} key={ideadon.donorId} />);

	const ideaInvetments = ideaUsers
		.filter((ivs) => ivs.ideaId === userIdea.id)
		.map((ideaivs) => (
			<InvTransaction ideaivs={ideaivs} key={ideaivs.investorId} />
		));

	const neededFund = userIdea.fundAmount - userIdea.recievedFund;
	return (
		<div class="wrapper rounded">
			<nav class="navbar navbar-expand-lg navbar-dark dark d-lg-flex align-items-lg-start">
				{" "}
				<a class="navbar-brand" href="#">
					Transactions{" "}
					<p class="text-muted pl-1">Welcome to your transactions</p>{" "}
					<p class="text-muted pl-1">
						Your requested fund is <b>{userIdea.fundAmount} JD</b>{" "}
					</p>
				</a>{" "}
				<button
					class="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					{" "}
					<span class="navbar-toggler-icon"></span>{" "}
				</button>
				<div class="collapse navbar-collapse" id="navbarNav">
					<ul class="navbar-nav ml-lg-auto"></ul>
				</div>
			</nav>
			<div class="row mt-2 pt-2">
				<div class="col-md-6" id="income">
					<div class="d-flex justify-content-start align-items-center">
						<Imgoo src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Ski_trail_rating_symbol-green_circle.svg/600px-Ski_trail_rating_symbol-green_circle.svg.png" />{" "}
						<p class="text mx-3">Recived fund </p>
						<p class="text-white ml-4 money">{userIdea.recievedFund} JD</p>
					</div>
				</div>
				<div class="col-md-6">
					<div class="d-flex justify-content-md-end align-items-center">
						<Imgoo src="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/58674/red-circle-emoji-clipart-xl.png" />
						"<div class="text mx-3">needed fund</div>
						<div class="text-white ml-4 money">{neededFund}JD</div>
					</div>
				</div>
			</div>
			<div class="d-flex justify-content-between align-items-center mt-3">
				<ul class="nav nav-tabs w-75">
					<li class="nav-item">
						{" "}
						<a class="nav-link active" href="#history">
							Transactions
						</a>{" "}
					</li>
				</ul>{" "}
				<button class="btn btn-primary">New Transaction</button>
			</div>
			<div class="table-responsive mt-3">
				<table class="table table-dark table-borderless">
					<thead>
						<tr>
							<th scope="col">Activity</th>
							<th scope="col">type</th>
							<th scope="col">Date</th>
							<th scope="col" class="text-right">
								Amount
							</th>
						</tr>
					</thead>
					<tbody>
						{ideaDonation}
						{ideaInvetments}
					</tbody>
				</table>
			</div>
			<div class="d-flex justify-content-between align-items-center results">
				{" "}
				<span class="pl-md-3">
					Showing<b class="text-white"> 1-7 0f 200 </b> trasactions
				</span>
				<div class="pt-3">
					<nav aria-label="Page navigation example">
						<ul class="pagination">
							<li class="page-item disabled">
								{" "}
								<a class="page-link" href="#" aria-label="Previous">
									{" "}
									<span aria-hidden="true">&lt;</span>{" "}
								</a>{" "}
							</li>
							<li class="page-item">
								{" "}
								<a class="page-link" href="#" aria-label="Next">
									{" "}
									<span aria-hidden="true">&gt;</span>{" "}
								</a>{" "}
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default DashBoard;
