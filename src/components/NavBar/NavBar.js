import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

//actions
import { signout } from "../../store/actions/authAction";

//styling
import { Button, FDiv, L } from "../../style";

const NavBar = () => {
  const dispatch = useDispatch();

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
              <L>
                <Button onClick={() => dispatch(signout())}>Sign out</Button>
              </L>
            </form>
          </div>
        </div>
      </nav>
    </FDiv>
  );
};

export default NavBar;
