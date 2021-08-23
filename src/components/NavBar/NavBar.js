import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
//components
import Signin from "../User/SignIn";

//actions
import { signout } from "../../store/actions/authAction";

//styling
import { ButtonS, FDiv, L, H5, Imgoo } from "../../style";

const NavBar = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user.user);

	return (
		<FDiv>
			<nav class="navbar navbar-expand-lg navbar-dark ">
				<div class="container-fluid">
					<Link to="/" class="navbar-brand">
						Start-up Hook
					</Link>
					<Link to="/ideas" class="navbar-brand">
						Ideas
					</Link>
					<Link to="/gdash" class="navbar-brand">
						Statics
					</Link>

					{!user ||
						(user.type === "admin" && (
							<Link to="/adminlist" class="navbar-brand">
								Admin dashboard
							</Link>
						))}
					{!user ||
						(user.type === "startup" && (
							<Link to="/createIdea" class="navbar-brand">
								Create your idea
							</Link>
						))}

					{!user ||
						(user.type === "startup" && (
							<Link to="/DashBoard" class="navbar-brand">
								<Imgoo src="https://www.freeiconspng.com/thumbs/person-icon-blue/person-icon-blue-18.png" />{" "}
							</Link>
						))}
					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
						{!user && <Signin />}

						<form class="d-flex">
							{user && <H5>Hello, {user.firstName}</H5>}
							{user && (
								<L>
									<ButtonS onClick={() => dispatch(signout())}>
										Sign out
									</ButtonS>
								</L>
							)}
						</form>
					</div>
				</div>
			</nav>
		</FDiv>
	);
};

export default NavBar;
