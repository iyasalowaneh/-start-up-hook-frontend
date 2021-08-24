// redux
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";

//actions
import { signin } from "../../store/actions/authAction";
//styling
import { Input, ButtonS } from "../../style";
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
  const handelSU = () => {
    history.push("/signup");
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input
        placeholder="Enter email"
        name="username"
        onChange={handleChange}
        required
      />
      <Input
        type="password"
        placeholder="Enter password"
        name="password"
        onChange={handleChange}
        required
      />

      <ButtonS type="submit">Sign In</ButtonS>
      <ButtonS onClick={handelSU} type="button">
        Sign Up
      </ButtonS>
    </form>
  );
};

export default Signin;
