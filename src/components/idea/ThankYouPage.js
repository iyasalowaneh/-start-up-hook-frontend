import { Link } from "react-router-dom";
//Styling
import { ThanksDiv, ThanksDiv2 } from "../../style";

const ThankYouPage = () => {
  return (
    <>
      <ThanksDiv>
        congratulation
        <br />
        <img
          src="https://icons.veryicon.com/png/o/miscellaneous/cloud-call-center/success-24.png"
          alt="success"
        />
      </ThanksDiv>
      <ThanksDiv2>
        you have successfully reach your needed fund, you will receive your fund
        into your bank account within 2 business days.
        <br /> go back to <Link to="/">Home</Link>
      </ThanksDiv2>
    </>
  );
};

export default ThankYouPage;
