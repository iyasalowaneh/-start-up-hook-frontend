import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

export const GlobalStyle = createGlobalStyle`
align-items: center;
h1{
    font-family: cursive;
}

body
{
  color: ${(props) => props.theme.mainColor} ;
  background-color: ${(props) => props.theme.backgroundColor}

};


`;
export const theme = {
	light: {
		mainColor: "#242424", // main font color
		backgroundColor: "#f1faee", // main background color
		pink: "#ff85a2",
		red: "#ff3232",
	},
	dark: {
		mainColor: "#fefafb", // main font color
		backgroundColor: "#001219", // main background color
		pink: "#ff85a2",
		red: "#ff3232",
	},
};
export const ThemeButton = styled.button`
	font-size: 1em;
	margin: 1.25em;
	padding: 0.25em 1em;
	border-radius: 3px;
	background-color: ${(props) => props.theme.mainColor};
	color: ${(props) => props.theme.backgroundColor};
`;
export const Button = styled.button`
	background-color: #7ae582;
	margin-left: 4px;

	color: #004e64;
	margin-top: 5px;
`;
export const L = styled(Link)`
	margin-left: 4px;
`;
export const HomeDiv = styled.div`
	margin-top: 50px;
`;
export const FDiv = styled.div`
	background-color: #00a5cf;
	margin-top: auto;
`;
export const Image = styled.img`
	height: 600px;
	padding-left: 50px;
	padding-right: 50px;
	border-radius: 90px;
`;

export const H2 = styled.h2`
	font-family: cursive;
	text-align: center;
	margin-top: 80px;
	color: #004e64;
`;

export const P = styled.p`
	font-family: cursive;
	text-align: center;
	color: #004e64;
	margin-left: 150px;
	margin-right: 150px;
`;

export const IdeaDiv = styled.div`
	border-style: solid;
	border-width: 1px;
	border-color: gray;
	margin-top: 50px;
	margin-left: 25px;
	margin-right: 25px;
`;

export const DetailDiv = styled.div`
	border-style: solid;
	border-width: 1px;
	border-color: gray;
	margin-left: 170px;
`;
export const Form = styled.form`
	margin-right: 400px;
	margin-left: 400px;
	margin-top: 150px;
`;
export const lisImage = styled.img`
	height: 600px;
`;
export const TextArea = styled.textarea`
	width: 100%;
`;

export const SendButton = styled.button`
	width: 25%;
	margin-left: 250px;
`;
export const ChatImage = styled.img`
	float: left;
	max-width: 60px;
	width: 100%;
	margin-right: 20px;
	border-radius: 50%;
`;
export const ChatImageR = styled.img`
	float: right;
	max-width: 60px;
	width: 100%;
	margin-left: 20px;
	margin-right: 0;
	border-radius: 50%;
`;

export const Embed = styled.embed`
	width: 700px;
	height: 900px;
	margin-left: 300px;
`;

export const Forme = styled.div`
	text-align: center;
	width: 800px;
	height: 1500px;
	border-style: solid;
	border-width: 1px;
	margin-right: 400px;
	margin-left: 400px;
	margin-top: 100px;
	margin-bottom: 300px;
	padding-left: 50px;
	padding-right: 50px;
	padding-top: 50px;
	border-color: gray;
`;

export const BabeForme = styled.div`
	padding-left: 50px;
	padding-right: 50px;
	padding-top: 50px;
	padding-bottom: 300px;
	border-color: gray;
`;

export const ThanksDiv = styled.div`
	text-align: center;
	border-color: gray;
	font-family: cursive;
	font-size: 100px;
	color: black;
	text-align: center;
`;

export const ThanksDiv2 = styled.div`
	font-family: cursive;
	font-size: 25px;
	color: black;
	text-align: center;
`;

export const FooterL = styled(Link)`
	margin-left: 4px;
	text-decoration: unset;
	color: black;
`;

export const ButtonC = styled.button`
	background-color: greenyellow;
	margin-left: 4px;

	color: #004e64;
	width: 114px;
	margin-top: 5px;
`;

export const ButtonI = styled.button`
	background-color: #00f5d4;
	margin-left: 4px;

	color: #004e64;
	width: 114px;
	margin-top: 5px;
`;

export const ButtonD = styled.button`
	background-color: #0aff99;
	margin-left: 4px;

	color: #004e64;
	width: 114px;
	margin-top: 5px;
`;
export const ButtonP = styled.button`
	background-color: #ade8f4;
	color: #004e64;
	width: 114px;
	margin-top: 5px;
`;
export const P1 = styled.p`
	font-size: medium;
	font-weight: normal;
`;
export const L2 = styled(Link)`
	text-decoration: unset;
	font-size: large;
	font-weight: normal;
	margin-left: 110px;
`;
export const H4 = styled.h4`
	margin-top: 40px;
`;
export const H5 = styled.h5`
	margin-top: 17px;
	color: white;
`;
export const ButtonDiv = styled.div`
	margin-top: 10px;
`;
export const Input = styled.input`
	margin-left: 15px;
`;
export const ButtonS = styled.button`
	background-color: unset;
	color: #004e64;
	width: 114px;
	margin-top: 5px;
`;

export const CounterBox = styled.h1`
	color: black;

	text-align: center;
`;

export const MesBox = styled.div`
	width: 50%;
	border-style: outset;
	margin-left: 450px;
	margin-top: 40px;
`;

export const ProfileImage = styled.img`
	border-radius: 50%;
`;

export const Mdiv = styled.div`
	width: 40%;
	height: 70%;
	border-style: ridge;
	border: 2px black;
	border-radius: 12px;
	align-content: center;
	margin-left: 500px;
	margin-bottom: 100px;
`;
export const B = styled.b`
	margin-right: 7px;
`;
export const B2 = styled.b`
	margin-left: 168px;
`;
export const IdeaInput = styled.input`
	border-style: solid;
	border-color: grey;
	border-width: 1px;
	margin-left: 7px;
`;
export const IdeaInput2 = styled.input`
	width: 100px;
`;
export const Body = styled.body`
	min-height: 75vh;
	display: flex;
	flex-direction: column;
`;

export const ImageLogo = styled.img`
	width: 360px;
	height: 250px;
`;

export const Imgoo = styled.img`
	width: 25px;
	height: 25px;
`;
