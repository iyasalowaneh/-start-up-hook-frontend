// react
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";

// actions
import { signup } from "../../store/actions/authAction";

// styles



const Signup = () => {
  const [user, SetUser] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword:"",
    profilePicture:"",
    idPicture:"",
    type:""


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
    <div class="container">
      <div class="d-flex justify-content-center h-100">
        <div class="card">
          <div class="card-header">
            <h3>Register</h3>
          </div>
          <div class="card-body">
            <form onSubmit={handleSubmit}>
              <div class="input-group form-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="fas fa-user"></i>
                  </span>
                </div>

                <input
                  type="email"
                  class="form-control"
                  name="email"
                  onChange={handleChange}
                  placeholder="enter your email"
                  value={user.email}
                />
              </div>
              <div class="input-group form-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="fas fa-user"></i>
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  name="firstName"
                  onChange={handleChange}
                  placeholder="enter your firstName"
                  value={user.firstName}
                />
              </div>{" "}
              <div>
                
                <input
                  type="text"
                  class="form-control"
                  name="lastName"
                  onChange={handleChange}
                  placeholder="enter your lastName"
                  value={user.lastName}
                />{" "}
              </div>
<div>
                
                <input
                  type="password"
                  class="form-control"
                  name="password"
                  onChange={handleChange}
                  placeholder="enter your password"
                  value={user.password}
                />{" "}
              </div>


              <div>
                
                <input
                  type="password"
                  class="form-control"
                  name="confirmPassword"
                  onChange={handleChange}
                  placeholder="confirmPassword"
                  value={user.confirmPassword}
                />{" "}
              </div>
              {/* <select
        onChange={handleChange}
        class="aria-select"
        multiple
        aria-label="multiple select example"
      >
<option name="startup" value={user.type}>startup</option>
<option name="invstor" value={user.type} >invstor</option>
     </select> */}









              <div class="input-group form-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="fas fa-user"></i>
                  </span>
                </div>
                <input
                  type="file"
                  class="form-control"
                  name="profilePicture"
                  onChange={handleprofile}
                  placeholder="profilePicture"
                />
              </div>


              <div class="input-group form-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="fas fa-user"></i>
                  </span>
                </div>
                <input
                  type="file"
                  class="form-control"
                  name="idPicture"
                  onChange={handleid}
                  placeholder="idPicture"
                />
              </div>
              <button type="submit">sign up </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </>
   
  );
};

export default Signup;
