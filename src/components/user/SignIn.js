// redux
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";

//actions
import { signin } from "../../store/actions/authAction";

const Signin = () => {
  const [user, SetUser] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const handleChange = (event) => {
    SetUser({ ...user, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signin(user, history));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div class="container">
          <h1>Sign In</h1>
          <p>Please fill in this form to signIn.</p>
          <hr></hr>
          <label for="username">
            <b>email</b>
          </label>
          <input
            type="text"
            placeholder="Enter email"
            name="username"
            onChange={handleChange}
            required
          />

          <label for="firstName">
            <b>password</b>
          </label>
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            onChange={handleChange}
            required
          />

          <div class="clearfix">
            <button type="submit" class="signupbtn">
              Sign In
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Signin;
