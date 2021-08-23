import { useSelector } from "react-redux";
import DonorItem from "./DonorItem";
import "./GeneralDash.css";
import { Charts, HH1, ImageLogo, Imgoo } from "../../style";
import InvTransaction from "./InvTransaction";
import { Pie, Doughnut, Bar } from "react-chartjs-2";

const GeneralDashBoard = () => {
	const ideas = useSelector((state) => state.ideas.ideas);
	const user = useSelector((state) => state.user.user);
	const donorusers = useSelector((state) => state.donorUser.donorUser);
	const ideaUsers = useSelector((state) => state.ideasUser.ideasUser);
	const ideaDonation = donorusers.map((ideadon) => (
		<DonorItem ideadon={ideadon} key={ideadon.donorId} />
	));
	const liveIdeas = ideas.filter((idea) => idea.status === true);
	const successIdea = ideas.filter(
		(idea) => idea.fundAmount === idea.recievedFund
	);
	const amounts = ideaUsers.map((e) => e.amount).reduce((a, b) => a + b);
	const amountsDonation = donorusers
		.map((a) => a.amount)
		.reduce((a, b) => a + b);

	const ideaInvetments = ideaUsers?.map((ideaivs) => (
		<InvTransaction ideaivs={ideaivs} key={ideaivs.investorId} />
	));

	const totalTransactions = ideaDonation.length + ideaInvetments.length;

	const state = {
		labels: ["investment amount ", "donation amount"],
		datasets: [
			{
				label: "Rainfall",
				backgroundColor: ["#C9DE00", "#2FDE00", "#00A6B4", "#6800B4"],
				hoverBackgroundColor: [
					"#501800",
					"#4B5000",
					"#175000",
					"#003350",
					"#35014F",
				],
				data: [amounts, amountsDonation],
			},
		],
	};

	const state1 = {
		labels: ["total ideas", "success ideas"],
		datasets: [
			{
				label: "Rainfall",
				backgroundColor: ["#00A6B4", "#6800B4"],
				hoverBackgroundColor: ["#175000", "#003350", "#35014F"],
				data: [ideas.length, successIdea.length],
			},
		],
	};

	const state3 = {
		labels: ["accepted ideas", "rejected ideas"],
		datasets: [
			{
				label: "Rainfall",
				backgroundColor: ["#00A6B4", "#6800B4"],
				hoverBackgroundColor: ["#175000", "#003350", "#35014F"],
				data: [ideas.length, ideas * 2],
			},
		],
	};

	return (
		<div class="grid-container">
			<Charts>
				<div>
					<h1>LIVE IDEAS</h1>
					<br />
					<h1>{liveIdeas.length}</h1>
				</div>
			</Charts>
			<Charts>
				<div>
					<h1> TRANSACTIONS</h1>
					<br />
					<h1>{totalTransactions} </h1>
				</div>
			</Charts>
			<Charts>
				<div>
					<h1> OUR TARGET</h1>
					<br />
					<h1>
						1000 <br />
						success story
					</h1>
				</div>
			</Charts>
			<div>
				<Charts>
					<Pie
						data={state}
						options={{
							title: {
								display: true,
								text: "Average Rainfall per month",
								fontSize: 20,
							},
							legend: {
								display: true,
								position: "right",
							},
						}}
					/>
				</Charts>
				<HH1>total investment = {amounts}</HH1>
				<HH1>total donation = {amountsDonation}</HH1>
			</div>
			<div>
				<Charts>
					<Doughnut
						data={state1}
						options={{
							title: {
								display: true,
								text: "Average Rainfall per month",
								fontSize: 20,
							},
							legend: {
								display: true,
								position: "right",
							},
						}}
					/>
				</Charts>
				<HH1>total ideas = {ideas.length}</HH1>
				<HH1>success ideas = {successIdea.length}</HH1>
			</div>
			<div>
				<Charts>
					<Doughnut
						data={state3}
						options={{
							title: {
								display: true,
								text: "Average Rainfall per month",
								fontSize: 20,
							},
							legend: {
								display: true,
								position: "right",
							},
						}}
					/>
				</Charts>
				<HH1>accepted ideas = {ideas}</HH1>
				<HH1>rejected ideas = {ideas * 2}</HH1>
			</div>
			<div>
				<Charts>
					<Doughnut
						data={state}
						options={{
							title: {
								display: true,
								text: "Average Rainfall per month",
								fontSize: 20,
							},
							legend: {
								display: true,
								position: "right",
							},
						}}
					/>
				</Charts>
			</div>

			<div></div>
		</div>
	);
};

export default GeneralDashBoard;
