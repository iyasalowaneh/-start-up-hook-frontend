import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { donationIdea } from "../../store/actions/ideaAction";
import { Form, H2, P } from "../../style";

const DonateForm = () => {
  const ideas = useSelector((state) => state.ideas.ideas);

  const ideaSlug = useParams().ideaSlug;
  const _idea = ideas.find((idea) => idea.slug === ideaSlug);

  const remainingAmount = _idea.fundAmount - _idea.recievedFund;

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
        <H2>Donation</H2>
        <P>
          Thank you for your great generosity! We, at Start-up hook
          organization, greatly appreciate your donation, and your sacrifice.
          Your support helps to further our mission through supporting the
          start-ups in the arab world. Your support is invaluable to us, thank
          you again
        </P>
        <br />
        <P>Remaining amount {remainingAmount}$ </P>
        <div class="input-group mb-3">
          <input
            type="number"
            placeholder="Enter your donation Amount"
            name="amount"
            onChange={handleChange}
            required
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        <button type="submit">donate</button>
      </Form>
    </>
  );
};
export default DonateForm;
