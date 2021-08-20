//Styling
import { FDiv, counterBox } from "../../style";
import { useSelector } from "react-redux";

const Footer = () => {
  const ideaUsers = useSelector((state) => state.ideasUser.ideasUser);
  const ideas = useSelector((state) => state.ideas.ideas);

  return (
    <FDiv>
      <footer class=" text-white text-center text-lg-start">
        <div class="container p-4">
          <div class="row">
            <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h4>
                In startUp hooks
                <br />
                we planning to reach 1000 success stories
                <br />
                by end of 2022
                <br /> you can be part of these.
              </h4>
            </div>

            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase">Success story</h5>
              <h1>{ideas.length}</h1>
            </div>

            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase mb-0">Number of investors</h5>
              <h1> {ideaUsers.length} </h1>
            </div>
          </div>
        </div>
      </footer>
    </FDiv>
  );
};
export default Footer;
