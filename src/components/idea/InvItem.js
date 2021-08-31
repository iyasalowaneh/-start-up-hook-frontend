//Styling
import { Embed } from "../../style";

const InvItem = ({ idea }) => {
  return (
    <>
      <Embed type="application/pdf" src={idea.agreement} />
      <p>{idea.amount}</p>
    </>
  );
};

export default InvItem;
