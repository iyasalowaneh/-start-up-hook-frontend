// react
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";


// actions
import { profile } from "../../store/actions/authAction";

// styles




const Profile = () => {
    const startupUser = useSelector((state) => state.users.user);
    console.log(startupUser)
    const [user, SetUser] = useState({
    firstName: "",
    lastName: "",
    profilePicture:"",
    type:"",
    education:"",
    experiance:"",
    country:"",
    age:"",
    gender:""

  });
  //SetUser(startupUser)
  //console.log(user)
  const dispatch = useDispatch();
  const history = useHistory();
  const handleChange = (event) => {
    SetUser({ ...user, [event.target.name]: event.target.value });
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(profile(user, history));
  };

  return (
<>
<form onSubmit={handleSubmit} >
  <div class="container">
    {/* <h1>hello {startupUser.firstName}</h1>
    <img src={startupUser.profilePicture} alt="profilePicture" width="500" height="600"/> */}

    <p>Please fill these.</p>
    <hr></hr> 
       <label for="education"><b>education</b></label>
    <input  type="text" placeholder="Enter your education" name="education" onChange={handleChange}  required/>

    <label  for="experiance"><b>experiance</b></label>
    <input  type="text" placeholder="Enter your experiance" name="experiance" onChange={handleChange}  required/>
   

    <label for="age"><b>age</b></label>
    <input  type="number" placeholder="Enter age" name="age" onChange={handleChange}  required/>



  
    <label for="country"><b>country</b></label>
    <input  type="text" placeholder="Enter your country" name="country" onChange={handleChange}  required/>


    <label for="gender">Choose a gender:</label>
  <select name="type" id="type" onChange={handleChange}>
    <option value="male">male</option>
    <option value="female">female</option>
  </select>

    <div class="clearfix">
      <button type="submit" class="signupbtn">Next</button>
    </div>
  </div>
</form>

</>  );
};

export default Profile;
