import { Imgoo, Pad } from "../../style";

const InvTransaction = ({ ideaivs }) => {
	return (
		<tr>
			<td scope="row"> investment</td>
			<td>
				<span class="fa fa-cc-mastercard">IN</span>
			</td>
			<td class="text-muted">{ideaivs.createdAt}</td>
			<td class="d-flex justify-content-start align-items-center">
				{" "}
				{ideaivs.amount}
				<Pad>
					<Imgoo src="https://www.iconpacks.net/icons/1/free-money-icon-799-thumb.png" />
				</Pad>
			</td>
		</tr>
	);
};

export default InvTransaction;
