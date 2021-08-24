import { FullDiv, HH1, Odiv, Tabo, Wdiv } from "../../style";
import "./Gdash.css";
import { useSelector } from "react-redux";
import DonorItem from "./DonorItem";
import "./DashBoard.css";
import { Charts, ImageLogo, Imgoo } from "../../style";
import InvTransaction from "./InvTransaction";
import { Pie, Doughnut } from "react-chartjs-2";
import AllInvTransaction from "./AllInvTransaction";
import AllDonTransaction from "./AllDonTransaction";
const Gdash = () => {
	const ideas = useSelector((state) => state.ideas.ideas);
	const user = useSelector((state) => state.user.user);
	const donorusers = useSelector((state) => state.donorUser.donorUser);
	const ideaUsers = useSelector((state) => state.ideasUser.ideasUser);
	const ideaDonation = donorusers.map((ideadon) => (
		<AllDonTransaction ideadon={ideadon} key={ideadon.donorId} />
	));
	console.log(donorusers);
	const liveIdeas = ideas.filter((idea) => idea.status === true);
	const successIdea = ideas.filter(
		(idea) => idea.fundAmount === idea.recievedFund
	);
	const amounts = ideaUsers.map((e) => e.amount).reduce((a, b) => a + b, 0);
	const amountsDonation = donorusers
		.map((a) => a.amount)
		.reduce((a, b) => a + b, 0);

	const ideaInvetments = ideaUsers?.map((ideaivs) => (
		<AllInvTransaction ideaivs={ideaivs} key={ideaivs.investorId} />
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

	return (
		<body scroll="off">
			<Odiv>
				<FullDiv class="home-section">
					<div class="home-content">
						<div class="overview-boxes">
							<div class="box">
								<div class="right-side">
									<div class="box-topic">Transactions </div>
									<div class="number">{totalTransactions}</div>
									<div class="indicator">
										<i
											class="bx bx-up-arrow-alt"
											style={{ backgroundColor: "greenyellow" }}
										></i>
										<span class="text">no limit</span>
									</div>
								</div>
								<i class="bx bx-cart-alt cart"></i>
							</div>
							<div class="box">
								<div class="right-side">
									<div class="box-topic">Total investment</div>
									<div class="number">{amounts} JD</div>
									<div class="indicator">
										<i class="bx bx-up-arrow-alt"></i>
										<span class="text">target is 500.000 JD</span>
									</div>
								</div>
								<i class="bx bxs-cart-add cart two"></i>
							</div>
							<div class="box">
								<div class="right-side">
									<div class="box-topic">Total Donation</div>
									<div class="number">{amountsDonation} JD</div>
									<div class="indicator">
										<i
											class="bx bx-up-arrow-alt"
											style={{ backgroundColor: "blueviolet" }}
										></i>
										<span class="text">target is 100.000 JD</span>
									</div>
								</div>
								<i class="bx bx-cart cart three"></i>
							</div>
							<div class="box">
								<div class="right-side">
									<div class="box-topic">Success story</div>
									<div class="number">{successIdea.length}</div>
									<div class="indicator">
										<i
											class="bx bx-down-arrow-alt down"
											style={{ backgroundColor: "turquoise" }}
										></i>
										<span class="text">target is 1000 JD</span>
									</div>
								</div>
								<i class="bx bxs-cart-download cart four"></i>
							</div>
						</div>
						<Tabo>
							<tr></tr>
							<td>
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
							</td>
							<td>
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
							</td>
						</Tabo>
						<div>
							<Wdiv>
								{" "}
								<h3> Investment Transactions</h3>
								<table>
									<tr>
										<th>Type</th>
										<th>Time</th>
										<th>Amount</th>
									</tr>
									{ideaInvetments}
								</table>
							</Wdiv>
							<Wdiv>
								<h3> Donation Transactions</h3>

								<table>
									<tr>
										<th>Type</th>
										<th>Time</th>
										<th>Amount</th>
									</tr>
									{ideaDonation}
								</table>
							</Wdiv>
						</div>
					</div>
					<div></div>
				</FullDiv>
			</Odiv>
		</body>
	);
};
export default Gdash;
