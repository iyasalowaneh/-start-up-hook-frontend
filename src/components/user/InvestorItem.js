//styling

import { L, ProfileImage } from "../../style";

const InvestorItem = ({ ideaInv }) => {
	return (
		<div class="list-group">
			<a class="list-group-item list-group-item-action">
				<div class="d-flex w-100 justify-content-between">
					<L to={`/chat/${ideaInv.slug}`}>
						<ProfileImage src={ideaInv.profilePicture} width="50px" />
					</L>
					<h5 class="mb-1">{ideaInv.firstName}</h5>
					<small class="text-muted">online</small>
				</div>
				<p class="mb-1">He has invested in your Idea </p>
				<small class="text-muted"></small>
			</a>
		</div>
	);
};

export default InvestorItem;
