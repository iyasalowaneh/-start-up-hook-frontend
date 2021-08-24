import { useSelector } from "react-redux";
import { HH1 } from "../../style";
import "./BestInv.css";

const BestInv = () => {
	const ideaUsers = useSelector((state) => state.ideasUser.ideasUser);

	return (
		<div style={{ margin: "0px 70px 0px 70px" }}>
			<h3 style={{ textAlign: "center", color: "gold", fontFamily: "cursive" }}>
				Golden Contributors
			</h3>
			<div class="main">
				<div class="row">
					<div class="col-md-4">
						<div>
							<div class="one">
								<div class="text-right pr-2 pt-1">
									<i class="mdi mdi-dots-vertical dotdot"></i>
								</div>
								<div class="d-flex justify-content-center">
									<img
										src="https://qph.fs.quoracdn.net/main-qimg-62116b0a49d1db34216ef91941543ed5"
										width="50"
										class="rounded-circle"
									/>
								</div>
								<div class="text-center">
									{" "}
									<span class="name"> Hamad B</span>
									<p class="mail">business man</p>
								</div>
								<div class="text-center">
									{" "}
									<span class="total d-block pt-2">Total Investment</span>{" "}
									<span class="money"> 9,000 JD</span>{" "}
								</div>
								<div class="text-center align-items-center d-flex justify-content-center pt-2 pb-2">
									<i class="mdi mdi-arrow-right right pl-1"></i>
								</div>
							</div>
						</div>
						<div class="pt-2">
							<div class="one">
								<div class="text-right pr-2 pt-1">
									<i class="mdi mdi-dots-vertical dotdot"></i>
								</div>
								<div class="d-flex justify-content-center">
									<img
										src="http://www.cincinnatichildrens.org/-/media/cincinnati%20childrens/global%20shared/biographies/k/kanj-rula.jpg?mw=220&hash=D37572296A46CAF02B2F8706A9E916EBEFBA5A1C"
										width="50"
										height="65"
										class="rounded-circle"
									/>
								</div>
								<div class="text-center">
									{" "}
									<span class="name"> Rula D</span>
									<p class="mail">jurnalist</p>
								</div>
								<div class="text-center">
									{" "}
									<span class="total d-block pt-2">Total Donation</span>{" "}
									<span class="money"> 2000 JD</span>{" "}
								</div>
								<div class="text-center align-items-center d-flex justify-content-center pt-2 pb-2">
									<i class="mdi mdi-arrow-right right pl-1"></i>
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-4">
						<div>
							<div class="one">
								<div class="text-right pr-2 pt-1">
									<i class="mdi mdi-dots-vertical dotdot"></i>
								</div>
								<div class="d-flex justify-content-center">
									<img
										src="https://jfranews.com.jo/assets/2019-07-12/images/238434_48_1562913899.jpg"
										width="50"
										height="65"
										class="rounded-circle"
									/>
								</div>
								<div class="text-center">
									{" "}
									<span class="name"> Ziad M</span>
									<p class="mail">business man</p>
								</div>
								<div class="text-center">
									{" "}
									<span class="total d-block pt-2">Total Investment</span>{" "}
									<span class="money">8,500 JD</span>{" "}
								</div>
								<div class="text-center align-items-center d-flex justify-content-center pt-2 pb-2">
									<i class="mdi mdi-arrow-right right pl-1"></i>
								</div>
							</div>
						</div>
						<div class="pt-2">
							<div class="one">
								<div class="text-right pr-2 pt-1">
									<i class="mdi mdi-dots-vertical dotdot"></i>
								</div>
								<div class="d-flex justify-content-center">
									<img
										src="https://i.imgur.com/2pRGm74.jpg"
										width="50"
										height="65"
										class="rounded-circle"
									/>
								</div>
								<div class="text-center">
									{" "}
									<span class="name"> Samer H</span>
									<p class="mail">engineer</p>
								</div>
								<div class="text-center">
									{" "}
									<span class="total d-block pt-2">Total Donation</span>{" "}
									<span class="money">1,500 JD</span>{" "}
								</div>
								<div class="text-center align-items-center d-flex justify-content-center pt-2 pb-2">
									<i class="mdi mdi-arrow-right right pl-1"></i>
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-4">
						<div>
							<div class="one">
								<div class="text-right pr-2 pt-1">
									<i class="mdi mdi-dots-vertical dotdot"></i>
								</div>
								<div class="d-flex justify-content-center">
									<img
										src="http://media.tagorg.com/Upload/image/June2016/Forbes.jpg"
										width="50"
										class="rounded-circle"
									/>
								</div>
								<div class="text-center">
									{" "}
									<span class="name"> Tala G</span>
									<p class="mail">business man</p>
								</div>
								<div class="text-center">
									{" "}
									<span class="total d-block pt-2">Total Investment</span>{" "}
									<span class="money">8,000 JD</span>{" "}
								</div>
								<div class="text-center align-items-center d-flex justify-content-center pt-2 pb-2">
									<i class="mdi mdi-arrow-right right pl-1"></i>
								</div>
							</div>
						</div>
						<div class="pt-2">
							<div class="one">
								<div class="text-right pr-2 pt-1">
									<i class="mdi mdi-dots-vertical dotdot"></i>
								</div>
								<div class="d-flex justify-content-center">
									<img
										src="https://www.cew.org/wp-content/uploads/2020/06/gary-v.jpg"
										width="50"
										height="65"
										class="rounded-circle"
									/>
								</div>
								<div class="text-center">
									{" "}
									<span class="name">Gary V </span>
									<p class="mail">life coach</p>
								</div>
								<div class="text-center">
									{" "}
									<span class="total d-block pt-2">Total Donation</span>{" "}
									<span class="money"> 1,500 JD</span>{" "}
								</div>
								<div class="text-center align-items-center d-flex justify-content-center pt-2 pb-2">
									<i class="mdi mdi-arrow-right right pl-1"></i>
								</div>
							</div>
						</div>
					</div>
					{/* <div class="col-md-4">
						<div>
							<div class="one">
								<div class="text-right pr-2 pt-1">
									<i class="mdi mdi-dots-vertical dotdot"></i>
								</div> */}
					{/* <div class="d-flex justify-content-center">
									<img
										src="https://m.marefa.org/images/thumb/f/f1/%D8%B7%D8%A7%D9%87%D8%B1_%D8%A7%D9%84%D9%85%D8%B5%D8%B1%D9%8A.jpg/300px-%D8%B7%D8%A7%D9%87%D8%B1_%D8%A7%D9%84%D9%85%D8%B5%D8%B1%D9%8A.jpg"
										width="50"
										height="65"
										class="rounded-circle"
									/>
								</div>
								<div class="text-center">
									{" "}
									<span class="name"> Taher M</span>
									<p class="mail">ambassador</p>
								</div>
								<div class="text-center">
									{" "}
									<span class="total d-block pt-2">Total Investment</span>{" "}
									<span class="money"> 7,000 JD</span>{" "}
								</div>
								<div class="text-center align-items-center d-flex justify-content-center pt-2 pb-2">
									<i class="mdi mdi-arrow-right right pl-1"></i>
								</div>
							</div>
						</div> */}
					<div class="pt-2">
						<div class="one">
							<div class="text-right pr-2 pt-1">
								<i class="mdi mdi-dots-vertical dotdot"></i>
							</div>
							{/* <div class="d-flex justify-content-center">
								<img
									src="https://www.khaberni.com/uploads/news_model/2020/11/main_image5fb1545a83453.jpg"
									width="50"
									height="65"
									class="rounded-circle"
								/>
							</div>
							<div class="text-center">
								{" "}
								<span class="name">Raed Q </span>
								<p class="mail">business man</p>
							</div>
							<div class="text-center">
								{" "}
								<span class="total d-block pt-2">Total Donation</span>{" "}
								<span class="money"> 4,000 JD</span>{" "}
							</div>
							<div class="text-center align-items-center d-flex justify-content-center pt-2 pb-2">
								<i class="mdi mdi-arrow-right right pl-1"></i>
							</div> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default BestInv;
