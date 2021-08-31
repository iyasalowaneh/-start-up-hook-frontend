import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const InvestorItem = ({ ideaInv }) => {
  const ideas = useSelector((state) => state.ideas.ideas);

  const ideaSlug = useParams().ideaSlug;
  const idea = ideas.find((idea) => idea.slug === ideaSlug);

  return (
    <Link to={`/ideas/${idea.slug}/chat/${ideaInv.slug}`}>
      <li>
        <img src={ideaInv.profilePicture} alt="name" width="40px" />
        <div>
          <h2>
            {ideaInv.firstName} {ideaInv.lastName}
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

export default InvestorItem;
