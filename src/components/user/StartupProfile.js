// react
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

// actions
import { profile } from "../../store/actions/authAction";

const Profile = () => {
  const startupUser = useSelector((state) => state.user.user);
  console.log(startupUser);
  const [user, setUser] = useState({
    education: "",
    experiance: "",
    country: "",
    age: "",
    gender: "",
  });

  const dispatch = useDispatch();
  const history = useHistory();
  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(profile(user, history));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div class="container">
          <h1>hello {startupUser.firstName}</h1>
          <img
            src={startupUser.profilePicture}
            alt="profilePicture"
            width="150"
            height="150"
          />

          <p>Please fill these.</p>
          <hr></hr>
          <label for="education">
            <b>Education</b>
          </label>
          <input
            type="text"
            placeholder="Enter your education"
            name="education"
            onChange={handleChange}
            required
          />

          <label for="experiance">
            <b>Experiance</b>
          </label>
          <input
            type="text"
            placeholder="Enter your experiance"
            name="experiance"
            onChange={handleChange}
            required
          />

          <label for="age">
            <b>Age</b>
          </label>
          <input
            type="text"
            placeholder="Enter your age"
            name="age"
            onChange={handleChange}
            required
          />

          <label for="country">
            <b>Country</b>
          </label>
          <input
            type="text"
            placeholder="Enter your country"
            name="country"
            onChange={handleChange}
            required
          />

          <label for="gender">Choose a gender:</label>
          <select name="gender" id="gender" onChange={handleChange}>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>

          <div class="clearfix">
            <button type="submit" class="signupbtn">
              Next
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Profile;
