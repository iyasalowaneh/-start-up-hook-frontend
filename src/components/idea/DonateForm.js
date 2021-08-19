import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import { donationIdea } from "../../store/actions/ideaAction";

const DonateForm = () => {
  const ideas = useSelector((state) => state.ideas.ideas);

  const ideaSlug = useParams().ideaSlug;
  const _idea = ideas.find((idea) => idea.slug === ideaSlug);

  const [idea, setIdea] = useState({
    amount: "",
  });
  const history = useHistory();
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setIdea({ ...idea, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newIdea = { ...idea, ideaId: _idea.id };
    dispatch(donationIdea(newIdea));
    history.push("/thankyou");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Enter your donation Amount"
        name="amount"
        onChange={handleChange}
        required
      />
      <button type="submit">donate</button>
    </form>
  );
};
export default DonateForm;
