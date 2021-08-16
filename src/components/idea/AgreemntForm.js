import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { fundIdea } from "../../store/actions/ideaAction";

const AgreementForm = () => {
    const dispatch = useDispatch();
    const ideas = useSelector((state) => state.ideas.ideas);
    const ideaSlug = useParams().ideaSlug;

    const _idea = ideas.find((idea) => idea.slug === ideaSlug);

//     const IdeaInvestors = _idea.eecce
//   const handleChange = (event) => {
//     setIdea({ ...idea, [event.target.name]: event.target.value });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const newIdea = { ...idea, ideaId: _idea.id };
//     dispatch(fundIdea(newIdea));
 // };

  return (<>

<button onClick={()=>alert("are you sure you want to decline Investment")} type="button" class="cancelbtn">Decline</button>
<Link to="/ThankYouPage">
      <button type="submit" class="signupbtn">Accept</button>
 </Link> 
 </>);
};
export default AgreementForm;
