import { Imgoo, Pad } from "../../style";

const AllInvTransaction = ({ ideaivs }) => {
	return (
		<tr>
			<td>investment</td>
			<td>{ideaivs.createdAt}</td>
			<td>{ideaivs.amount}</td>
		</tr>
	);
};

export default AllInvTransaction;
