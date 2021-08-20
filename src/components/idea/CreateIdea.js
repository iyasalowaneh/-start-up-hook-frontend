// redux
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";

//actions
import { createIdea } from "../../store/actions/ideaAction";

//styling
import { B, B2, IdeaInput, Form, IdeaInput2 } from "../../style";
const CreateIdea = () => {
  const [idea, setIdea] = useState({
    ideaName: "",
    ideaPicture: "",
    ideaDescription: "",
    fundAmount: "",
    fundType: "",
    ideaPdf: "",
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const handleChange = (event) => {
    setIdea({ ...idea, [event.target.name]: event.target.value });
  };

  const handleideacover = (event) => {
    setIdea({ ...idea, ideaPicture: event.target.files[0] });
  };

  const handelIdeaFile = (event) => {
    setIdea({ ...idea, ideaPdf: event.target.files[0] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createIdea(idea, history));
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <div class="container">
          <h1>Let's create you idea</h1>
          <hr></hr>
          <label for="ideaName">
            <b>Idea Name</b>
          </label>
          <input
            type="text"
            placeholder="Enter idea Name"
            name="ideaName"
            onChange={handleChange}
            required
          />

          <label for="ideaDescription">
            <b>Idea description</b>
          </label>
          <input
            type="text"
            placeholder="Enter your idea Description"
            name="ideaDescription"
            onChange={handleChange}
            required
          />
          <label for="fundType">
            <B>Choose a fund Type</B>
          </label>
          <select name="fundType" id="fundType" onChange={handleChange}>
            <option value="investment">investment</option>
            <option value="donation">donation</option>
            <option value="consultation">consultation</option>
            <option value="all">all</option>
          </select>
          <label for="fundAmount">
            <B2>Fund Amount</B2>
          </label>
          <IdeaInput
            type="number"
            placeholder="Enter your required fund"
            name="fundAmount"
            onChange={handleChange}
            required
          />
          <br />
          <br />

          <label for="ideaPicture">
            <B>Idea cover picture </B>
          </label>
          <input
            type="file"
            placeholder=" ideaPicture"
            name="ideaPicture"
            onChange={handleideacover}
          />
          <label for="ideaPdf">
            <B>Submit your PDF </B>
          </label>
          <IdeaInput2
            type="file"
            placeholder=" ideaPdf"
            name="ideaPdf"
            onChange={handelIdeaFile}
          />

          <div class="clearfix">
            <button type="submit" class="signupbtn">
              submit
            </button>
          </div>
        </div>
      </Form>
    </>
  );
};

export default CreateIdea;
