const InvTransaction = ({ ideaivs }) => {
	return (
		<tr>
			<td scope="row">
				{" "}
				<span class="fa fa-briefcase mr-1"></span> investment
			</td>
			<td>
				<span class="fa fa-cc-mastercard"></span>
			</td>
			<td class="text-muted">{ideaivs.createdAt}</td>
			<td class="d-flex justify-content-end align-items-center">
				{" "}
				<span class="fa fa-long-arrow-up mr-1"></span>
				{ideaivs.amount}
			</td>
		</tr>
	);
};

export default InvTransaction;
