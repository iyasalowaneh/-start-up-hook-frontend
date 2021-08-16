import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fundIdea } from "../../store/actions/ideaAction";

const InvestForm = () => {
  const ideas = useSelector((state) => state.ideas.ideas);

  const ideaSlug = useParams().ideaSlug;
  const _idea = ideas.find((idea) => idea.slug === ideaSlug);

  const [idea, setIdea] = useState({
    amount: "",
    agreement: "",
  });

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setIdea({ ...idea, [event.target.name]: event.target.value });
  };
  const handleAg = (event) => {
    setIdea({ ...idea, agreement: event.target.files[0] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newIdea = { ...idea, ideaId: _idea.id };
    dispatch(fundIdea(newIdea));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Enter your fund Amount"
        name="amount"
        onChange={handleChange}
        required
      />
      <input
        type="file"
        placeholder="Enter your fund Amount"
        name="agreement"
        onChange={handleAg}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};
export default InvestForm;
