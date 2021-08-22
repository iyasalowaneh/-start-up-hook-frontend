// react
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";

// actions
import { signup } from "../../store/actions/authAction";

// styles
import { IdeaInput, BB, PB, Label } from "../../style";
const Signup = () => {
  const [user, SetUser] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    profilePicture: "",
    idPicture: "",
    type: "",
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const handleChange = (event) => {
    SetUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleprofile = (event) => {
    SetUser({ ...user, profilePicture: event.target.files[0] });
  };

  const handleid = (event) => {
    SetUser({ ...user, idPicture: event.target.files[0] });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signup(user, history));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div class="container">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
          <hr></hr>
          <label for="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            onChange={handleChange}
            required
          />

          <label for="firstName">
            <b>firstName</b>
          </label>
          <input
            type="text"
            placeholder="Enter firstName"
            name="firstName"
            onChange={handleChange}
            required
          />

          <label for="lastName">
            <b>lastName</b>
          </label>
          <input
            type="text"
            placeholder="Enter lastName"
            name="lastName"
            onChange={handleChange}
            required
          />

          <Label for="profilePicture">
            <BB>profile picture</BB>
          </Label>
          <input
            type="file"
            placeholder=" profilePicture"
            name="profilePicture"
            onChange={handleprofile}
          />

          <label for="idPicture">
            <BB>ID Picture </BB>
          </label>
          <input
            type="file"
            placeholder=" idPicture"
            name="idPicture"
            onChange={handleid}
          />

          <label for="type">
            <BB>Choose a type:</BB>
          </label>
          <select name="type" id="type" onChange={handleChange}>
            <option value="startup">Startup</option>
            <option value="investor">Investor</option>
            <option value="donor">Donor</option>
            <option value="consultant">Consultant</option>
          </select>
          <br />
          <Label for="password">
            <BB>password</BB>
          </Label>
          <IdeaInput
            type="password"
            placeholder="Enter password"
            name="password"
            onChange={handleChange}
            required
          />

          <label for="confirmPassword">
            <PB>confirmPassword</PB>
          </label>
          <IdeaInput
            type="password"
            placeholder=" confirmPassword"
            name="confirmPassword"
            onChange={handleChange}
            required
          />
          <div class="clearfix">
            <button type="button" class="cancelbtn">
              Cancel
            </button>
            <button type="submit" class="signupbtn">
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Signup;
