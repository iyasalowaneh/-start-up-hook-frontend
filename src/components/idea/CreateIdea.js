// redux
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";

//actions
import { createIdea } from "../../store/actions/ideaAction";
const CreateIdea = () => {

  const [idea, setIdea] = useState({
     ideaName :"",
     ideaPicture:"",
     ideaDescription:"",
     fundAmount:"",
     fundType:"",  
     ideaPdf:""
    }
  );
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
     dispatch(createIdea(idea,history));
    
  };

  return (
<>
<form onSubmit={handleSubmit} >
  <div class="container">
    <h1>Let's create you idea</h1>
    <hr></hr> 
       <label for="ideaName"><b>Idea Name</b></label>
    <input  type="text" placeholder="Enter idea Name" name="ideaName" onChange={handleChange}  required/>


    
    <label for="ideaPicture"><b>idea cover picture </b></label>
    <input  type="file" placeholder=" ideaPicture" name="ideaPicture" onChange={handleideacover}  /> 

    <label for="ideaDescription"><b>ideaDescription</b></label>
    <input  type="text" placeholder="Enter your idea Description" name="ideaDescription" onChange={handleChange}  required/>

    <label for="fundAmount"><b>fund Amount</b></label>
    <input  type="number" placeholder="Enter your required fund" name="fundAmount" onChange={handleChange}  required/>

    <label for="fundType">Choose a fund Type:</label>
  <select name="fundType" id="fundType" onChange={handleChange}>
    <option value="investment">investment</option>
    <option value="donation">donation</option>
    <option value="consultation">consultation</option>
    <option value="mixed">mixed</option>

  </select>

  <label for="ideaPdf"><b>submit your PDF </b></label>
    <input  type="file" placeholder=" ideaPdf" name="ideaPdf" onChange={handelIdeaFile}  /> 

    <div class="clearfix">
      <button type="submit" class="signupbtn">submit</button>
    </div>
  </div>
</form>







</>  );
};

export default CreateIdea;
