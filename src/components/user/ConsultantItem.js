//styling
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const ConsultantItem = ({ consultant }) => {
  const ideas = useSelector((state) => state.ideas.ideas);

  const ideaSlug = useParams().ideaSlug;
  const idea = ideas.find((idea) => idea.slug === ideaSlug);
  return (
    <Link to={`/ideas/${idea.slug}/chat/${consultant.slug}`}>
      <li>
        <img src={consultant.profilePicture} alt=" " width="40px" />
        <div>
          <h2>
            {consultant.firstName} {consultant.lastName}
          </h2>
          <h3>
            <span class="status green"></span>
            online
          </h3>
        </div>
      </li>
    </Link>
  );
};

export default ConsultantItem;
