//react
import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
//styling
import { MesBox } from "../../style";
//components

import IdeaOwnerItem from "./IdeaOwnerItem";
import InvestorItem from "./InvestorItem";

const InvestorList = () => {
	const ideas = useSelector((state) => state.ideas.ideas);
	const user = useSelector((state) => state.user.user);
	let userType = user.type;
	const ideaSlug = useParams().ideaSlug;
	const idea = ideas.find((idea) => idea.slug === ideaSlug);
	const ideaUsers = useSelector((state) => state.ideasUser.ideasUser);
	const users = useSelector((state) => state.users.users);

	const invList = ideaUsers
		.filter((inv) => inv.ideaId === idea.id)
		.map((inv) => users.find((user) => user.id === inv.investorId))
		.map((ideaInv) => <InvestorItem ideaInv={ideaInv} key={ideaInv.id} />);
	console.log(invList);

	const ownerList = users
		.filter((user) => user.id === idea.ownerId)
		.map((ideaOwner) => (
			<IdeaOwnerItem ideaOwner={ideaOwner} key={ideaOwner.id} />
		));

	return (
		<MesBox>
			{invList}
			{ownerList}
		</MesBox>
	);
};

export default InvestorList;
