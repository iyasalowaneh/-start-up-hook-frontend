
const IdeaItem = (props) => {
  const idea = props.idea;
  
  return (
    <div class="card" >
   <img src={idea.ideaPicture}  class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">{idea.ideaName}</p>
    <p class="card-text">{idea.ideaDescription}</p>
  </div>
</div>


  );
};

export default IdeaItem;
