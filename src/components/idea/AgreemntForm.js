import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { fundIdea, updateIdea } from "../../store/actions/ideaAction";
import InvItem from "./InvItem";
const AgreementForm = () => {
  const dispatch = useDispatch();
  const ideaUsers = useSelector((state) => state.ideasUser.ideasUser);
  const ideas = useSelector((state) => state.ideas.ideas);
  const ideaSlug = useParams().ideaSlug;

  const _idea = ideas.find((idea) => idea.slug === ideaSlug);
  const IdeaWithInv = ideaUsers
    .filter((ideauser) => ideauser.ideaId === _idea.id)
    .map((idea) => <InvItem idea={idea} key={idea.investorId} />);

  const approve = () => {
    dispatch(updateIdea({ ...updateIdea, status: false, ideaId: _idea.id }));
  };

  return (
    <>
      {IdeaWithInv}
      <button
        onClick={() => alert("are you sure you want to decline Investment")}
        type="button"
        class="cancelbtn"
      >
        Decline
      </button>
      <Link to="/withdraw">
        <button
          onClick={() => {
            approve();
          }}
          type="submit"
          class="signupbtn"
        >
          Accept
        </button>
      </Link>
    </>
  );
};
export default AgreementForm;
