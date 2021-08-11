// redux
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";

//actions
import { signin } from "../../store/actions/authAction"

const Signin = () => {

  const [user, SetUser] = useState({

        email: "",
        password: "",
    }
  );
  const dispatch = useDispatch();
  const history = useHistory();
  const handleChange = (event) => {
    SetUser({ ...user, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
     dispatch(signin(user,history));
    
  };

  return (
    // <form onSubmit={handleSubmit}>
    //   <div class="mb-3">
    //     <label for="formGroupExampleInput2" class="form-label">
    //       Email 
    //     </label>
    //     <input
    //       type="text"
    //       class="form-control"
    //       id="formGroupExampleInput2"
    //       placeholder="Enter the email "
    //       name="email"
    //       onChange={handleChange}
    //       value={user.email}
    //     />
    //   </div>
    
    //   <div class="mb-3">
    //     <label for="formGroupExampleInput2" class="form-label">
    //     PASSWORD 
    //     </label>
    //     <input
    //       type="password"
    //       class="form-control"
    //       id="formGroupExampleInput2"
    //       placeholder="Enter your password "
    //       name="password"
    //       onChange={handleChange}
    //       value={user.password}
    //     />
    //   </div>
     
    //   <button type="submit">{ "Submit"}</button>
    // </form>






<form onSubmit={handleSubmit} class="form-horizontal" action='' method="POST">
  <fieldset>
    <div id="legend">
      <legend class="">Register</legend>
    </div>
    <div class="control-group">
       Username
      <label class="control-label"  for="username">Username</label>
      <div class="controls">
        <input type="text" id="username" name="username" placeholder="" class="input-xlarge"/>
        <p class="help-block">Username can contain any letters or numbers, without spaces</p>
      </div>
    </div>
 
    <div class="control-group">
      E-mail
      <label class="control-label" for="email">E-mail</label>
      <div class="controls">
        <input type="text" id="email" name="email" placeholder="" class="input-xlarge"/>
        <p class="help-block">Please provide your E-mail</p>
      </div>
    </div>
 
    <div class="control-group">
       Password
      <label class="control-label" for="password">Password</label>
      <div class="controls">
        <input type="password" id="password" name="password" placeholder="" class="input-xlarge"/>
        <p class="help-block">Password should be at least 4 characters</p>
      </div>
    </div>
 
    <div class="control-group">
       Password
      <label class="control-label"  for="password_confirm">Password (Confirm)</label>
      <div class="controls">
        <input type="password" id="password_confirm" name="password_confirm" placeholder="" class="input-xlarge"/>
        <p class="help-block">Please confirm password</p>
      </div>
    </div>
 
    <div class="control-group">
     Button
      <div class="controls">
        <button class="btn btn-success">Register</button>
      </div>
    </div>
  </fieldset>
</form>








  );
};

export default Signin;
