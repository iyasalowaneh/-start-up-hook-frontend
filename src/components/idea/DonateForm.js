import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { donationIdea } from "../../store/actions/ideaAction";
import { Form } from "../../style";

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
    history.push("/payment");
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <p>
          The href attribute is required for an anchor to be keyboard
          accessible. Provide a valid, navigable address as the href value. If
          you cannot provide an href, but still nee
        </p>
        <input
          type="number"
          placeholder="Enter your donation Amount"
          name="amount"
          onChange={handleChange}
          required
        />
        <button type="submit">donate</button>
      </Form>
    </>
  );
};
export default DonateForm;
