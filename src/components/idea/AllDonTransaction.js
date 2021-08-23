import { Imgoo, Pad } from "../../style";

const AllDonTransaction = ({ ideadon }) => {
	return (
		<tr>
			<td>donation</td>
			<td>{ideadon.createdAt}</td>
			<td>{ideadon.amount}</td>
		</tr>
	);
};

export default AllDonTransaction;
