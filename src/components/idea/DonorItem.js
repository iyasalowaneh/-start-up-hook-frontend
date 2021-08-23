import { Imgoo, Pad } from "../../style";

const DonorItem = ({ ideadon }) => {
	return (
		<>
			<tr>
				<td scope="row"> donation</td>
				<td>
					<span class="fa fa-cc-mastercard">DN</span>
				</td>
				<td class="text-muted">{ideadon.createdAt}</td>

				<td class="d-flex justify-content-start align-items-center">
					{ideadon.amount}
					<Pad>
						<Imgoo src="https://www.iconpacks.net/icons/1/free-money-icon-799-thumb.png" />
					</Pad>{" "}
				</td>
			</tr>
		</>
	);
};
export default DonorItem;
