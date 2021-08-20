import { Link } from "react-router-dom";

//styling
import { ThanksDiv, ThanksDiv2 } from "../../style";

const DonationThankYouPage = () => {
  return (
    <>
      <ThanksDiv>
        Thank You
        <br />
        <img
          src="https://icons.veryicon.com/png/o/miscellaneous/cloud-call-center/success-24.png"
          alt="success"
        />
      </ThanksDiv>
      <ThanksDiv2>
        Thank you for your great donation, you helped changing a person life.{" "}
        <br /> go back to <Link to="/">Home</Link>
      </ThanksDiv2>
    </>
  );
};

export default DonationThankYouPage;
