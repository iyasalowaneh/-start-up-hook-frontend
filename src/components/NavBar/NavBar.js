import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

//styling
import { Button, FDiv, L } from "../../style";

const NavBar = () => {
  return (
    <FDiv>
      <nav class="navbar navbar-expand-lg navbar-dark ">
        <div class="container-fluid">
          <Link to="/" class="navbar-brand">
            Start-up Hook
          </Link>
          <Link to="/ideas" class="navbar-brand">
            Ideas
          </Link>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <form class="d-flex">
              <L to="/signin">
                <Button type="button">SignIn</Button>
              </L>
              <L to="/signup">
                <Button type="button">SignUp</Button>
              </L>
            </form>
          </div>
        </div>
      </nav>
    </FDiv>
  );
};

export default NavBar;
